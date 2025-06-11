const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const errorHandler = require('./middleware/errorHandler');

console.log('typeof feedbackRoutes:', typeof feedbackRoutes);
console.log('typeof errorHandler:', typeof errorHandler);

const app = express();

// Configure CORS properly here
app.use(cors({
  origin: [
    'http://localhost:5174',
    'https://your-actual-netlify-url.netlify.app' // Update with your real Netlify URL
  ]
}));

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);
app.use(errorHandler);

module.exports = app;