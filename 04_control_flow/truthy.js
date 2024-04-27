const userEmail = "v@vaibhav.ai"

if(userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "",null,undefined,NaN

//truthy value
// "0", 'false'," ",[], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }                 ...........For checking the array

const emptyobject = {}

if (Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val = 5 ?? 10
// val2 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

//ternary Operator
const iceTraPrice = 100
icsTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")
