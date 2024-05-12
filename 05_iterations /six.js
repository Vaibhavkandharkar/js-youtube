// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);


// const myNums  = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)


// const newNums = []
// myNums.forEach( (num) =>{
//     if (num > 4){
//         nuwNums.push(num)
//     }
// })

// myNums.forEach( (num2) => {
//     newNum2
// })
 
// console.log(newNums);



const books=[
     {title: 'Book One', genre:'Friction', publish:1981, edition: 2004},
     {title: 'Book Two', genre:'Non-Friction', publish:1992,edition: 2008},
     {title: 'Book Three', genre:'History', publish:1999,
     edition: 2007},
     {title: 'Book Four', genre:'Non-Friction', publish:2009,
     edition: 2014},
     {title: 'Book Five', genre:'science', publish:1999,
     edition: 2010},
     {title: 'Book Six', genre:'Friction', publish:1987,
     edition: 2007},
     {title: 'Book Seven', genre:'Friction', publish:1987,
     edition: 2007},
]

// var userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {bk.publish >= 2000})
// console.log(userBooks);

userBooks = books.filter( (bk) =>{
     return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);


