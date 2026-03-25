const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email'
      ]
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
      trim: true,
      maxlength: [100, 'Subject cannot exceed 100 characters']
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      maxlength: [5000, 'Message cannot exceed 5000 characters']
    },
    status: {
      type: String,
      enum: ['new', 'read', 'responded'],
      default: 'new'
    },
    read: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
