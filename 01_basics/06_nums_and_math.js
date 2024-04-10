const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8699


console.log(otherNumber.toPrecision(3));


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


// ***************** Maths *****************

console.log(Maths);

console.log(Math.abs(-4));
console.log(Math.round(5.5));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.min(2,5,4,8));
console.log(Math.max(2,4,2,4,5));

console.log(Math.random()); // in between 0 or 1 

console.log(Math.random()*10 + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
