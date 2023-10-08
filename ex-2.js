//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  const count = array.reduce(function (accumulator, score) {
    if (score > 70) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  return operation(count);
}

function isAtLeastFive(count) {
  return count >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isAtLeastFive);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isAtLeastFive);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isAtLeastFive);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result); 
console.log(scoreRoom3Result);