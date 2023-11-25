// app.js - define route handlers, and controllers

const express = require("express");
const cors = require("cors");
const studentData = require("./studentData.json");
const app = express(); // creating an instance of Express application

app.use(cors());
// define routes
// health check route

// GET / health check

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.get("/assignments", (req, res) => {
  res.send("Welcome to Assignments");
});

app.get("/grades", (req, res) => {
  res.send("Welcome to Grades");
});

// GET /students
app.get("/students", (req, res) => {
  try {
    const { students } = studentData; // take the students array from student data json file
    res.status(200).json({ data: students }); // return with success message and the array of students
  } catch (err) {
    res.status(500).json({ error: err.messagge });
  }
});

// GET /students/:id

app.get("/students/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { students } = studentData;
    const student = students.find((student) => student.id === id);
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: `No student with id : ${id} is found.` });
    }
  } catch (err) {
    res.status(500).json({ error: err.messagge });
  }
});

app.get("*", (req, res) => {
  res.send("404 - not found");
});

module.exports = app;
