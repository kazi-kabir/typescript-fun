function convertCMtoInch(cm) {
    return cm / 2.54; 
}

function convertInchToCM(inch) {
    return inch * 2.54;
}

let userInput = prompt("pick a conversion");

if(userInput === "cm to inch") {
    let userInput = prompt("pick a number");
    alert(convertCMtoInch(userInput));
}

if(userInput === "inch to cm") {
    let userInput = prompt("pick a number");
    alert(convertInchToCM(userInput));
}

alert(userInput);