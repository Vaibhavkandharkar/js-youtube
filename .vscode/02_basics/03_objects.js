// singleton : after maker by the constructor
// Object.create 

// objects literals : 

const mySym = Symbol("key1")

const JsUser = {
    name: "Vaibhav",
    "full name":"Vaibhav Kandharkar",
    age:21,
    location: "Chh. Sambhaji Nagar",
    [mysym]:"mykey1",
    email: "Vaibhavk0099@gmailcom",
    inLoggedIn: false,
    lasteLogInDays:["MOnday","Sunday"]
}

 console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "vaibahv@chatGPT.com"
Object.freeze(JsUser);
JsUser.email = "Vaibhav@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user")
}
JsUser.greeting = function(){
    console.log(`Hello Js user${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
