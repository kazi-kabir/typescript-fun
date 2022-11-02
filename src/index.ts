// good ol calculate the sum of numbers within an array

const numArray : Array<number> = [1,2,3,4];
let tot : number = 0;


for (let i=0; i<numArray.length; i++) {
    tot = tot + numArray[i]
}

console.log(tot);