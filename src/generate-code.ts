// generate a unique 4 digit code, for my personal productivity
// extend later, maybe port to bash

let val = Math.floor(1000 + Math.random() * 9000);
console.log("#"+val);

let valueGen = () => {
  Math.floor(1000 + Math.random() * 9000);
}
