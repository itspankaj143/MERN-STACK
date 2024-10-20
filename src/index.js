const express = require("express");
const app = express();
const hostname = "localhost";
const port = 8888;

app.listen(port, hostname, () => {
  console.log("Server is running on port 8888");
});
