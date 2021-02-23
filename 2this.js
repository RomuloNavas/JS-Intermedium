/*Keyword 'this' is very dynamic, it points to the object in the 
context of which it was called.*/
function hello() {
    console.log(`Hello`, this);
}
hello(); //This points to the element that is at the left of .function
window.hello(); //this is another way to write it, and at the left is window

const thisPerson = {
    name: 'Romu',
    age: 25,
    sayHello: hello,
}
thisPerson.sayHello(); //At the left is person. 

const bind = {
    name: 'Bind',
    age: 21,
    sayHello: hello,
    sayHelloWindow: hello.bind(window), //In the method bind, we can pass the context that will be attached to this function, for example the global obj. windows
    sayHelloDocument: hello.bind(document), // this === window
    sayHelloWindow2: hello.bind(this), // this === window
}
bind.sayHelloWindow();  //window
bind.sayHelloDocument(); //document
bind.sayHelloWindow2(); //window

const functions = {
    name: `The function`,
    logInfoFunction: function () { //function () creates a new this.
        console.log(`Name is ${this.name}`);
    },
    logInfoArrowF: () => { // () => does not create a new this.
        console.log(`Name is ${this.name}`);
    }
}
functions.logInfoFunction(); //Name is function
functions.logInfoArrowF();  //Name is

const romulo = {
    name: `Romulo`,
}
functions.logInfoFunction.bind(romulo)(); //Name is Romulo
functions.logInfoArrowF.bind(romulo)();  //Name is

//==================================================


const user = {
    name: `Matt Gloss`,
    age: 20,
    userInfo: function (job, phone) {
        console.group(`${this.name}'s information:`); //group(), we can pass a chart that will be the heading of the group
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd() //ends the method group()
    }
}
user.userInfo(`Estilista`, `+8 977 123 123`);

const userLena = {
    name: `Lena`,
    age: `18`
}
user.userInfo.bind(userLena)(`Chef`, `numberBind`);

user.userInfo.bind(userLena, `Frontend`, `numberBind`)(); //bind() returns a function then we should call it.
user.userInfo.call(userLena, `Assistant`, `numberCall`); //call() immediately calls this function.
user.userInfo.apply(userLena, [`assistant`, `numberCall`]); //apply() similar to call, write the parameters inside a []


//==============PROTOTYPES AND THIS====================

const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
    //console.log(this);
    return this.map(function (i) {
        return i * n
    })
}
console.log(array.multBy(3));