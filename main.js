// Console commands.
//console.log('Hello World');
//console.error('This is an error');
//console.warn('This is a warning');

// Variables - var, let, const (for the most part you dont want to use var)
// let - reasign values
//const - constant immutable variable

//Primitive Data Types - String, Numbers, Boolean, null, undefined
const name = 'Jordan';
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z; //also considered undefined

//to test type 
//console.log(typeof VARIABLE);

// Concatenation - Template string
//console.log(`My name is ${name} and my age is ${age}`);

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.split('')); //splits variable into array by delimiter

// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5); // array constructor
console.log(numbers);

const fruit = ['banana', 'oranges', 'pears', 'apples']; //also creates an array
console.log(fruit[1]); //array access
fruit[3] = 'grapes'; //Data of const can be manipulated, it just cant be reassigned
console.log(fruit); 
//common array manipulations
fruit.push('mangos'); //Will add to the end of the array
fruit.unshift('Strawberries'); //Will add to the front of an array
fruit.pop(); //Will remove first entry of array
console.log(Array.isArray(fruit)); //Will check if item is array returns true or false
fruit.indexOf('oranges'); //Finds index of requested value

// Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

// De-structuring - allows you to pull aspects from an object and turn them into variables
const { firstName, lastName, address: {city}} = person;
// de-structuring embedded objects --> address: {city} will pull city from the embedded address

//adding properties to objects
person.email = 'john@email.com';
console.log(person);

// Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);

// JSON - data format usually sent and received when using APIs in fullstack development
/* 
[
   {
      "id": 1,
      "text": "Take out trash",
      "isCompleted": true
   },
   {
      "id": 2,
      "text": "Meeting",
      "isCompleted": true
   },
   {
      "id": 3,
      "text": "Dentist",
      "isCompleted": false
   }
]
*/

// Can turn format to JSON in-code
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Loops - For
for(let i = 0; i < 10; i++){
    console.log(i);
}

// Loops - While
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// Looping Arrays w/ For Of
for(let todo of todos){
    console.log(todo);
    console.log(todo.text);
}

// High order array methods - forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});
//High order array methods - map
const todoText = todos.map(function(todo) {
    return todo.text;
});
//High order array methods - filter
const todoTxt = todo.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

// Conditionals
const q = 10;

// == will match character, === will match character and datatype
if(q === 10) {
    console.log('q is 10');
}else{
    console.log('q is not 10');
}

// Ternary operator
const ex = 10;
//using ternary operators this translates to if x is greater than 10, THEN set color to red, ELSE set color to blue
//just remember ? = THEN, and : = else
const color = ex > 10 ? 'red' : 'blue';

//switch statements
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//Functions
function addNums(num1, num2){
    console.log(num1 + num2);
}

addNums(5,4);

//Arrow Functions
//arrow functions remove the need for a return statement, and in the case of
//a single argument, can also remove paren and curly braces.
const addNums2 = (num1, num2) => num1 + num2;

console.log(addNums2(5, 5));

// Object Oriented Programming

//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

//instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1);
console.log(person2.dob);