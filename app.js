// const buttons = document.querySelectorAll(".calculatorDiv div");
// const screen = document.querySelector(".screen");

// let num1 = "";
// let num2 = "";
// let operator = null;

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const buttonText = button.innerText;
//     if (buttonText === "AC") {
//       screen.innerText = "";
//       num1 = "";
//       num2 = "";
//       operator = null;
//     } else if (buttonText === "±") {
//       screen.innerText = parseFloat(screen.innerText) * -1;
//       if (operator === null) {
//         num1 = screen.innerText;
//       } else {
//         num2 = screen.innerText;
//       }
//     } else if (buttonText === "%") {
//       ;screen.innerText = parseFloat(screen.innerText) / 100
//       if (operator === null) {
//         num1 = screen.innerText;
//       } else {
//         num2 = screen.innerText;
//       }
//     } else if (button.classList.contains("orange")) {
//       operator = buttonText;
//       screen.innerText = "";
//     } else if (buttonText === "=") {
//       const float1 = parseFloat(num1);
//       const float2 = parseFloat(num2);
//       if (operator === "+") {
//         screen.innerText = float1 + float2;
//       } else if (operator === "-") {
//         screen.innerText = float1 - float2;
//       } else if (operator === "X") {
//         screen.innerText = float1 * float2;
//       } else if (operator === "÷") {
//         screen.innerText = float1 / float2;
//       }
//       num1 = screen.innerText;
//       num2 = "";
//       operator = null;
//     } else {
//       screen.innerText += buttonText;
//       if (operator === null) {
//         num1 = screen.innerText;
//       } else {
//         num2 = screen.innerText;
//       }
//     }
//   });
// });

// let result = "";

// document.querySelectorAll(".calculatorDiv > div").forEach((button) => {
//   button.addEventListener("click", () => {
//     const buttonText = button.innerText;

//     if (buttonText === "AC") {
//       result = "";
//     } else if (buttonText === "=") {
//       result = eval(result);
//     } else {
//       result += buttonText;
//     }
//     screen.innerText = result;
//   });
// });
// const digit4 = document.querySelector("digit4");
// const digit5 = document.querySelector("digit5");
// const calc=document.querySelector("calc")

// ----------
const result = document.querySelector(".screen");
const calculatorDiv = document.querySelector(".calculatorDiv");
const equalDiv = document.querySelector(".equalDiv");
calculatorDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("calculatorDiv")) {
    console.log(e.target.tagName);
    return;
  }
  if (e.target.textContent === "AC") {
    result.textContent = "";
    return;
  }
  if (e.target.textContent === "=") {
    result.textContent = eval(result.textContent);
    return;
  }
  if (e.target.textContent === "x") {
    result.textContent += "*";
    return;
  }
  if (e.target.textContent === "÷") {
    result.textContent += "/";
    return;
  }
  if (e.target.textContent === "+") {
    result.textContent += "+";
    return;
  }
  if (e.target.textContent === "%") {
    result.textContent = parseFloat(result.textContent) / 100;
    return;
  }
  if (e.target.textContent === "±") {
    result.textContent = parseFloat(result.textContent) * -1;
    return;
  }

  result.textContent += e.target.textContent;
});
