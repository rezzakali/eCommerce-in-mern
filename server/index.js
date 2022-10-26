// external imports
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import passport from './utilities/passportAuth.js';

// internal imports
import connectionToDb from './config/dbConnection.js';
import errorHandler from './middlewares/errorHandler.js';
import googleAuth from './routes/googleAuth.js';
import paymentRoute from './routes/paymentRoutes.js';
import userRoute from './routes/userRoute.js';

// app object
const app = express();

// cookie session
app.use(
  cookieSession({ name: 'session', keys: ['ali'], maxAge: 24 * 60 * 60 * 100 })
);

// body parser
app.use(passport.initialize());
app.use(passport.session());

// cors policy
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// database and environment setup
dotenv.config();
connectionToDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// google auth
app.use('/auth', googleAuth);

// route handler
app.use('/user', userRoute);

// payment route
app.use('/api', paymentRoute);

// error handler
app.use(errorHandler);

// listenign the server
app.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(
    `Your server is running successfully at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});
