calcTextBox = document.querySelector("#calcTextBox");

console.log(calcTextBox);

function calculate(a, b, operator) {
  console.log(operator);
  switch (operator) {
    case '+':
      return a+b;
    case '-':
      return a-b;
    case '*':
      return a*b;
    case '/': 
      return a/b;
    default:
      return "";
  }
  console.log(a);
  console.log(b);
}

document.addEventListener("click", function (e) {
  console.log(e.target.getAttribute("class"));
  if (e.target.getAttribute("class") == "button") {
    calcTextBox.value += e.target.getAttribute("value");
  } else if (e.target.getAttribute("class") == "operator") {
    calcTextBox.value += e.target.getAttribute("value");
  } else if (e.target.getAttribute("class") == "clear") {
    calcTextBox.value = "";
  } else if (e.target.getAttribute("class") == "c") {
    calcTextBox.value = calcTextBox.value.slice(0, -1);
  } else if (e.target.getAttribute("class") == "calculate") {
    let operatorIndex = calcTextBox.value.search(/[+\-*/]/);
    let numbers = [...calcTextBox.value]
    calcTextBox.value = calculate(numbers.slice(0,operatorIndex).join(''),numbers.slice(operatorIndex+1, numbers.length).join('') , numbers[operatorIndex]);
  }
});
