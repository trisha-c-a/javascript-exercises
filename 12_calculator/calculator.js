const add = function(n1, n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1 - n2;
};

const sum = function(arr) {
	let result = 0;
  for(i=0;i<arr.length;i++){
    result+=arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for(i=0;i<arr.length;i++){
    result*=arr[i];
  }
  return result;
};

const power = function(num,pow) {
	let result = 1;
  for(i=0;i<pow;i++){
    result*=num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for(i=num;i>0;i--){
    result*=i;
  }
  return result;
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
