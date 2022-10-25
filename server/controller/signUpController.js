// internal imports
import ErrorResponse from '../middlewares/errorHandler.js';
import User from '../models/userSchema.js';

async function signUpController(req, res, next) {
  const { firstName, lastName, email, phone, password, cPassword } = req.body;

  const profile = req.files ? req.files[0].filename : '';

  if (firstName === '') {
    res.status(400).send('First name is required!');
  }
  if (lastName === '') {
    res.status(400).send('Last name is required!');
  }
  if (email === '') {
    res.status(400).send('email is required!');
  }
  if (phone === '') {
    res.status(400).send('phone is required!');
  }
  if (password && cPassword === '') {
    res.status(400).send('password is required!');
  }
  if (password !== cPassword) {
    res.status(400).send('password mismatch!');
  }
  if (profile === '') {
    res.status('profile picture is required!');
  }

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      profile,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: 'User signup successfully!',
    });
    next();
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse(error.message, 500));
  }
}

export default signUpController;
