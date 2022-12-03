const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/exercicios-da-semana'));
app.use(express.static(__dirname + '/node_modules'));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/exercicios-da-semana/index.html");
})

app.listen(port, function () {
  console.log("running on " + port)
})

module.exports = app;
