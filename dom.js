

//dynamic styles application using javascript
let headingElement = document.getElementById("h1")
let paraElement = document.querySelector(".para")
let btn = document.querySelector(".button")


/*dynamic styles i.e.; styles applied by js engine
headingElement.style.color = 'navy'
headingElement.style.backgroundColor = 'yellow'
*/

//response from webpage

/*
btn.addEventListener('click',()=>{
    console.log("btn clicked")
    headingElement.style.color = 'navy'//on clicking the btn,these canges are observed.
    headingElement.style.backgroundColor = 'yellow'
    headingElement.style.textDecorationColor='green'
    headingElement.style.textAlign='center'
    headingElement.textContent="Welcome to DOM"//assiging dynamic content
    paraElement.style.textAlign="center"

    document.body.style.backgroundColor='goldenrod'
})

//creating new elements in dom 
 let arr=[19,2,3,37]
  for(let v of arr){
    // creating  
    let h2 =document.createElement('h2')
    h2.textContent=v
    console.log(h2)
    //But here the elements are still printed in the console.
    //To add the elements to the DOM,parent. appendChild(child) method is used 
    //to add child to DOM
    document.body.appendChild(h2)
  }

  */

  //reading value from input fields
   let inp1 = document.querySelector(".inp1")
   btn.addEventListener('click',()=>{
    //read value frm input
    let v1 =inp1.value
    //To print on the screen - add an h1 element
    //craeting a h1 element
    let h1= document.createElement('h1')
    //giving content to h1
    h1.textContent = v1
    //adding h1 to dom
    document.body.appendChild(h1)

   })





