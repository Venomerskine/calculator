//get buttons

let btn1 = document.getElementById("one")
let btn2 = document.getElementById("two")
let btn3 = document.getElementById("three")
let btn4 = document.getElementById("four")
let btn5 = document.getElementById("five")
let btn6 = document.getElementById("six")
let btn7 = document.getElementById("seven")
let btn8 = document.getElementById("eight")
let btn9 = document.getElementById("nine")
let btn0 = document.getElementById("zero")
let period = document.getElementById("period")

let addBtn = document.getElementById("add")
let subtBtn = document.getElementById("subtract")
let mulpBtn = document.getElementById("multiply")
let divBtn = document.getElementById("divide")
let eqlBtn = document.getElementById("equals")

let clear = document.getElementById("clear")
let backspaceBtn = document.getElementById("backspace")

//get sections
let answer = document.getElementById("ans")
let operation = document.getElementById("operation")


//initials
let num1 = ''
let num2 = ''
let operand = ''

//operations
const add = (a,b) => {
 return a + b
}

const subtract = (a,b) => {
    return  a- b
}

const multiply = (a,b) => {
    return a*b
}

const divide = (a,b) => {
    return a/b
}

const operate = (first,op,last) => {
    first = Number(first)
    last = Number(last)

     if (op === "/" && last === 0) {
        return "Error"; // Return a specific error message
    }

    if (op == "+"){
       return  add(first,last)
    } else if (op == "-") {
        return subtract(first,last)
    } else if (op == "*"){
        return multiply(first,last)
    } else if(op =="/") {
        return divide(first,last)
    }
}




//populate num values
period.addEventListener("click", () => {
    if(operand == ""){
        if (!num1.includes(".")){
            num1 += "."
        }
    } else {
         if (!num2.includes(".")) {
            num2 += ".";
        }
    }
        operation.textContent = num1 + " " + operand + " " + num2;
})

btn0.addEventListener("click", () => {
    if(operand == ""){
        num1 += "0"
    } else {
        num2 += "0"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn1.addEventListener('click', () => {
    if(operand == ""){
        num1 += "1"
    } else {
        num2 += "1"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn2.addEventListener('click', () => {
    if(operand == ""){
        num1 += "2"
    } else {
        num2 += "2"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn3.addEventListener('click', () => {
    if(operand == ""){
        num1 += "3"
    } else {
        num2 += "3"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn4.addEventListener('click', () => {
    if(operand == ""){
        num1 += "4"
    } else {
        num2 += "4"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn5.addEventListener('click', () => {
    if(operand == ""){
        num1 += "5"
    } else {
        num2 += "5"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn6.addEventListener('click', () => {
    if(operand == ""){
        num1 += "6"
    } else {
        num2 += "6"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn7.addEventListener('click', () => {
    if(operand == ""){
        num1 += "7"
    } else {
        num2 += "7"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn8.addEventListener('click', () => {
    if(operand == ""){
        num1 += "8"
    } else {
        num2 += "8"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})

btn9.addEventListener('click', () => {
    if(operand == ""){
        num1 += "9"
    } else {
        num2 += "9"
    }
    operation.textContent = num1 + " " + operand + " " + num2
})


//populate operand values

addBtn.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operand !== "") {
        let result = operate(num1, operand, num2);
        num1 = result.toString();
        num2 = ""; 
        answer.textContent = result; 
    }
    
    operand = "+";
    operation.textContent = num1 + " " + operand;
});


subtBtn.addEventListener("click", () => {
   if (num1 !== "" && num2 !== "" && operand !== "") {
        let result = operate(num1, operand, num2);
        num1 = result.toString();
        num2 = ""; 
        answer.textContent = result; 
    }
    
    operand = "-";
    operation.textContent = num1 + " " + operand;
})

divBtn.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operand !== "") {
        let result = operate(num1, operand, num2);
        num1 = result.toString();
        num2 = ""; 
        answer.textContent = result; 
    }
    
    operand = "/";
    operation.textContent = num1 + " " + operand;
})

mulpBtn.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operand !== "") {
        let result = operate(num1, operand, num2);
        num1 = result.toString();
        num2 = ""; 
        answer.textContent = result; 
    }
    
    operand = "*";
    operation.textContent = num1 + " " + operand;
})
eqlBtn.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operand !== "") {
        let finalAns = operate(num1, operand, num2);
        answer.textContent = finalAns;
        operation.textContent = num1 + " " + operand + " " + num2 + " =";
        const maxLength = 8;
        if (finalAns.toString().length > maxLength) {
    finalAns = Number(finalAns.toPrecision(maxLength));
}


        num1 = finalAns.toString();
        num2 = "";
        operand = "";
    }
});

backspaceBtn.addEventListener("click", () => {
     if (num2 !== "") {
        num2 = num2.slice(0, -1);
    } 
    else if (operand !== "") {
        operand = ""; 
    } 
    else {
        num1 = num1.slice(0, -1);
    }
    operation.textContent = num1 + " " + operand + " " + num2;
});


clear.addEventListener("click", () => {
    num1 = ""
    num2 = ""
    answer.textContent = ""
    operation.textContent = ""
    operand = ""

}) 


//keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // if (!isNaN(key)) { 
    //     // Numbers 0–9
    //     document.getElementById(`btn${key}`).click();
    // }

    if (key === '.') {
        decBtn.click();
    }

    if (key === '+' || key === '-' || key === '*' || key === '/') {
        switch (key) {
            case '+': addBtn.click(); break;
            case '-': subtBtn.click(); break;
            case '*': mulpBtn.click(); break;
            case '/': divBtn.click(); break;
        }
    }

    if (key === 'Enter' || key === '=') {
        eqlBtn.click();
    }

    if (key === 'Backspace') {
        backspaceBtn.click();
    }

    if (key.toLowerCase() === 'c') {
        clear.click();
    }
});
