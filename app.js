// app.js - to define route handlers, and controllers

const express = require("express");
const app = express(); // creating an instance of Express application
const cors = require("cors");
const studentData = require("./data/studentData.json");

const studentsController = require("./Controllers/studentsController");
const pgp = require("pg-promise")();

console.log("PGP", pgp);

const bodyParser = require("body-parser"); // npm install  --save body-parser

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/students", studentsController);

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.get("*", (req, res) => {
  res.send("404 - not found");
});

module.exports = app;
