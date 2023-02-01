"use strict";

class Calculator {
  constructor(beforeCalculation, afterCalculation) {
    this.beforeCalculation = beforeCalculation;
    this.afterCalculation = afterCalculation;
  }
}

const allButton = document.querySelectorAll(".btn");

allButton.forEach((value) =>
  value.addEventListener("click", (e) => {
    if (e.target.innerText === "9") {
      console.log("hi");
    }
  })
);
