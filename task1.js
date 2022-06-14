//==================Task1===============
const sayHello = function (name) {
  if (typeof name !== "string") {
    return "Error";
  }
  if (name.toLowerCase() === "mark") {
    return "Hi, " + name;
  }
  return "Hello, " + name;
};
console.log(sayHello(1));
//==================Task2===============

const calculateHypotenuse = () => {
  const firstLine = 3;
  const secondLine = 4;
  return Math.sqrt(Math.pow(firstLine, 2) + Math.pow(secondLine, 2));
};
console.log(calculateHypotenuse());

//==================Task3===============

const min = (firstValue, secondValue) => {
  if (firstValue === secondValue) {
    return "значения равны";
  }
  if (firstValue < secondValue) {
    return firstValue;
  }
  return secondValue;
};
console.log(min(8, 8));

//==================Task4===============

const isEven = (n) => {
  return n % 2 === 0;
};
console.log(isEven(4));

//==================Task5===============

const deleteChars = (word) => {
  return word.slice(1, -1);
};
console.log(deleteChars("Hello"));

//==================Task6===============

const changeСapitalLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
console.log(changeСapitalLetter("i preFor cAsh"));

//==================Task7===============

const isCapitalLetter = (word) => {
  return word.toUpperCase() === word
    ? "Оу май, большая буква"
    : "Нет уж, маленькие буквы - скучно";
};
console.log(isCapitalLetter("DDDDD"));

//==================Task8===============

const concatenate = (firstWord, secondWord) => {
  return `${firstWord} ${secondWord}`;
};
console.log(concatenate("Hello", "World"));

//==================Task9===============

const compareStringLength = (stringValue, numberValue) => {
  return stringValue.length > numberValue ? "String is too long!" : stringValue;
};
console.log(compareStringLength("Hello", 5));
