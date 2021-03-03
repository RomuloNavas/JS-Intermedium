function createCalcFunction() {
  return function (n) {
    console.log(2 * n);
  };
}
const calc = createCalcFunction();
console.log(calc);
calc(2);
calc(10);

//---------------------------------------------

function urlGenerator(topLevelD) {
  return function (subDomain, domainName) {
    console.log(`https://${subDomain}.${domainName}.${topLevelD}`);
  };
}

const comUrl = urlGenerator(`com`); //This is the variable that will be closured;
const ruUrl = urlGenerator(`ru`);

comUrl(`www`, `youtube`); //We can dynamically modify the variable that returns the main function.
ruUrl(`www`, `moscow`);

//---------------------------------------------

function logPerson() {
  console.log(`${this.name}, ${this.age}, ${this.job}`);
}
const person1 = { name: `Romulo`, age: `21`, job: `Frontend` };
const person2 = { name: `Romi`, age: `20`, job: `Frontend` };

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
bind(person1, logPerson)();
