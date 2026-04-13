let greet = (name,timeofDay) => {
    console.log(`Good ${timeofDay}, ${name}!`);
}
greet("Alice", "morning");
greet("Bob", "evening");
let square = num => num * num;
console.log(square(5));
console.log(square(8));
let sayHello = () =>{ 
    console.log("Hello there!");
};
sayHello();   
let person = {
    name: "John",
    age:30,
    greet:function() {
        console.log(`hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
person.greet();

const numbers = [1, 2, 3, 4, 5];
//destucturing assignment
const[a,b, ...rest] =numbers;
console.log(a);
console.log(b);
console.log(rest);

const person2 = {
    name2: "John Due",
    age2: 25,
    city: "New York"
};
const {name2, age2, city} = person2;
console.log(name2);
console.log(age2);
console.log(city);