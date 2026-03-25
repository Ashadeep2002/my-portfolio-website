// Example utilities for backend if needed in the future

// Email sending utility (optional enhancement)
const nodemailer = require('nodemailer');

const sendEmailNotification = async (contact) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${contact.subject}`,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Subject:</strong> ${contact.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contact.message}</p>
      <hr>
      <p>Submitted at: ${new Date(contact.createdAt).toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('📧 Notification email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmailNotification };
