// app.js - define route handlers, and controllers

const express = require("express");
const cors = require("cors");
const studentData = require("./data/studentData.json");
const app = express(); // creating an instance of Express application

app.use(cors());
// define routes
// health check route

// GET / health check

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.get("/students", (req, res) => {
  try {
    // const { students } = studentData; // take the students array from student data json file
    res.status(200).json({ students: studentData.students }); // return with success message and the array of students
  } catch (err) {
    res.status(500).json({ error: err.messagge });
  }
});

app.get("/students/:id", (req,res) => {
  const {id} = req.params
  const {students} = studentData


  const student = students.find((student) => student.id === id)
  if(student){
    res.send({student})
  } else {
    res.send("No Student")
  }
})

// GET /students
// app.get("/students", (req, res) => {
//   try {
//     const { students } = studentData; // take the students array from student data json file
//     res.status(200).json({ data: students }); // return with success message and the array of students
//   } catch (err) {
//     res.status(500).json({ error: err.messagge });
//   }
// }); do not delete

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
