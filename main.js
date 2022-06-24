          // Exporting and importing using default methods///
          // Here any variable can be used to import when default is used                                              //
/*
import x from "./users.js"
import y from "./products.js"
console.log(x)
console.log(y)
*/

/*
import users1 from "./users.js"
import products1 from "./products.js"
console.log(users1)
console.log(products1)
*/


                                                          ///add type=module beside script element in html page
/*
packing only to a object 
import x from "./users.js"
console.log(x.foods)
*/

                         /*  INNER FUNCTIONS AND CLOSURE   */
/* 
function f1(){
    //  code
   function f2(){
    //code
   }

}
*/ 

/*   closureeeeeeeeee
function test1(){
    var arr=100
    console.log("hi")
    function test2(){
        const sum = arr+100
    }
    return test2
}

let result = test1()
console.log(result())

*/


          //  ASYNCHRONOUS JAVASCRIPT //
 /*
console.log("customer 1")
setTimeout(()=>{
    console.log("hi")
},5000)
console.log("customer 2")
setTimeout(()=>{
    console.log("hi1")
},20000)
console.log("customer 3")
setTimeout(()=>{
    console.log("hi2")
},2000)
*/



                                //  PROMISE  //
//creating and calling a promise

/*
let condition = true
let proobj = new Promise((fullfilled,rejected) =>
{
    if(condition == true)
    {
        setTimeout(()=>{
            fullfilled("The song is out..")
        },2000)
    }
    else{
        setTimeout(() =>{
            rejected("Sorry guys...,we will release the dates soon")
        },5000)
    }
}
)


proobj.
then(msg=>console.log(msg)).
catch(err=>console.log(err))
console.log(proobj)

*/

                        //Application Program Interfaces
//used to communicate between the applications

//making an api call
fetch("https://jsonplaceholder.typicode.com/posts").
then(response =>response.json()).
then(data =>console.log(data)).
catch(err => console.log("error !!!"))


fetch("https://jsonplaceholder.typicode.com/posts").
then(response =>response.json()).
then(data =>console.table(data)).
catch(err => console.error(err))

console.log("hiiiiiii......")