# Portfolio Website

A modern, animated, responsive portfolio website for showcasing projects and skills. Built with React frontend and Express.js backend with MongoDB for data persistence.

## 🌟 Features

### Frontend
- ✨ **Modern & Animated UI** - Smooth transitions and interactive elements using Framer Motion
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Custom Dark Theme** - Beautiful gradient backgrounds and color scheme
- 📊 **Sections Included:**
  - Hero/Landing Section
  - About Section with Stats
  - Skills & Technologies
  - Featured Projects Showcase
  - Contact Form
  - Social Media Links
  - Footer
- 🌐 **Smooth Navigation** - Scroll-based navigation with active states
- 🔄 **Dynamic Content** - Easy to customize with your own information

### Backend
- 🗄️ **MongoDB Integration** - Persistent data storage
- 📧 **Contact Form Management** - Store and manage client inquiries
- ✅ **Input Validation** - Server-side validation for all inputs
- 🔧 **REST API** - Clean API endpoints for data operations
- 📝 **Admin Dashboard Ready** - Endpoints for managing messages

## 📁 Project Structure

```
Portfolio_website/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js & Navbar.css
│   │   │   ├── Hero.js & Hero.css
│   │   │   ├── About.js & About.css
│   │   │   ├── Skills.js & Skills.css
│   │   │   ├── Projects.js & Projects.css
│   │   │   ├── Contact.js & Contact.css
│   │   │   └── Footer.js & Footer.css
│   │   ├── App.js & App.css
│   │   ├── index.js & index.css
│   └── package.json
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── index.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
```

## 🔧 Technologies Used

### Frontend
- React 18
- Framer Motion (Animations)
- Axios (API calls)
- CSS3 (Styling)

### Backend
- Express.js
- MongoDB + Mongoose
- CORS
- Body Parser

## 📊 API Endpoints

### Contact Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/:id` - Get specific message
- `PUT /api/contact/:id` - Update message status
- `DELETE /api/contact/:id` - Delete message

## 🚀 Deployment Ready

- Frontend: Deployed to Vercel
- Backend: Deploy to Render
- Database: Used MongoDB Atlas for cloud database

---

**Happy Coding! 🎉**
