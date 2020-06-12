const createPerson = (name, age) => {
  // your code here
  return xPerson = {"age": age, "name": name}
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
   return (object.age);
   
    
};

const hasProperty = (property, object) => {
  // your code here
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  
  if(person.age > 65) {return true} else {return false}
};

const getAges = people => {
  // your code here

  return people.map((item) => item.age);
  
};

const findByName = (name, people) => {
  // your code here

  const xPers = people.filter(item => item.name === name);
  return xPers[0]

  
};

const findHondas = cars => {
  // your code here
  return cars.filter(item => item.manufacturer === "Honda");
  

};

const averageAge = people => {
  // your code here

  let ageSum = 0
  for (let i = 0; i < people.length; i++) {
      ageSum = people[i].age + ageSum;
  };
  return ageSum / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const person = {
    name: name,
    age: age,
    introduce: function() {
      return "Hi Fred, my name is " + this.name + " and I am " + this.age + "!";
    },
  };

 return person
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
