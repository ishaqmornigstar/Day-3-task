const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());


const studentRoutes=require('./routes/studentRoutes.js');
app.use('/students',studentRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Student Management Web Application");
});

app.get("/students", (req, res) => {
  res.json({
    message: "List of students",
    students: []
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});