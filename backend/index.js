const express = require("express");
const app = express();
const env = require("dotenv");
const connectDB = require("./db/db");

env.config();
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully", data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
