import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"
import path from "path";
import session from "express-session";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import { port, mongoURL} from "./config.js";
import productRouter from "./router/products.js";
import userRouter from "./router/users.js";
import nodemailerRouter from "./router/nodemailer.js";


app.use(express.static('client/public'))
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('tiny')); // display in console HTTP requests
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}));


//Setting up Database
mongoose
.connect(mongoURL, {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})
.then(() => {console.log("Mongo Database connected successfully...")})
.catch((err) => console.log(err));


app.use('/api/products', productRouter);
app.use('/api', userRouter);
app.use('/api', nodemailerRouter);








//-----------------------------------------------------
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port} `, server.address().port);
});