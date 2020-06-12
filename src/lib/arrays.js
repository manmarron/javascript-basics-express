const getNthElement = (index, array) => {
  return array[index % array.length];
  
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};


const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here

  return array.concat(element);

};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index,1);
  
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(str => str.toUpperCase());

};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(str => str.split(",").reverse().join("").split("").reverse().join(""));
};

const onlyEven = numbers => {
  // your code here

  return numbers.filter(function(x) {
    return x % 2 === 0;
 })
 
};

const removeNthElement2 = (index, array) => {
  // your code here

  return array.filter(function(value){
     return value !== array[index];
    });

  };

const elementsStartingWithAVowel = strings => {
  // your code here
   
  return strings.filter(str => /^[aeiou]/i.test(str));
  
};


const removeSpaces = string => {
  // your code here
  return string.split(/\s/).join('');

  
};

const sumNumbers = numbers => {
  // your code here
 
return numbers.reduce((a, b) => {return a + b;});

};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort((a, b) => {

    if (a[a.length - 1] > b[b.length - 1])
        return 1;
    else if (a[a.length - 1] < b[b.length - 1])
        return -1;

    return 0;

})

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
