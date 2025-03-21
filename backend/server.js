import express from 'express';
import dotenv from "dotenv";
//routes
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Add this middleware to parse JSON bodies
app.use(express.json());

// Add the root route handler here
app.get('/', (req, res) => {
  res.send('Welcome to E-Commerce API');
});

// Your existing routes
app.use("/api/auth", authRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:'+PORT);
  connectDB();
});

//github-auth token: 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