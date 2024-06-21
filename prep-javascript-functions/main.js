function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);

console.log('addTwoNumbers result:' + sum);

//HourstoMinutes
function convertHourstoMinutes(hours) {
  return hours * 60;
}

const minutes = convertHourstoMinutes(2);
console.log('Result of hoursToMinutes:' + minutes);

//getGreeting
function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

const greeting = getGreeting('Rob');
console.log(greeting);

//addAndMultiply
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('Result of addAndMultiplyBy5:' + sumTimesFive);

//multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const productDividedBy5 = multiplyAndDivideBy5(35, 10);
console.log('Result of multiplyAndDivideBy5:' + productDividedBy5);

//subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(10, 5);
console.log('Result of difference exercise:' + difference);

//getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * radius * 3.14;
}
const circumference = getCircleCircumference(5);
console.log('The Circumference is' + ' ' + circumference);

//fullName
function getFullName(firstName, lastName) {
  return firstName + lastName;
}

const fullName = getFullName('Philip ', 'Choe');
console.log('My full name is' + ' ' + fullName);

//cube
function cube(number) {
  return number ** 3;
}

const cubed = cube(3);
console.log('Result of Cubed is' + ' ' + cubed);
