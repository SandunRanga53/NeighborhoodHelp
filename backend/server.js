const express = require("express");
const db = require("./config/db"); // importing database connection

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Neighborhood MySQL API Running");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
