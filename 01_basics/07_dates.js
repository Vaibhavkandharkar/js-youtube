//Dates

let myDate = new Date()
console.log(myDate.tostring());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 4, 3)
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("01-14-2024")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDtae.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})