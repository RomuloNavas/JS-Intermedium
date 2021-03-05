//----------------------------------------------------PROXY IN OBJECTS
const person = {
    name: `Romu`,
    age : 20,
    job: `Frontend`
};
//In the constructor of the class we must pass two parameter. 1) A target && 2) handlers that is, those methods that allow to make so-called a trap.
const op = new Proxy(person,{ //op for object proxy
    //-------------------------get
    get(target,property){ //=Accepts 3 parameter: 1) Target && 2) properties (keys)
        if(property in target){
            console.log(`Target:`, target, `| Property:`, property);
            return target[property];
        } else{
            return property
                .split(`_`)
                .map(p=> target[p])
                .join(` `)
            // throw new Error(`"${property}",is not a property of the target`);
        }
    },
    //-------------------------set
    set(target,property,value){//=Accepts 3 parameter: 1)Target && 2) properties && 3) values
        if (property in target){ // Setting a new value to the op property
            target[property] = value;
            console.log(`We have set the value "${value}" to the property "${property}"`);
        } else{ //If the property is not inside opm, we show an error
            throw new Error(`We can not set the value "${value}" to "${property}", because "${property}" is not a property of the target `); //.Showing an error message
        }
    },
    //-------------------------has
    has(target,property){
        return [`age`,`name`,`job`].includes(property);  
        //"name" in op    => true
        //"heigh" in op    => false
    },
    //-------------------------deleteProperty
    deleteProperty(target,property){
        delete target[property];
        console.log(`"${property}" was successfully deleted.`);
        return true;
        //delete op.age => "age" was successfully deleted.
    }
});
//----------------------------------------------------PROXY IN FUNCTIONS
//Functions
const log = text => `Log: ${text}`;
const fp = new Proxy(log,{
    apply(target,thisArg,args){ //=Accepts 3 parameter: 1)target (the function), 2)context(if we used call or apply) 3) parameters
        console.log(`Calling fn...`)
        return target.apply(thisArg, args).toUpperCase(); //=If the context is 0, no problem, anyway we should write it. 
         //And now we are able to modify the value for ex: .toUpperCase();
    }
});
//fp(`Romulo`) //write inside the browser's console
//----------------------------------------------------PROXY IN CLASSES
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    };
};

const PersonProxy = new Proxy(Person,{
    construct(target,args){
        console.log(`Constructor...`);
        //return new target(...args); //=This is the basic used trap over the constructor
        return new Proxy(new target(...args),{  //.In fact, we can initialize this object in a new Proxy 
            get(targ,prop){
                console.log(`Getting prop "${prop}"`);
                return targ[prop];
            }
        }) 
    }
});
const p  = new PersonProxy('Romu', 20);
//console.log(p); => Person: name:Romu , age:20; 


//----------------------------------------------------CONSOLE
//The actual Proxy repeats the object person.
// console.log(op);
//=But the idea, is that now we have a trap in the method get
//--------------get
    op.name;
    op.age;
//--------------set
console.log(`Setting age to:`,op.age = 21 );
console.log(op.age );
//--------------has
console.log(`Does the object "op" contains the property "name"?`,`name` in op); //true
console.log(`Does the object "op" contains the property "heigh"?`,`heigh` in op); //true
//--------------deleteProperty
delete op.age
console.log(op);
