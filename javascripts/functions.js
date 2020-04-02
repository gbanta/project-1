// jshint esversion: 7

//3B
let arrAvg = inputArray => {
  let sum = 0;
  for (var i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum / inputArray.length;
};

//3C
let arrMax = inputArray => {
  let max = inputArray[0];

  let maxFunction = value => {
    if (value > max) {
      max = value;
    }
  };
  inputArray.forEach(maxFunction);
  return max;
};

//3D
let sumEvens = inputArray => {
  let sum = 0;
  for (const value of inputArray) {
    if (value % 2 == 0) {
      sum += value;
    }
  }
  return sum;
};
