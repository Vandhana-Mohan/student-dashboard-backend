const { faker } = require("@faker-js/faker");

console.log("Running seed file ...");

const pgp = require("pg-promise")();
const db = pgp({
  connect: "postgres://pursuit:Buyenjoy20#@localhost:3333/student_dashboard",
});

console.log("DB", db);

const { person, internet, company, location } = faker;

function seed() {
  for (let i = 0; i < 10; i++) {
    const valueList = [
      person.firstName(),
      person.lastName(),
      internet.email(),
      internet.avatar(),
      person.jobTitle(),
      company.name(),
      location.city(),
      "coding",
    ];

    db.none(
      `INSERT INTO students (first_name, last_name, email, pic, skill, company, city) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      valueList
    )
      .then(() => console.log("Insert successful"))
      .catch((error) => console.error("Error inserting into database:", error));
  }
}

seed();
