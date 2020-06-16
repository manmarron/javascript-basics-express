const express = require('express');
const argsString = require('./lib/strings');
const argsInteger = require('./lib/numbers');
const argsBoolean = require('./lib/booleans');
const argsArrays = require('./lib/arrays');

const app = express();
app.use(express.json());

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

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const aNumber = parseInt(req.params.a, 10);
  const bNumber = parseInt(req.params.b, 10);

  if (Number.isNaN(aNumber) && Number.isNaN(bNumber)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: argsInteger.add(aNumber, bNumber) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const aNumber = parseInt(req.params.a, 10);
  const bNumber = parseInt(req.params.b, 10);

  if (Number.isNaN(aNumber) && Number.isNaN(bNumber)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: argsInteger.subtract(bNumber, aNumber) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (!req.body.b || !req.body.a) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: argsInteger.multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (req.body.b === undefined || req.body.a === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: argsInteger.divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (req.body.b === undefined || req.body.a === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: argsInteger.remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: argsBoolean.negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: argsBoolean.truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  const b = parseInt(req.params.a);

  if (Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: argsBoolean.isOdd(req.params.a) });
  }
});

app.get('/booleans/:string/starts-with/:chr', (req, res) => {
  if (req.params.chr.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: argsBoolean.startsWith(req.params.chr, req.params.string) });
  }
});

app.post('/arrays/element-at-index/:a', (req, res) => {
  res.status(200).json({ result: argsArrays.getNthElement(req.params.a, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: argsArrays.arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: argsArrays.addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: argsArrays.elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  if (req.query.index === undefined) {
    res.status(200).json({ result: argsArrays.removeNthElement2(0, req.body.array) });
  } else {
    res.status(200).json({ result: argsArrays.removeNthElement2(req.query.index, req.body.array) });
  }
});

module.exports = app;
