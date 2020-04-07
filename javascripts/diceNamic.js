// jshint esversion: 7

let dieImages = [
  "./images/die1.gif",
  "./images/die2.gif",
  "./images/die3.gif",
  "./images/die4.gif",
  "./images/die5.gif",
  "./images/die6.gif"
];

//loading starting random dice images
let loadStartImages = function() {
  let ranNum1 = Math.floor(Math.random() * dieImages.length);
  let ranNum2 = Math.floor(Math.random() * dieImages.length);
  document.getElementById("die1").src = dieImages[ranNum1];
  document.getElementById("die2").src = dieImages[ranNum2];
};

//controller
let controller = function() {
  let target, dieSum, ranNum1, ranNum2;
  let rolls = 0;
  let validTargets = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //inputs
  target = Number(document.getElementById("target").value);

  while (target != dieSum) {
    let ranNum1 = Math.floor(Math.random() * dieImages.length);
    let ranNum2 = Math.floor(Math.random() * dieImages.length);
    console.log("d1 = " + ranNum1 + 1 + " d2 = " + ranNum2 + 1);
    document.getElementById("die1").src = dieImages[ranNum1];
    document.getElementById("die2").src = dieImages[ranNum2];
    dieSum = ranNum1 + ranNum2 + 2;
    rolls++;
  }
  console.log(rolls);
  document.getElementById(
    "result"
  ).textContent = `You hit your number in ${rolls} ${
    rolls == 1 ? "roll!" : "rolls!"
  }`;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
