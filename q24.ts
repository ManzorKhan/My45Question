//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

// create two variable
let string1:  string = 'Manzor';
let string2:  string = 'Khan';

// tests for equality and inequality with strings 
console.log("Is string1 equal to 'Manzor'? I predict true.");
console.log(string1 === 'Manzor');
console.log("Is string1 not equal to string2? I predict true.");
console.log(string1 === string2);

//Numerical test involving equelity and inequality greter than and less than,
//greater than or equal to, and less than or equal to 
//create two more variable
let numm1: number = 10;
let numm2: number = 20;

console.log("Is numm1 equal to 10? I predict true.");
console.log(numm1 === 10);
console.log("Is numm1 equal to numm2? I predict true.");
console.log(numm1 === numm2);


console.log("Is numm1 less than numm2? I predict true.");
console.log(numm1 < numm2);
console.log("Is numm1 greater than numm2? I predict true.");
console.log(numm1 > numm2);


console.log("Is numm2 less than or equal to 20? I predict true.");
console.log(numm2 <= 20);

console.log("Is numm1 greater than or equal to 20? I predict true.");
console.log(numm1 >= 20);

//test using "and" and "or" operators 
// create another two variable
let boo11: boolean = true;
let boo12: boolean = false;

console.log("Is boo11 true and boo12 false? I predict false.");
console.log(boo11 && boo12);

console.log("Is boo11 true or boo12 false? I predict true.");
console.log(boo11 || boo12);

// test when an item is in an array 
// create an array
let array: number[] = [1, 2, 3, 4, 5,];

console.log("Is 3 in the array? I predict true.");
console.log(array.includes(3));

// test then an item is not in an array
console.log("Is 8 not in the array? I predict false.");
console.log(array.includes(8));