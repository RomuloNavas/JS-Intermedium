//---------------------------Simple Obj.
console.log(`SIMPLE OBJECT`);
const perObj = {
  name: `Romulo`,
  birth: 1999,
};
// In the browser open this obj. and notice that the key color name is bright.
console.log(perObj);

//for () has access to the key name
for (let key in perObj) {
  console.log(`Key`, key, perObj[key]);
};

perObj.name = `Misael`;  //We can write a new value for the key
perObj.birth = 1999;    //We can write a new value for the key
console.log(perObj);

delete perObj.name;   //We can delete the key
delete perObj.birth;  //We can delete the key 
console.log(perObj);

console.log(`USING OBJECT.CREATE`);
//---------------------------Object.create

//.create => Allow us to create a new object. This method contains two parameters. And both of them are objects. 
let person = Object.create(
  {//!First parameter.
    //=We can specify the prototype for the newly created Object. 
    //For example, we can create a method
    calculateAge() {
      console.log(`Age:`, new Date().getFullYear() - this.birth);
    }
  },
  {//!Second parameter.
    name: {
      //PROPERTY DESCRIPTORS:
      value: "Romulo",
      //enumerable:false,  //By default false
      //writable:false,  //By default false
      configurable: true,  //=Allow to delete the key
    },
    birth: {
      //PROPERTY DESCRIPTORS:
      value: 2005,
      enumerable: true, //=Allow to access to the key
      writable: true, //=Allow to change the key value
      configurable: false, //By default false
    },
    age: {
      get() { //. get returns a value, so we can write inside a function and it will return a value from it. This is very useful 
        return new Date().getFullYear() - this.birth;
      },
      set(value) { //. set to a new value temporary, but will replace it.
        console.log(`Set age`, value);
        console.log(this.age);
      }
    },
    background: {
      set(value) {
        document.body.style.background = `${value}`  //=person.background = `green`
        console.log(`Set age`, value);
      }
    }
  }
);
// In the browser open this obj. and notice that the key color name is pale.
console.log(person);

//for () does not has access to the key name, because it has enumerable:false
for (let key in person) {
  console.log(`Key`, key, person[key]);
};

person.name = `Misael`;  //We can't write a new value because  writable = false by default
person.birth = 1999;    //The value has been changed because we set writable = true
console.log(person);

delete person.name;   //We can't delete a new value because  configurable = false by default
delete person.birth;  //We can delete the key because  configurable = true
console.log(person);



person.calculateAge();