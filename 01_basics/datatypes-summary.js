// # Primitive

// 7 types : String,Number,Boolean,null,undefined,symbol, BigInt

const score = 100
const soreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 323242343252423242324n



// reference (Non primitive)

//Array, objects,Functions


const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"vaibhav",
    age:21,
}

const myfunction = function(){
    console.log("Hello world");
} 

console.log(typeof myFunction);
 
// https://262.ecma-international.org/5.1/#sec-11.4.3



// *******************************************

// Stack (primitive), Heap (Non-primitive)

let myYoutubename = "vaibhavkandharkardotcom"

let anothername = myYoutubename
 

let userOne = {
   email: "user@google.com",
   upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vaibhav@google.com"
console.log(userOne.email);
console.log(userTwo.email);

let userThree = userThree

userThree.email = "vaibhav1@google.com"
console.log(userThree);
