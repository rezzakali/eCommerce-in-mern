// external imports
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import passport from './utilities/passport.js';

// internal imports
import connectionToDb from './config/dbConnection.js';
import errorHandler from './middlewares/errorHandler.js';
import googleAuth from './routes/googleAuth.js';
import userRoute from './routes/userRoute.js';

// app object
const app = express();

// cors policy
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// body parser
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

// database and environment setup
dotenv.config();
connectionToDb();

// cookie session
app.use(
  cookieSession({ name: 'session', keys: ['ali'], maxAge: 24 * 60 * 60 * 100 })
);

// route handler
app.use('/user', userRoute);

// google auth
app.use('/auth', googleAuth);

// error handler
app.use(errorHandler);

// listenign the server
app.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(
    `Your server is running successfully at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});
