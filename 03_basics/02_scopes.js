// {} - it is called as scope
// in {} it is called as block scope
// outside of {} is called as global scope
 
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ",a);
}

console.log(a);


function one(){
    const username = "Vaibhav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);   
    
    two()
}
// +++++++++++++++++++ intersting +++++++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)




