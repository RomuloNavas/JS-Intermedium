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
    this.hasTail = options.hasTail;
  }
  voice() {
    console.log(`I am animal ${this.name}`);
  }
}

//---------------------------------Extend a created class
class WildAnimal extends Animal {
  static type = `Wild Animal `; //.static If a variable or a method is static, then it is available only from the Class (class Animal);
  constructor(options) {
    super(options); //. We first should call the parent constructor. super() is a method that call the parent constructor.
    this.teeth = options.teeth;
    this.dangerous = options.dangerous;
  }
  get ageInfo() { //=Remember, this is not a method, is a field.
    return this.age * 7;
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
} //---------------------------------Variables form Classes | OOP
const animalOso = new WildAnimal({
  name: `Oso`,
  age: 19,
  hasTail: true,
});
animalOso.voice(); //father's method that we can call
console.log(animalOso.ageInfo);
animalOso.ageInfo = 10;
console.log(animalOso.ageInfo);

//---------------------------------Practical Examples
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = `none`;
  }
  show() {
    this.$el.style.display = `block`;
  }
}
class Box extends Component {
  constructor(options) {
    super(options.selector); //= The father's class Component, accept only selector, it must be some string of the an object box, so we give it the parameter option.selector
    this.$el.style.width = this.$el.style.height = options.size + `px`;
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: `#box1`,
  size: 100,
  color: `orange`,
});

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = "50%";
  }
}
const circle1 = new Circle({
  selector: "#circle1",
  size: 100,
  color: `yellow`,
});
