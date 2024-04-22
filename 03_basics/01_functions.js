

function sayMyName(){
    console.log("V");
    console.log("A");  //syntex
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

sayMyName()                 //sayMyName is reference

// function addTwoNumbers(Number1, number2){ // ( - ) in function it is called parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Vaibhav"); 
    // return result  //....After return nothing is print

    return number1 + number2
}


 addTwoNumbers(3,4)  // ( - ) calling function called Arguments

const result = addTwoNumbers(3,4)
console.log("Result: ",result);


function loginUserMesaage(username = "sam"){ //default value sam
        // if(username === undefined)
        if(!username){
            console.log("Please enter a username");
            return
        }

        return `${username} just logged in`
}

// console.log(loginUserMesaage("Vaibhav"));
console.log(loginUserMesaage()) //....result: undefined