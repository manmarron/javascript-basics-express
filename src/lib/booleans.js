const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
   if(a && b || !a && !b){
     return false
    }
    else if(a || b){
      return true
    }
};

const truthiness = a => {
  // your code here
   if(a) {
     return true
    }
    else{
      return false
    };
};

const isEqual = (a, b) => {
  // your code here
  if (a === b) {
    return true;
  }
  else{
    return false;
  };
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a > b) {
    return true;
  }
  else{
    return false;
  };
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a <= b) {
    return true;
  }
  else{
    return false;
  };
};

const isOdd = a => {
  // your code here
  return a % 2 !== 0;
};

const isEven = a => {
  // your code here

  return a % 2 === 0;

};

const isSquare = a => {
  // your code here
  
  return Math.sqrt(a) % 1 === 0
};

const startsWith = (char, string) => {
  // your code here
  return string.startsWith(char, string);
};

const containsVowels = string => {
  // your code here

  let matchingInstances = string.match(/[aeiou]/gi);
    if(matchingInstances) {
      return true;
  }
  else{
    return false;
  };
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
