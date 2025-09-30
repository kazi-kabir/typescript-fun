const numArray : Array<number> = [-3,4];

const calculateSumOfTheArray = (numArray : Array<number>) => {
    return numArray.reduce((a, b) => a + b);
}

console.log(calculateSumOfTheArray(numArray));
