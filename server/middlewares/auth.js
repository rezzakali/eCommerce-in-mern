// external imports
import jwt from 'jsonwebtoken';

// internal imports
import User from '../models/userSchema.js';
import ErrorResponse from '../utilities/error.js';

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).send('No token');
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    const finalUser = await User.findOne({
      _id: verifyToken._id,
      'tokens.token': token,
    });
    if (!finalUser) {
      res.status(401).send('User not found!');
    }

    res.status(200).send('Authorized User');

    next();
  } catch (error) {
    return next(new ErrorResponse(error.message, 401));
  }
};

export default authentication;
