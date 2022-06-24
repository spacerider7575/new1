/*var a=[1,2,'hani']

const person = {
    name:'aditya',
    age:22,
    city:'hyderabad',
    qualification:'Graduate',
    College:'VNR VJIET',
}
//object is an unordered collection of data,unlike array which is an ordered collection
console.log(person)//while printing the object,keys are displayed in ALPHABETICAL ORDER (CAPITALS FIRST,then comes samll...)
console.log(typeof person)
console.log(typeof a)

///accessing elements of object
console.log('name is',person.name)
console.log('age is',person['age'])

//adding new key-value pairs to the object
person.mobile=123456789
console.log(person)

//deleting a key-value pair
delete person.qualification
console.log(person)

//modifying a value 
person.name="haneesha"
console.log(person)

//iterating an object
//A NEW LOOP CALLED FOR-OF LOOP IS INTRODUCED TO ITERATE THROUGH AN OBJECT
  for(let v in person){
    console.log(v)// v gets the values of the keys
    console.log(person[v])//getting values
  }
*/





                        //       *****    COMPLEX OBJECTS     *****            //
/*const person={
    id:100,
    name:"stefan",
    age:21,
    qual:"graduation",
    skills:["full stack developer","data scientist","data base architect","ML engineer"],
    basic:1e15,
    adddress:{
       city:"andy street",
       state:"atlanta",
       contry:"usa"
    },
    getsal:function(){
          //cal hra+da+basic
          let hra = this.basic*0.15 //normally it checks for basic outside the object. So,this.basic is used to make itsearch in the object itself.
          let da = this.basic*0.10
          return this.basic+hra+da
    }
}

console.log(person.skills)
console.log(person.adddress.state)
console.log(person.getsal())
*/


          ////      CONSTRUCTOR FUNCTIONS      ////
           

    /*function Person(id,name,age,job,salary){
      this.id=id;
      this.job=job;
      this.age=age;
      this.salary=salary;
      this.name=name;
      this.getpay = function(){
        let hra = this.salary*0.20
        let da  = this.salary*0.10
        return hra+da
      }
    }
     
    var p1 = new Person(100,"haneesha",26,"chairman",1e12)
    console.log(p1)
    var p2 = new Person(101,"jayanth",24,"ceo",1e14)
    console.log(p2)
   */

            //PROTOTYPES//
            //HERE THE GETPAY METHOD IS EXTRACTED OUT AND IS USED  IN PROTYPE. nOW IT ISNOT A PART OF CONSTRUCTOR FUNCTION,
            //OR OF OBJECTS CREATED. IN THIS WAY WE MINIMIZE THE SPACE USED

           /* function Person(id,name,age,job,salary){
              this.id=id;
              this.job=job;
              this.age=age;
              this.salary=salary;
              this.name=name;
            }
              // protype //
            Person.prototype.getpay = function(){
              let hra = this.salary*0.20
              let da  = this.salary*0.10
              return hra+da
            }
            var p1 = new Person(100,"haneesha",26,"chairman",1e12)
            console.log(p1)
            var p2 = new Person(101,"jayanth",24,"ceo",1e14)
            console.log(p2)
            */





                               //  CLASSES IN JAVASCRIPT//
                               // SIMILAR TO CLASSES IN CPP.CONTAINS METHODS WHICH ARE BY DEFAULT ADDED TO PROTYPE.
                               //THAT IS THE METHODS OF JAVASCRIPT ARE BY DEFAULT STTIC IN NATURE
  class Person{
    constructor(id,name,age,job,salary)
    {
      //object initialization
              this.id=id;
              this.job=job;
              this.age=age;
              this.salary=salary;
              this.name=name;
    }
    //methods
    getpay(/*  arg1,arg2....          */)
    {
              let hra = this.salary*0.20;
              let da  = this.salary*0.10;
              return hra+da
    }

  }
  //object initialization
  var p1 = new Person(100,"haneesha",26,"chairman",1e12)
  console.log(p1)
  var p2 = new Person(101,"jayanth",24,"ceo",1e14)//HERE AS SOON AS THE OBJECT IS CREATED,IT GETS THE VALUES.
  //SO, CONSTRUCTORS ARE CALLED AS SOON AS THE OBJECT IS CREATED.
  console.log(p2)
  console.log(p1.getpay())//THESE METHOD ARE CALLED ONLY EXPLICITLY
  console.log(p2.getpay())






