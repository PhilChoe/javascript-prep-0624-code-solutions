/* Your JS goes in this file */

const age = 20;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

const isAdultResult = isAdult(age);

console.log(isAdultResult);
//
var score = 92;

function didStudentPass(score) {
  if (score < 70) {
    return false;
  } else {
    return true;
  }
}

const didStudentPassResult = didStudentPass(score);

console.log(didStudentPassResult);

///

var score = 80;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(score);

console.log(gradeCalculatorResult);

//

const season = 'summer';

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else if (season !== 'summer' || 'spring' || 'autumn' || 'winter') {
    return 'please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger(season);

console.log(seasonMessengerResult);

//

const dayOfTheWeek = 'Thursday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else if (dayOfTheWeek !== 'saturday' || dayOfTheWeek !== 'sunday') {
    return 'It is a weekday!';
  }
}

const dayDetectorResult = dayDetector(dayOfTheWeek);

console.log(dayDetectorResult);
