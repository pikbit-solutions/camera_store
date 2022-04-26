import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import productRoute from './routes/productRouter.js'
import dotenv from 'dotenv'
//database URI & PORT
// const CON_URI = process.env.CONNECTION_URI
// "mongodb+srv://trintycam:cphHqMsfct5AvzJk@trintycam.kjakw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const PORT = process.env.PORT || 5000

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));
app.use(cors());

//product router
app.use('/products', productRoute)


// Database connection
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running : port ${process.env.PORT}`)))
    .catch((error) => console.log(error));
