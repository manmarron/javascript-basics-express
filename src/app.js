const express = require('express');
const { sayHello } = require('./lib/strings.js');
const { upperCase } = require('./lib/strings.js');
const { lowercase } = require('./lib/strings.js');
const { firstCharacter } = require('./lib/strings.js');
const { firstCharacters } = require('./lib/strings.js');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
  // res.status(200).json({ result: 'Hello world!' });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: upperCase(req.params.string) });
  // res.status(200).json({ result: 'HELLO' });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
  // res.status(200).json({ result: 'hello' });
});

app.get('/strings/firstcharacter/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
  // res.status(200).json({ result: 'h' });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
  // res.status(200).json({ result: 'sd32' });
});

module.exports = app;
