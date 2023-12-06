// define routes

const express = require("express");
const router = express.Router();
const pgp = require("pg-promise")();
const db = pgp({
  connect: "postgres://pursuit:Buyenjoy20#@localhost:3333/student_dashboard",
});

router.get("/students", (req, res) => {
  db.result("SELECT * FROM Students").then((allData) => {
    res.send({ students: allData.rows });
  });
});

router.get("/students/:id", (req, res) => {
  const { id } = req.params;
  db.result(`SELECT * FROM Students WHERE students.id = $1`, [id]).then(
    (allData) => {
      res.send({ students: allData.rows });
    }
  );
});

router.post("/students", (req, res) => {
  const { body } = req;
  const { first_name, last_name, email, pic, skill, company, city } = body;

  db.result(
    `INSERT INTO Students (first_name, last_name, email, pic, skill, company, city) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [first_name, last_name, email, pic, skill, company, city]
  ).then((allData) => {
    res.send({ students: allData.rows });
  });

  console.log("POST received", req.body);
});

router.put("/students/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const { first_name, last_name, email, pic, skill, company, city } = body;

  db.result(
    `UPDATE Students SET first_name=$1, last_name=$2, email=$3, pic=$4, skill=$5, company=$6, city=$7 WHERE id=$8`,
    [first_name, last_name, email, pic, skill, company, city, id]
  ).then((result) => {
    res.send({ message: "Student updated successfully" });
  });

  console.log("PUT received", req.body);
});

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

router.get("/students/:id", (req, res) => {
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

module.exports = router;
