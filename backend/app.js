"use strict";
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");
const swaggerDocument = YAML.parse(
  fs.readFileSync("./api/openapi.yaml", "utf8")
);
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const { sequelize } = require("./models"); // Import Sequelize instance
const otpRoutes = require("./routes/otpRoutes");
const verifyOtpRoutes = require("./routes/verifyOtpRoutes");

// Sync Sequelize models with the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("All models synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error connecting to or synchronizing the database:", err);
    process.exit(1);
  });

// Middleware
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register routes
app.use(routes);
app.use("/api/v1/auth", otpRoutes);
app.use("/api/v1/auth", verifyOtpRoutes);

// Error handler
app.use(errorHandler);

// Start the server
const serverPort = 8080;
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

module.exports = app;
