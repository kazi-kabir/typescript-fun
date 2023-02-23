// date
let today = new Date();
let time = today.toDateString()
console.log(time);


//even or odd
function isEvenOrOdd(num: number) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEvenOrOdd(2));