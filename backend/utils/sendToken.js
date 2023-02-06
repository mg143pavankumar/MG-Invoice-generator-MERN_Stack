const sendToken = (user, statusCode, res, msg) => {
  const token = user.getJWTToken();

  // options for cookies
  const options = {
    expires: new Date(
      new Date().getTime() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message: msg,
    user,
    token,
  });
};

module.exports = sendToken;
