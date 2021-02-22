const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet!");
  },
});

console.log(person);
Object.prototype.sayHello = function () {
  console.log("Hello!");
};
person.sayHello();

const lena = Object.create(person);
console.log(lena);
lena.name = "Lena";
console.log(lena.name);

//========================
const str = new String("I am a string");
console.log(str.length);
console.log(str);
str.sayHello(); 