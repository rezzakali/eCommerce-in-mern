// external imports
import bcrypt from 'bcrypt';

// internal imports
import User from '../models/userSchema.js';
import ErrorResponse from '../utilities/error.js';

async function loginController(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorResponse('Please provide your email and password!', 400)
    );
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 404));
    }
    // check the password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return next(new ErrorResponse('Password mismatched!', 404));
    }

    // set cookie
    const token = await user.generateToken();
    res.cookie('jwt', token, {
      expires: new Date(Date.now() + 86400000),
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      success: true,
      token,
    });

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'There was a server side error!',
    });
  }
}

export const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};

export default loginController;
