const express = require("express");
const router = express.Router();

// define routes
// health check route

// GET / health check

router.get("/students", (req, res) => {
  // make this retrieve data from database instead of json  and make routes use the strudent controller
  try {
    // const { students } = studentData; // take the students array from student data json file
    res.status(200).json({ students: studentData.students }); // return with success message and the array of students
  } catch (err) {
    res.status(500).json({ error: err.messagge });
  }
});

router.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const { students } = studentData;
  const student = students.find((student) => student.id === id);
  if (student) {
    res.send({ student });
  } else {
    res.send("No Student");
  }
});

router.post("/students", (req, res) => {
  const student = req.query;

  const { students } = studentData;

  students.push(student);

  console.log("POST received", req.body);
});

router.put("/students/:id", (req, res) => {
  console.log("Put received");
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
