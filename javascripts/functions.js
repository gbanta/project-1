// jshint esversion: 7

let arrAvg = inputArray => {
  let sum = 0;
  for (var i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum / inputArray.length;
};
