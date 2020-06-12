const sayHello = string => `Hello, ${string}!`;

const upperCase = string => string.toUpperCase(`${string}`);

const lowercase = string => string.toLowerCase(`${string}`);

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string[0];
};

const firstCharacters = (string, n) => {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  upperCase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
