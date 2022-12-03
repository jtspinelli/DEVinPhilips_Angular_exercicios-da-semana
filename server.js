const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/exercicios-da-semana'));
app.use(express.static(__dirname + '/node_modules'));

app.get("*", (req, res) => {
  // res.sendFile('C:/Users/jonat/Desktop/ng-oauth/dist/ng-oauth/index.html')
  res.sendFile(__dirname + '/index.html');
})
