// const animal = {
//     name: `Animal`,
//     age: 5,
//     hasTail: true
// };


class Animal {
    static type = `Animal`;

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail
    }
    voice() {
        console.log(`I am animal ${this.name}`);
    }
}



//---------------------------------Extend a created class

class WildAnimal extends Animal {
    static type = `Wild Animal `; //.static If a variable or a method is static, then it is avaible only from the Class (class Animal);

};

class DomesticAnimal extends Animal {
    static type = `Domestic Animal`;
    constructor(options) {
        super(options); //= The class Animal has `options` too, that is why we should write it.
        this.color = options.color
    }
};

//---------------------------------Variables form Classes | OOP
const animalOso = new WildAnimal({
    name: `Oso`,
    age: 19,
    hasTail: true
})
animalOso.voice();


const cat = new DomesticAnimal({
    name: `Gato con Botas`,
    age: 15,
    hasTail: true,
    color: `Brown`
});
console.log(cat);