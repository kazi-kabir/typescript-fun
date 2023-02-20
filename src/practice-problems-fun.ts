// print time and date

// date
let today = new Date();

let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

console.log(date);

// time

let time = today.toDateString()

console.log(time);


