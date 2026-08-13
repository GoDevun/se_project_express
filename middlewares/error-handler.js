const { INTERNAL_SERVER_ERROR } = require("../utils/errors");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  const { statusCode = INTERNAL_SERVER_ERROR, message } = err;

  return res.status(statusCode).send({
    message:
      statusCode === INTERNAL_SERVER_ERROR
        ? "An error has occurred on the server."
        : message,
  });
};

module.exports = errorHandler;
