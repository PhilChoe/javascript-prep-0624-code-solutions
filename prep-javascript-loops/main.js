function whileLoop1() {
  const numbersArray = [];
  let index = 0;

  while (index < 10) {
    numbersArray.push(index);
    index++;
  }
  return numbersArray;
}

const whileLoop1Result = whileLoop1();
console.log('whileLoop1 output', whileLoop1Result);

//
function whileLoop2() {
  const newArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  let index = 0;

  while (index < 20) {
    newArray.push();
    index++;
  }
  return newArray;
}

const whileLoop2Result = whileLoop2();
console.log('WhileLoop2 output', whileLoop2Result);

//

function forLoop1() {
  const numArray = [];

  for (let index = 0; index < 10; index++) {
    numArray.push(index);
  }
  return numArray;
}

const forLoop1Result = forLoop1();
console.log('forLoop1 output', forLoop1Result);

///

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time to Explosion:' + index + '!');
  }
}
forLoop2();

//

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(person) {
  const arrayToReturn = [];

  for (const key in person) {
    arrayToReturn.push(key);
  }
  return arrayToReturn;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

////

const person2 = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop2(person2) {
  const arrayToReturn = [];

  for (const key in person2) {
    arrayToReturn.push(person2[key]);
  }
  return arrayToReturn;
}

const forInLoop2Result = forInLoop2(person2);
console.log(forInLoop2Result);
