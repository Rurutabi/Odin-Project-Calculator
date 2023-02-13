"use strict";

const allButton = document.querySelectorAll(".btn");
const before = document.querySelector(".before");
const after = document.querySelector(".after");

class Calculator {
  restart = false;
  operator = ["+", "-", "x", "÷"];
  allNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  storeText = "";
  removeSymbol = "";
  sliceText = "";
  noSymbol = true;
  constructor() {
    this.whatButton();
  }

  whatButton() {
    allButton.forEach((value) =>
      value.addEventListener("click", (e) => {
        if (
          (e.target.innerText === "+" ||
            e.target.innerText === "-" ||
            e.target.innerText === "x" ||
            e.target.innerText === "÷") &&
          before.textContent === ""
        ) {
          return;
        }

        if (this.checkNumber(e.target.innerText) === true) {
          this.noSymbol = false;
        }

        if (e.target.innerText !== "=" && e.target.innerText !== "DELETE") {
          before.textContent += e.target.innerText;
        }

        if (after.textContent === "" || this.restart === true) {
          this.moveAfter(e.target.innerText);
        }

        //Calculation
        if (
          (after.textContent.slice(-1) === "+" ||
            after.textContent.slice(-1) === "-" ||
            after.textContent.slice(-1) === "x" ||
            after.textContent.slice(-1) === "÷") &&
          (e.target.innerText === "=" ||
            e.target.innerText === "+" ||
            e.target.innerText === "-" ||
            e.target.innerText === "x" ||
            e.target.innerText === "÷") &&
          before.textContent !== ""
        ) {
          if (
            before.textContent.slice(-1) === "+" ||
            before.textContent.slice(-1) === "-" ||
            before.textContent.slice(-1) === "x" ||
            before.textContent.slice(-1) === "÷"
          ) {
            this.sliceText = before.textContent.replace(
              this.returnOperator(before.textContent),
              ""
            );
          } else {
            this.sliceText = before.textContent;
          }
          this.storeText = this.sliceText;
          this.removeSymbol = after.textContent.replace(
            this.returnOperator(after.textContent),
            ""
          );

          before.textContent = this.pickCalc(this.removeSymbol, this.sliceText);

          after.textContent += this.storeText;
          this.restart = true;
        }
        this.checkDecimal();
        this.clearNumber(e.target.innerText);
        this.deleteNumber(e.target.innerText);
      })
    );
  }

  checkDecimal() {
    if (before.textContent.length > 8) {
      before.textContent = Number(before.textContent).toFixed(2);
    }
  }

  deleteNumber(event) {
    if (before.textContent === "") return;
    if (event === "DELETE") {
      let temp = "";
      temp = before.textContent.slice(0, -1);
      console.log(temp);
      before.textContent = temp;
    }
  }

  clearNumber(event) {
    if (event === "CLEAR") {
      after.textContent = "";
      before.textContent = "";
      this.restart = false;
    }
  }

  checkNumber(event) {
    for (const value of this.allNumber) {
      if (event === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  checkOperator(event) {
    for (const value of this.operator) {
      if (event === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  moveAfter(event) {
    if (event === "+" || event === "-" || event === "x" || event === "÷") {
      after.textContent = before.textContent;
      before.textContent = "";
      this.restart = false;
    }
  }

  returnOperator(afterText) {
    for (const value of this.operator) {
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
