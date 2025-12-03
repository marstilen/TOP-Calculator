

calcTextBox = document.querySelector("#calcTextBox");

console.log(calcTextBox)

function calculate(params) {
    
}

document.addEventListener('click', function(e){
    let firstNumber;
let secondNumber;
let operator;
    console.log(e.target.getAttribute('class'));
    if(e.target.getAttribute('class')=='button')
    {
        calcTextBox.value += e.target.getAttribute("value");
    }
    else if(e.target.getAttribute('class')=='operator'){
        console.log(calcTextBox.value)
        firstNumber = calcTextBox.value;
        operator = e.target.getAttribute('class');
        calcTextBox.value += e.target.getAttribute("value");
    }
    else if(e.target.getAttribute('class')=='clear'){
        calcTextBox.value="";
    }
    else if(e.target.getAttribute('class')=='c'){
        calcTextBox.value = calcTextBox.value.slice(0, -1)
    }
    else if(e.target.getAttribute('class')=='calculate')
    {
        console.log(operator)
       calculate();
    }
})