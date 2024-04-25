// Immediately Invoked Function Expression (IIFE)

(function chai(){
  //named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {     //...name = parameter
  //unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})('vaibhav')
