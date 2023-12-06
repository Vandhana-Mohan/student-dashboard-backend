console.log("Running schema file ...");
const pgp = require("pg-promise")();
const db = pgp({
  connect: "postgres://pursuit:Buyenjoy20#@localhost:3333/student_dashboard",
});

console.log("DB", db);

(async function () {
  await db.query(`DROP TABLE IF EXISTS grades`);
  await db.query(`DROP TABLE IF EXISTS students`);

  await db.query(`
    CREATE TABLE students(
        id SERIAL PRIMARY KEY,
        first_name varchar(255),
        last_name varchar(255),
        email varchar(255),
        pic TEXT,
        skill varchar(255),
        company varchar(255),
        city varchar(255)
    );
  `);

  await db.query(`
    CREATE TABLE grades(
        id SERIAL PRIMARY KEY,
        score INTEGER DEFAULT 0,
        student_id integer REFERENCES students(id) ON DELETE CASCADE
    );
  `);

  await db.query(`CREATE INDEX grades_students_id ON grades(student_id)`); // we use index to fetch data faster

  console.log("schema run successfully");

  //   exits(0); // exits connecttion and displays message successfully
})();
