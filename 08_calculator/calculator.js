const add = function(num, num2) {
	return num + num2;
};

const subtract = function(num, num2) {
	return num - num2;
};

const sum = function(arr) {
  let sum = 0
	arr.forEach(num => sum += num);
  return sum;
};

const multiply = function(arr) {
  let sum = arr[0]
  arr.slice(1).forEach(num => sum *= num);
  return sum
};

const power = function(num, num2) {
  return num ** num2
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;}

	for(let i = num - 1; i >= 1 ; i--){
    num *= i
  }
  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
