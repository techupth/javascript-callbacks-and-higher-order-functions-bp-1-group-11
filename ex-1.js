// Exercise #1: For Each Function

function forEach(array, operation) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(operation(array[i]));
  }
  return newArray;
  }

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries.push(forEach(employeeSalaries, (salary) => salary + 5000));
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
