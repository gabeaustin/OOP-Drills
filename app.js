// Object Literals, Pseudo Classes and Methods

// x - Write 5 object literals, have them named person1-person5. 
// x - Give each a name property and have this be a name of a friend or family member. 
// x - Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.

// Call the sayHello function on each object and check the console for a response. This seems kind of repetitive doesn't it? Yeah, let’s practice some pseudo classes. 

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


// Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age; 
}