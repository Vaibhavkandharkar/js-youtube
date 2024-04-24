const user = {
    username: "Vaibhav",
    price: 999,

    welcomeMessage: function(){
     console.log(`${this,username} , welcome to website`)
    }
}
user.WelcomeMessage()
user.username = "sam"
user.WelcomeMessage()

console.log(this)   

function chai(){
    let username = "vaibhav"
    console.log(this.username);
}

const chai = () => {
    let username = "vaibhav"
    console.log(this.username);
}

chai()

const chai = function (){
    let username = "vaibhav"
    console.log(this)
}

//  * Basic Arrow Function

// const addTwo = (num1, num2) => {
//     return num1 + num2          .......if {} this is used then there should be return keyword is mandatory


// }
// console.log(addTwo(3,4));

// * Implicet Arrow Function 
// This should
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3,4));




