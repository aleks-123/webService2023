const express = require("express");

const app = express();

app.get("/");

const port = 10000;
app.listen([
  port,
  () => {
    console.log(`App running on port ${port}...`);
  },
]);
