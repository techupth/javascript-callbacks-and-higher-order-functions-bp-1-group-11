// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
}for (let i = 0; i < array.length; i++) {
    const currentSalary = array[i];
      const newSalary = currentSalary + 5000;
    newEmployeeSalaries.push(newSalary);
 operation(newSalary, i);
  }
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, function(newSalary, index) {
  console.log(`Employee ${index + 1}: Old Salary - ${employeeSalaries[index]}, New Salary - ${newSalary}`);
});
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
