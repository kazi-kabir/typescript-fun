const numArray : Array<number> = [-3,4];

const calculateSumOfTheArray = (numArray : Array<number>) => {
    let res = numArray.reduce((a, b) => a + b);
    return res;
}

let result = calculateSumOfTheArray(numArray);
console.log(result);

