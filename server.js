require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Remove this CORS block - it's already in app.js
// app.use(cors({
//   origin: [
//     'http://localhost:5174',
//     'https://your-app-name.netlify.app' 
//   ]
// }));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});