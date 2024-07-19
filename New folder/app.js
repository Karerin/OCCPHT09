//console.log("Hello World");

// This is a single line comment
/* 
This is
a multi-line
comment
*/
function sayHello(){
    let name = "Tristan Pogi"; // string
    let age = 21; // number
    let birthday = false; // boolean
    let variable; //undefined
    let sample = null;

    let x = 5;
    let y = 2;
    let sum = x + y;
    let diff = x - y;
    let product = x * y;
    let quotient = x / y;
    let modulo = x % y;
    
    console.log("Sum of x and y is -> ", sum);
    console.log("Difference of x and y is -> ", diff);
    console.log("Product of x and y is -> ", product);
    console.log("Quotient of x and y is -> ", quotient);
    console.log("Modulo of x and y is -> ", modulo);
}
sayHello();

function StringExpression(){
    console.log("Hello", "World" + "!");
}

StringExpression();

function LogicalExpressions(){
    let sunny = true;
    let warm = true;
    
    //AND operator will only show true if all/or both side is true
    console.log("Sunny && Warm", sunny && warm);
    //OR operator will show true if either one of them is true
    console.log("Sunny || Warm", sunny || warm);
    //Negate will show the opposite of the value
    console.log("!sunny", !sunny);
}

LogicalExpressions()

function AssignmentExpressions(){
    let a = 10;
    let b = 5;

    a += b; // a = a + b;
    console.log("a:", a);

    a -= b; // a = a - b;
    console.log("a:", a);

    a *= b; // a = a * b;
    console.log("a:", a);

    a /= b; // a = a / b;
    console.log("a:", a);
}

AssignmentExpressions()

function FunctionCall(num1, num2, num3, num4){
    console.log(num1, num2 + num3 + num4);
}

FunctionCall("String", 5, 3, 4);

//Control Structures and Loops

//Conditionals: If Statement
let age = 17;
if(age >= 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are NOT eligible to vote");
}

//Conditionals: If-else if-else Statement
let temperature = 17;

if(temperature < 0){
    console.log("It's freezing outside");
} else if (temperature >= 0 && temperature < 5) {
    console.log("It's 0 to 5 degrees outside");
} else if (temperature >= 6 && temperature < 10) {
    console.log("It's 6 to 10 degrees outside");
} else if (temperature >= 11 && temperature < 15) {
    console.log("It's 11 to 15 degrees outside");
} else if (temperature >= 16 && temperature < 20) {
    console.log("It's 16 to 20 degrees outside");
} else {
    console.log("It's warm outside");
}

//Conditionals: switch statement
let day = "Monday";

switch(day){
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Tuesday":
        console.log("It's the second day of the week");
        break;
    case "Wednesday":
        console.log("It's the third day of the week");
        break;
    case "Thursday":
        console.log("It's the fourth day of the week");
        break;
    case "Friday":
        console.log("It's the fifth day of the week");
        break;
    default:
        console.log("It's the weekend!");
}

//Iterative: Loops
//For Loop
// for(let index = 0; index < 10; index++){
//     console.log("Count:", index);
// }

//While Loop
let count = 1;

while(count <= 5){
    console.log("Count:", count);
    count++;
}

//Do-while Loop
let i = 1;

do {
    console.log("Do-While Count:", i);
    i++;
} while (i <= 5);


//Arrays and Array Method
//Creating and Array
let fruits = ["Avocado", "Apple", "Dragon Fruit", "Orange"];

//Accessing array elements
console.log(fruits);
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

//Modifying array elements
fruits[1] = "Mango"; //updating an element
console.log(fruits);
console.log("Second fruit:", fruits[1]);
fruits.push("Banana"); //Add an element at the end of the array
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.splice(0, fruits.length);
console.log(fruits);

//Array Iteration with for loop
let numbers = [1, 2, 3, 4, 5, 6];

for(let index = 0; index <= 5; index++){
    console.log(numbers[index]);
}

//Array iteration using forEach method
fruits = ["Raspberry", "Durian", "Strawberry", "Kiwi", "Melon"];
console.log(fruits);

fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.forEach(fruit => {
    console.log(fruit);
});

//Array Methods
//Common array methods

let colors = ["Red", "Green", "Blue"];

//length
console.log("Array Length:", colors.length);

//indexOf
console.log("Index of Blue:", colors.indexOf("Blue"));
console.log("Index of Brown:", colors.indexOf("Brown"));

//includes
console.log("Includes Green:", colors.includes("Green"));

//join
console.log("Joined array:", colors.join())

//slice
let slicedArray = colors.slice(0, 2);
console.log(slicedArray);

//splice
let removedElements = colors.splice(0, 2);
console.log("Removed Elements:", removedElements);
console.log("Updated Array:", colors);

//Object Literals

//Step 1 on creating object literal
const person = {
    //Step 2: Add properties
    firstName: "Jimmu",
    lastName: "Pogi",
    age: 21,
    hobbies: ['reading', 'traveling', 'playing'],

    //Step 3: Add a method to the object
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    }
}

//Step 4: Accessing object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies[1]);

//Step 5: Modifying object properties
person.lastName = "Ducas";
console.log(person.lastName);
person.age = 22;
console.log(person.age);

// Step 6: Accessing object methods
person.greet();

// Step 7: Adding new properties to the object
person.nationality = "Filipino";
console.log(person.nationality);

// Step 8: Adding new methods to the object.
person.introduce = function(){
    console.log(`I am ${this.age} years old.`);
}

person.introduce();

// Step 9: Nesting Objects
const address = {
    country: "Japan",
    city: "Legazpi",
    street: "123 Street",
}

person.address = address;
console.log(person.address.country);

console.log(`I am`, person.firstName, person.lastName, `who is`, person.age, `years old. I live in`, person.address.street, person.address.city, "and it is nice to meet you!");