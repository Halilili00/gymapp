import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

// Alustukset
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewaret
app.use(cors());
// Käytetään Expressin omaa parseria body-parserin sijaan
app.use(express.json({ limit: '30mb' })); 
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Reitit
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Tietokantayhteys
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });