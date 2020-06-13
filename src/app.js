const express = require('express');
const argsString = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: argsString.sayHello(req.params.string) });
  // res.status(200).json({ result: 'Hello world!' });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: argsString.upperCase(req.params.string) });
  // res.status(200).json({ result: 'HELLO' });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: argsString.lowercase(req.params.string) });
  // res.status(200).json({ result: 'hello' });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: argsString.firstCharacter(req.params.string) });
  } else {
    res.json({ result: argsString.firstCharacters(req.params.string, req.query.length) });
  }
  // res.status(200).json({ result: 'h' });
});

module.exports = app;
