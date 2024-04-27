// // if
// const isUserloggedIn = true
// const temperature = 41 

// if ( temperature < 50){
//     console.log("less then 50");
// }
// conosle.log("temperature is greater than 50");

// const score = 200
// if(score > 100) {
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

// short hand notation

// const balance = 1000
// if(balance > 500) console.log("test"); //....Implicet scope 

// another way to write
// const balance = 1000
// if(balance > 500) console.log("test"),
// conosle.log("vaibhav");

// if(balance < 500){
//     console.log("less than");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail || guestUser) {
  console.log("user logged in");
}
 
