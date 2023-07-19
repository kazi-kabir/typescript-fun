function convertCMtoInch(cm) {
    return cm / 2.54; 
}

function convertInchToCM(inch) {
    return inch * 2.54;
}

let userInput = prompt("Enter a number to convert");
alert(userInput);