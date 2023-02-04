"use strict";

const allButton = document.querySelectorAll(".btn");
const before = document.querySelector(".before");
const after = document.querySelector(".after");

class Calculator {
  beforeCalculation = "";
  operator;
  afterCalculation;
  constructor() {
    // this.beforeCalculation = beforeCalculation;
    // this.afterCalculation = afterCalculation;

    this.whatButton();
  }

  whatButton() {
    allButton.forEach((value) =>
      value.addEventListener("click", (e) => {
        this.beforeCalculation += e.target.innerText;

        if (e.target.innerText === "+") {
          console.log(e.target.innerText);
        } else if (e.target.innerText === "-") {
          console.log(e.target.innerText);
        } else if (e.target.innerText === "x") {
          console.log(e.target.innerText);
        } else if (e.target.innerText === "÷") {
          console.log(e.target.innerText);
        } else {
          console.log("something wrong");
        }
      })
    );
  }

  checkOperator() {}

  add(number1, number2) {
    return number1 + number2;
  }

  subtract(number1, number2) {
    return number1 - number2;
  }

  mutiply(number1, number2) {
    return number1 * number2;
  }

  divide(number1, number2) {
    return number1 / number2;
  }
}

const justCal = new Calculator("", "");
