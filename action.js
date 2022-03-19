// THIS FUCTION FOR GETTING TWO USER INPUTS AND CALCULATING THE RESULT OF ALL OF THE OPERATIONS AND HANDELING THREE TYPES OF ERROR
function Calculation() {
    
    //Here getting first user input 
    let num1 = document.getElementById("FormForMyCalculator").elements[0].value;
    document.getElementById("Display").innerHTML = num1;

    //Here getting second user input 
    let num2 = document.getElementById("FormForMyCalculator").elements[1].value;
    document.getElementById("Display").innerHTML = num2;

    //Here getting the operator 
    const sign = document.getElementById("Operators").value;

    try {
        if (num1 === "" || num2 === "") {
            throw {
                message: "Input can not be empty. Please provide proper inputs."
            }
        }
        if (isNaN(num1) || isNaN(num2)) {
            throw {
                message: "Input must be a number. Please provide proper inputs."
            }
        }
        if (sign === "select") {
            throw {
                message: "Unselected operator. Please Select an operator."
            }
        }
        else {
            if (sign === "addition") {
                addition(num1, num2);
            }
            else if (sign === "subtraction") {
                subtraction(num1, num2);
            }
            else if (sign === "multiplication") {
                multiplication(num1, num2);
            }
            else if (sign === "division") {
                diviSion(num1, num2);
            }
            else if (sign === "modulo") {
                modulo_calculation(num1, num2);
            }
        }
    } catch (e) {
        document.write(`<b>Error: </b> ${e.message}`);
    }
}

// THIS FUNCTION IS FOR CALCULATION ADDITION OPERATION WHEN THE OPERATOR IS '+' AND HANDING THE EXCEPTION FOR TESTING NUMBER TYPE SAFETY IF NOT SAFE SHOWING ERROR MESSAGE.
// ALSO USED TEMPLATE LIERALS.
function addition(a, b) {
    try {
        let result = document.getElementById("Result");
        a = parseFloat(a);
        b = parseFloat(b);
        if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
            result = (a + b);
            document.getElementById("Display").innerHTML = `<b>Addition of ${a} and ${b} i.e. (${a} + ${b}) = ${result} </b>`;
        }
        else {
            throw {
                message: "Please provide safe Inputs."
            }
        }
    } catch (e) {
        document.write(`<b>Error: </b> ${e.message}`);
    }
}

// THIS FUNCTION IS FOR CALCULATION SUBSTRACTION OPERATION WHEN THE OPERATOR IS '-' AND HANDING THE EXCEPTION FOR TESTING NUMBER TYPE SAFETY IF NOT SAFE SHOWING ERROR MESSAGE.
// ALSO USED TEMPLATE LIERALS.
function subtraction(a, b) {
    try {
        let result = document.getElementById("Result");
        a = parseFloat(a);
        b = parseFloat(b);
        if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
            result = (a - b);
            document.getElementById("Display").innerHTML = `<b>Substraction of ${b} from ${a} i.e. (${a} - ${b}) = ${result}</b>`;
        }
        else {
            throw {
                message: "Please provide safe Inputs."
            }
        }
    } catch (e) {
        document.write(`<b>Error: </b> ${e.message}`);
    }
}

// THIS FUNCTION IS FOR CALCULATION MULTIPLICATION OPERATION WHEN THE OPERATOR IS '*' AND HANDING THE EXCEPTION FOR TESTING NUMBER TYPE SAFETY IF NOT SAFE SHOWING ERROR MESSAGE.
// ALSO USED TEMPLATE LIERALS.
function multiplication(a, b) {
    try {
        let result = document.getElementById("Result");
        a = parseFloat(a);
        b = parseFloat(b);
        if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
            result = (a * b);
            document.getElementById("Display").innerHTML = `<b>Multiplication of ${a} and ${b} i.e. (${a} * ${b}) = ${result}</b>`;
        }
        else {
            throw {
                message: "Please provide safe Inputs."
            }
        }
    } catch (e) {
        document.write(`<b>Error: </b> ${e.message}`);
    }
}

// THIS FUNCTION FOR CALCULATION DIVISION OPERATION WHEN THE OPERATOR IS '/' AND HANDING THE EXCEPTIONS WHEN DENOMINATOR IS ZERO AND TESTING NUMBER TYPE SAFETY IF NOT SAFE SHOWING ERROR MESSAGE.
// ALSO USED TEMPLATE LIERALS.
function diviSion(a, b) {
    try {
        if (b === '0') {
            throw {
                message: "Cannot divide by zero."
            }
        }
        else {
            let result = document.getElementById("Result");
            a = parseFloat(a);
            b = parseFloat(b);
            if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
                result = (a / b);
                document.getElementById("Display").innerHTML = `<b>Division result of ${a} divided by ${b} i.e. (${a} / ${b}) = ${result}</b>`;
            }
            else {
                throw {
                    message: "Please provide safe Inputs."
                }
            }
        }
    } catch (e) {
        document.write(`<b>Error: </b> ${e.message}`);
    }
}

// THIS FUNCTION FOR CALCULATION MODULO OPERATION WHEN THE OPERATOR IS '%' AND HANDING THE EXCEPTIONS WHEN DENOMINATOR IS ZERO AND TESTING NUMBER TYPE SAFETY IF NOT SAFE SHOWING ERROR MESSAGE.
// ALSO USED TEMPLATE LIERALS.
function modulo_calculation(a, b) {
    try {
        if (b === '0') {
            throw {
                message: "Cannot divide by zero"
            }
        }
        else {
            let result = document.getElementById("Result");
            a = parseFloat(a);
            b = parseFloat(b);
            if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
                result = (a % b);
                document.getElementById("Display").innerHTML = `<b>Modulo result of ${a} divided by ${b} i.e. (${a} % ${b}) = ${result}</b>`;
            }
            else {
                throw {
                    message: "Please provide safe Inputs"
                }
            }
        }
    } catch (e) {
        document.write(`<b>Error: </b> ${e.message}`);
    }
}