import ErrorResponse from '../middlewares/errorHandler.js';

async function logOutController(req, res, next) {
  try {
    res.clearCookie('jwt', {
      httpOnly: true,
    });
    res.status(200).send('Cleared cookie');
    next();
  } catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
}
export default logOutController;
