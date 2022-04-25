import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import productRoute from './routes/productRouter.js'

//database URI & PORT
const CON_URI = process.env.CONN_URI || "mongodb+srv://ih3na:nnnTa6YUMUpDnsy@trintydb.3aram.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));
app.use(cors());

//product router
app.use('/products', productRoute)


// Database connection
mongoose.connect(CON_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running : port ${PORT}`)))
    .catch((error) => console.log(error));
