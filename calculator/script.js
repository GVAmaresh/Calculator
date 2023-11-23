const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".character");
const specialChars = ["=", "+", "%", "/", "*", "-"];
let result = "";

const calculate = (num) => {
  display.focus();
  if (num === "=" && result !== "") {
    result = eval(result.replace("%", "/100"));
  } else if (num === "DEL") {
    result = result.toString().slice(0, -1);
  } else if (num === "AC") {
    result = "";
  } else {
    if (result === "" && specialChars.includes(num)) return;
    result += num;
  }
  display.value = result;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
