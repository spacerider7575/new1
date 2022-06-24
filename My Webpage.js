//spread function
//It is used to merge arrays/objects
//It is also used to copy arrays/objects


// merging arrays


/*
let arr1 =[10,20,30]
let arr2 =[40,50,60]
let arr3 =[...arr2,...arr1]//(...) here does not represent rest parametres
console.log(arr3) 


//merging objects
let obj1={
 a:10,
 b:20
}
let obj2={
  c:30,
  d:40
}
let obj3={...obj2 ,...obj1}
console.log(obj3)


//creating copies of arrays
a=[1,2,3]
let copya=[...a]
a.push(4)
console.log(a)
console.log(copya)
 

//creating copies of objects
obj1={
    a:10,
    b:20
}
obj2={...obj1}
obj1.c=30
console.log(obj1)
console.log(obj2)
*/


                ///    DESTRUCTURING OF ARRAYS ////
let arr=[1,2,3]
let[,,c]=arr
//console.log(a)
//console.log(b)                 // any variables can be used.
console.log(c)


let obj={
    x:10,
    y:20                       //only variables used in object should be used
}
 let {x,y}=obj
 console.log(x)
 console.log(y)
