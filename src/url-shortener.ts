let url = "www.foobar.com";
let cutOff = "bar"

console.log(url.includes(cutOff));

let updatedUrl = url.replace(cutOff, '');
console.log(updatedUrl);