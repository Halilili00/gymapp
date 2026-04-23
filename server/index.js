import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Increase payload size limit to 10mb for JSON and URL-encoded data
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// connect to mongodb database
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });