# js-youtube
A code repo for  Javascript series in self learning manner



.................Learnings of javascript....................

*javaScript Execution context

{} - Global Execution context it refer to the variables this  
The global execution context is different every enviornment 
The Most important global execution context is of browser and it's this value has window object

javascript is a single threaded language and it has everything is a process

And its has another execution context 

*Functional or Function execution context

and another execution context is 
 
 *Eval execution context


 How the code is execuited in javascript ?

 { code }

 1. First Phase - Memory Creating phase
allocate space for variable and whatever we declare  

 2. Second Phase - execition phase




 let val1 = 10
 let val2 = 5
 function  addNum(num1, num2){
    let total = num1 + num2 
    return total
 }
 let  result1 = addNum (val1, val2)
 let  result2 = addNum(8,6) 


 1.Global Execution
       this 
 2.Memory Phase
   val1 -> undefined
   val2 -> undefined
   addnum -> defination
   result1 -> undefined
   result2 -> undefined

 3.Execution Phase
 val1 <- 10
 val2 <- 5 

                new variable
 addNum ------> environment
                     +
                execution thread            