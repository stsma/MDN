function myFunction(){

  let text = "Apple, Banana, Kiwi";
  let part = text.slice(7, 13);
  console.log(part)



  document.getElementById("demo").innerHTML = "Paragraph changed";

//One Statement, Many Variables
// let person = "John Doe", care = "Volvo", price = 200;

// statements
let x, y, z;
x = 5; y = 6; z = x + y;
console.log('test: ',z);

// variables
//You declare a JavaScript variable with the var or the let keyword:
// var carName;
// or:
let carName;
// After the declaration, the variable has no value (technically it is undefined).


//JAVASCRIPT Let
//The let keyword was introduced in ES6 (2015)
//Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope

{
  let xx = 2;
}

person.fun();

}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fun: function(){
    alert("hello")
  }
}
