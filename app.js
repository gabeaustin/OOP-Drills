// Object Literals, Pseudo Classes and Methods

// x - Write 5 object literals, have them named person1-person5. 
// x - Give each a name property and have this be a name of a friend or family member. 
// Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.

let person1 = {
    name: "JW Fowler",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person2 = {
    name: "JC Reynolds",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person3 = {
    name: "BK Scott",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person4 = {
    name: "MIT Austin",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person5 = {
   name:  "ZBA Jones",
   sayHello: function() {
       console.log(`Hello! My name is ${this.name}.`)
   }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();