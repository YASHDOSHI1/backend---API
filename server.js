// ===============================
// Simple Express Server
// ===============================

const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running successfully 🚀"
  });
});

// Import routes file (if using routes.js)
const routes = require("./routes");
app.use("/", routes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
