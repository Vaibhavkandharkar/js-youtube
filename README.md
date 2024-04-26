# js-youtube
A code repo for  Javascript series in self learning manner



.................Learnings of javascript....................

*javaScript Execution context

{} - Global Execution context it refer to the variables this  
The global execution context is different every enviornment 
The Most important global execution context is of browser and it's value has window object

javascript is a single threaded language and it has everything is a process

And its has another execution context 

*Functional or Function execution context

and another execution context is 
 
 *Eval execution context


 How the code is execuited in javascript ?

 { code }

 1. First Phase - Memory Creating phase
    Allocate space for variable and whatever we declare  

 2. Second Phase - execition phase
    Where a variable is assign a value  




 let val1 = 10
 let val2 = 5
 function  addNum(num1, num2){
    let total = num1 + num2 
    return total
 }
 let  result1 = addNum (val1, val2)
 let  result2 = addNum(8,6) 


 1.Global Execution
         |        
       this
         | 
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
 addNum ------> environment      <------ After it's work done
                     +                    it is delete
                execution thread    
                   ^
                   |
        ----------- 
       |
  1.Memory Phase               2.Execution Phase
    val1 -> undefined -------->  num1 -> 10
    val2 -> undefined            num2 -> 5
    total -> undefined           total -> 15 --> Its goes to 
                                               global execution

---------------------------------------------------------------
   For result2:

                                           New vairable 
                                            enviornment
  Memory   <------  Execution   <-------         +
  Phase              Phase                     Thread

                
                        