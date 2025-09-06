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

let addBtn = document.getElementById("add")
let subtBtn = document.getElementById("subtract")
let mulpBtn = document.getElementById("multiply")
let divBtn = document.getElementById("divide")
let eqlBtn = document.getElementById("equals")

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
btn1.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("1")
    } else {
        num2.concat("1")
    }
})

btn2.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("2")
    } else {
        num2.concat("2")
    }
})

btn3.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("3")
    } else {
        num2.concat("3")
    }
})

btn4.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("4")
    } else {
        num2.concat("4")
    }
})

btn5.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("5")
    } else {
        num2.concat("5")
    }
})

btn6.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("6")
    } else {
        num2.concat("6")
    }
})

btn7.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("7")
    } else {
        num2.concat("7")
    }
})

btn8.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("8")
    } else {
        num2.concat("8")
    }
})

btn9.addEventListener('click', () => {
    if(operand == ""){
        num1.concat("9")
    } else {
        num2.concat("9")
    }
})

btn0.addEventListener("click", () => {
    if(operand == ""){
        num1.concat("9")
    } else {
        num2.concat("9")
    }
})
//populate operand values

addBtn.addEventListener("click", () => {
    if (num1 !== ""){
        operand.concat("+")
    }
})

subtBtn.addEventListener("click", () => {
    if (num1 !== ""){
        operand.concat("-")
    }
})

divBtn.addEventListener("click", () => {
    if (num1 !== ""){
        operand.concat("/")
    }
})

mulpBtn.addEventListener("click", () => {
    if (num1 !== ""){
        operand.concat("*")
    }
})
eqlBtn.addEventListener("click", () =>{
    let ans = operate(num1,operand,num2)
    answer.textContent = ans
})