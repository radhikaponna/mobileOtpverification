var ResponsePayload = require("../utils/ResponsePayload");

const errorHandler = (err, req, res, next) => {
  if (err && err.stack) console.error(err.stack);

  if (err instanceof ResponsePayload) {
    return res.status(err.statusCode).json(err.payload);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

module.exports = errorHandler;
