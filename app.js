const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Update CORS with your actual Netlify URL
app.use(cors({
  origin: [
    'http://localhost:5174',
    'https://customer-satisfication.netlify.app'  // Add your actual Netlify URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);
app.use(errorHandler);

module.exports = app;