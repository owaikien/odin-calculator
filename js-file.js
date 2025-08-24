let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
const display = document.getElementById("display");

function operate(operator, firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (operator === "+"){
        return firstNumber + secondNumber;
    }
    else if (operator === "-"){
        return firstNumber - secondNumber;
    }
    else if (operator === "x"){
        return firstNumber * secondNumber;
    }
    else if (operator === "÷"){
        return secondNumber === 0 ? "Error" : firstNumber / secondNumber;
    }
    else return "Invalid operator";
}


// sets the value as what the user pressed else 0
function updateDisplay() {
    display.value = displayValue || "0";
}


let isResultDisplayed = false;

// button clicks
document.querySelectorAll(".digit").forEach(button => {
    button.addEventListener("click", () => {
        if (operator === ""){
            if (isResultDisplayed){
                firstNumber = "";
                isResultDisplayed === false;
                firstNumber += button.textContent;
                displayValue = firstNumber;
            } else {
                firstNumber += button.textContent;
                displayValue = firstNumber;
            }
        } else {
            secondNumber += button.textContent;
            displayValue = secondNumber;
        }
        updateDisplay();
    });
});

// operator clicks
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber !== "" && secondNumber !== ""){
            result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = "";
            displayValue = result;
            isResultDisplayed === false;
            updateDisplay();
        } else {
            operator = button.textContent;
            displayValue = operator;
            isResultDisplayed === false;
            updateDisplay();
        }
    })
})

// handle equals button click
document.querySelector(".equals").addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "") {
        result = operate(operator, firstNumber, secondNumber);
        displayValue = result;
        firstNumber = result;
        secondNumber = "";
        operator = "";
        isResultDisplayed = true;
        updateDisplay();
    }
});

// handle clear button click
document.querySelector(".clear").addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "";
    isResultDisplayed = false;
    updateDisplay();
});

