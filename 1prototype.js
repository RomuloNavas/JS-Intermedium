const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet!");
  },
});
console.log(person.name);
//Prototype is also an Object and relates to everything parental.
console.log(person.toString());

// We can call our Global Class OBJECT, and then we can call its property //.prototype.
//In this prototype we can create a new fields. for example: sayHello() : 
Object.prototype.sayHello = function () {
  console.log(`Hello!`);
};
person.sayHello();

//------------------------------------------------------------------
// The Global Class OBJECT has a method //.create()
//=Which allows to create a new Prototype from an object. 
//Next step is to pass in an Object, which will serve as a Prototype for the object lena.
const lena = Object.create(person);
console.log(lena.name); //Maxim
lena.name = "Lena";     //Change the property of the object from lena's prototype 
console.log(lena);      //Lena
lena.sayHello();        //sayHello() was added globally

//=Prototypes work from top to bottom, 
//=If the called function or field is found in the upper fields, so then it calls it immediately.
//=If it not, our Object tries to find the requested function in Prototypes.
//=If it was not found, it goes further through all Prototypes looking for the requested method.

//------------------------------------------------------------------
const str = new String("I am a string");
console.log(str.length);
console.log(str);
str.sayHello();       //sayHello() was added globally