// app.js - define route handlers, and controllers

const express = require("express");
const app = express(); // creating an instance of Express application

// define routes
// health check route

// GET / method = GET path = /

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
  // res.send("Welcome to Student Dashboard");
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

module.exports = app;
