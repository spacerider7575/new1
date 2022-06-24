let test1 = ()=>{
    return("hello")
}
let test2 =(a)=>{
    console.log(a())
}
test2(test1)


            //       ES6 function demo                                          //
            //Filter demo:        
            //FILTER METHOD CAN ONLY FITER THE DATA BASED ON CONDITIONS GIVEN,BUT NOT MODIFY IT
 let arr=[1,-8,-22,78596,192,789]
 
 var solve = arr.filter(function(element1)
 {
     return element1>100
 }
 )
  console.log(solve)
          //MAP DEMO:USED TO MODIFY DATA



a=[1,2,3,4,5,6,7]
  
let silk = a.map((a1)=>a1+10)
console.log(silk)


a.forEach((element,index) => {
     console.log(`value at index ${index} is ${element}`)
});


///REDUCE METHOD:TAKES TWO ARGS ARG1,ARG2
//IN FIRST STEP,THE FIRST ELEMENT OF ARRRAY IS PASSED AS ARG1 AND SECOND ELEMENT OF ARRAY IS PASSED AS ARG2
//RESULT IS PASSED TO ACCUMULATOR (ARG1), AND NEXT ELEMENT OF ARRAY IS PASSED TO ARG2
//THIS PROCESS CONTINUES TILL ALL ELEMENTS ARE PASSED
 var sumOfElements = a.reduce((acc,ele)=> acc+ele)
 console.log(sumOfElements)

 var minOfElements = a.reduce((acc,ele)=> acc>ele?ele:acc)
 console.log(minOfElements)


 //FIND METHOD:TAKES ONE ARGUMENT 
 //USED TO SEARCH AN ELEMENT
   
 var p = a.find((element)=>element == 7)
 console.log(p) //returns the same number if found,else return """"undefined""""



//FINDINDEX METHOD TO FIND THE INDEX OF THE ELEMENT
 var p = a.findIndex((element)=>element == 7)
 console.log(p) //returns index if found, else return -1
