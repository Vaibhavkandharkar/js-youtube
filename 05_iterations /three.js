// for of loop

// ["","",""]
// [(),(),()]

//----for of loop----
const arr = [1,2,3,4,5]
for (const num of object){
   console.log(num);
}

const greeting = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

// Maps ... it is a unique value pair and it is same in the output pair

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('fr',"France")

// console.log(map);

// if want to apply loop on the Maps
for (const [key, value] of map){
    console.log(key, ':-',value);
}
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }                                       ....its not working


