# Portfolio Website - Backend API

Backend server for the modern portfolio website built with Express.js and MongoDB.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env` file content to your local environment
   - Update `MONGODB_URI` if using MongoDB Atlas
   - Update `CORS_ORIGIN` if frontend is running on different port

3. Start the server:
   ```bash
   # Development (with auto-reload)
   npm run dev

   # Production
   npm start
   ```

## API Endpoints

### POST /api/contact
Submit a new contact message
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I'm interested in your services..."
  }
  ```
- **Response:** 201 Created

### GET /api/contact
Retrieve all contact messages (admin)
- **Response:** Array of contact objects

### GET /api/contact/:id
Retrieve single contact by ID
- **Response:** Single contact object

### PUT /api/contact/:id
Update contact status
- **Request Body:**
  ```json
  {
    "status": "responded"
  }
  ```

### DELETE /api/contact/:id
Delete a contact message

## Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required, valid email),
  subject: String (required),
  message: String (required),
  status: String (enum: ['new', 'read', 'responded']),
  read: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

All endpoints return consistent error responses:
```json
{
  "error": "Error message"
}
```

## Notes

- CORS is enabled for frontend communication
- Validation is performed on all input fields
- All timestamps are automatically managed
