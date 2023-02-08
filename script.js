"use strict";

const allButton = document.querySelectorAll(".btn");
const before = document.querySelector(".before");
const after = document.querySelector(".after");

class Calculator {
  restart = false;
  operator;
  storeText = "";
  removeSymbol = "";
  constructor() {
    this.whatButton();
  }

  whatButton() {
    allButton.forEach((value) =>
      value.addEventListener("click", (e) => {
        if (
          this.restart === true &&
          (e.target.innerText === "+" ||
            e.target.innerText === "-" ||
            e.target.innerText === "x" ||
            e.target.innerText === "÷")
        ) {
          console.log(before.textContent);
          console.log(typeof after.textContent);
          after.textContent = before.textContent;
          after.textContent += this.returnOperator(before.textContent);
          before.textContent = "";
          this.restart = false;
        }

        if (e.target.innerText !== "=") {
          before.textContent += e.target.innerText;
        }

        if (after.textContent === "") {
          this.checkOperator(e.target.innerText);
        }

        if (
          (after.textContent.includes("+") ||
            after.textContent.includes("-") ||
            after.textContent.includes("x") ||
            after.textContent.includes("÷")) &&
          e.target.innerText === "="
        ) {
          this.storeText = before.textContent;
          this.removeSymbol = after.textContent.replace(
            this.returnOperator(after.textContent),
            ""
          );
          before.textContent = this.pickCalc(
            this.removeSymbol,
            before.textContent
          );
          after.textContent += this.storeText;
          this.restart = true;
        }

        this.clearNumber(e.target.innerText);
      })
    );
  }

  clearNumber(event) {
    if (event === "CLEAR") {
      after.textContent = "";
      before.textContent = "";
    }
  }

  checkOperator(event) {
    if (event === "+" || event === "-" || event === "x" || event === "÷") {
      after.textContent = before.textContent;
      before.textContent = "";
    }
  }

  returnOperator(afterText) {
    const symbol = ["+", "-", "x", "÷"];
    for (const value of symbol) {
      if (afterText.includes(value)) {
        return value;
      }
    }
  }

  pickCalc(removeSymbol, beforeText) {
    if (this.returnOperator(after.textContent) === "+") {
      return this.add(removeSymbol, beforeText);
    } else if (this.returnOperator(after.textContent) === "-") {
      return this.subtract(removeSymbol, beforeText);
    } else if (this.returnOperator(after.textContent) === "x") {
      return this.mutiply(removeSymbol, beforeText);
    } else if (this.returnOperator(after.textContent) === "÷") {
      return this.divide(removeSymbol, beforeText);
    }
  }

  add(number1, number2) {
    return Number(number1) + Number(number2);
  }

  subtract(number1, number2) {
    return Number(number1) - Number(number2);
  }

  mutiply(number1, number2) {
    return Number(number1) * Number(number2);
  }

  divide(number1, number2) {
    return Number(number1) / Number(number2);
  }
}

const justCal = new Calculator();
