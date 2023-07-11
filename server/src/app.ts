import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const port = process.env.APP_PORT || 5000;
import router from './routers/router';
// Load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

// Initialize the Express server application
const app = express();
 app.use(cookieParser());

const corsConfig: cors.CorsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsConfig));
app.use(express.json())
app.use(router)

// Define a route to display a message
app.get('*', (req, res) => {
  res.status(404).send('not found');
});

// Start the server and make it listen on port 3000
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
module.exports = server;

