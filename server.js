// import app, start up and listen to server
require("dotenv").config();

const app = require("./app");

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Listening on port, ${port}`);
});
