// === Variables ===
const milesGoal = 1000;
const milesTotal = 85;
const percentageProgress = (milesTotal / milesGoal) * 100;

// === DOM Selectors ===
const miles = document.getElementById("miles-total");
const progressBar = document.getElementById("myBar");
const runningMax = document.getElementById("runningMax");
const runningMin = document.getElementById("runningMin");

// DOM Selectors titlePage
const titleContainer = document.getElementById("title-page");

const slideUpAnimation = function (element) {
  element.style.transition = "padding 3s";
  element.style.padding = "0";
};

// document.addEventListener("DOMContentLoaded", slideUpAnimation(titleContainer));

// slideUpAnimation(titleContainer);

const initiateRunningProgressBar = function () {
  myBar.style.width = percentageProgress + "%";
  miles.textContent = milesTotal + " Miles";
};

initiateRunningProgressBar();
