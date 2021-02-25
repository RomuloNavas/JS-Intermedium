//---------------------------Simple Obj.
const perObj = {
  name: `Romulo`,
  birth: 1999,
};
//= In the browser open this obj. and notice that the key color is bright.
console.log(perObj);

for (key in perObj) {
  console.log(`KeyObject`, key);
}

//---------------------------Object.create

let person = Object.create(
  {},
  {
    name: {
      //=PROPERTY DESCRIPTORS:
      value: "Romulo",
      //enumerable:false,  //By default there is this value
      //writable:false,  //By default there is this value
      //configurable:false,  //By default there is this value
    },
    birth: {
      //=PROPERTY DESCRIPTORS:
      value: 1999,
      enumerable: true, //=Allow to access to the key
      writable: true, //=Allow to change the key value
      configurable: true, //=Allow to delete the key
    },
  }
);
console.log(person);
//= In the browser open this obj. and notice that the key color is pale.
for (let key in person) {
  console.log(`Key`, key, person[key]);
}
