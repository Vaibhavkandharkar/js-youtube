

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
// console.log(loginUserMesaage()) //....result: undefined


function calculateCartPrice(...num1){    // ... - it is known as rest operator or spread operator it is call according to usecase

//  rest help's in collecting in infinite number in the function 
  return num1
}
console.log(calculateCartPrice(200,300,400,2000))


// function calculateCartPrice(val1,val2, ...num1){ 
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,2000)) result:[400, 2000]


const user = {
      username: "vaibhav",
      price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// handleObject(user)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

