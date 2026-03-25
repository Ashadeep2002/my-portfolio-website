const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST: Create a new contact message
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Please provide all required fields' 
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    // Save to database
    await contact.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. I will get back to you soon.',
      data: contact
    });

    // Optional: Send email notification (uncomment if configured)
    // await sendEmailNotification(contact);

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// GET: Retrieve all contact messages (for admin dashboard)
router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// GET: Retrieve single contact by ID
router.get('/contact/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Mark as read
    contact.read = true;
    contact.status = 'read';
    await contact.save();

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
});

// PUT: Update contact status
router.put('/contact/:id', async (req, res) => {
  try {
    const { status } = req.body;

    if (!['new', 'read', 'responded'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// DELETE: Delete a contact message
router.delete('/contact/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

module.exports = router;
