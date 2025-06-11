const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const errorHandler = require('./middleware/errorHandler');

console.log('typeof feedbackRoutes:', typeof feedbackRoutes);
console.log('typeof errorHandler:', typeof errorHandler);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/feedback', feedbackRoutes);  // line 11 or so
app.use(errorHandler);                      // line 12 or so

module.exports = app;
