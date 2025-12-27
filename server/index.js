import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
//local source files import
import connectDB from "./src/config/db.config.js" // Note: .js extension is mandatory in ES6 modules
import userRouter from './src/routes/user.route.js';
import errorHandler from './src/middlewares/errorHandler.middleware.js';


// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//routes
app.use('/user',userRouter)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));