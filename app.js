// app.js - define route handlers, and controllers

const express = require("express");
const app = express(); // creating an instance of Express application
const port = 3333;

app.get("/", (req, res) => {
  res.send("Welcome to Student Dashboard");
});

app.get("/assignments", (req, res) => {
  res.send("Welcome to Assignments");
});

app.get("/grades", (req, res) => {
  res.send("Welcome to Grades");
});

app.get("/students", (req, res) => {
  res.send("Welcome to Students List");
});

app.get("*", (req, res) => {
  res.send("404 - not found");
});

app.listen(port, () => {
  console.log(`Listening on port, ${port}`);
});

module.exports = app;
