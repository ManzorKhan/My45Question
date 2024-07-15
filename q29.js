//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// create an array
var favorite_fruits = ['banana', 'apple', 'mango'];
if (favorite_fruits.includes('banana')) {
    console.log("you realiy like banana");
}
if (favorite_fruits.includes('apple')) {
    console.log("you realiy like apple");
}
if (favorite_fruits.includes('mango')) {
    console.log("you realiy like mango");
}
if (favorite_fruits.includes('orange')) {
    console.log("you realiy like orange");
}
else {
    console.log("orange are not in your list of favorite fruits.");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("you realiy like kiwis");
}
else {
    console.log("kiwis are not in your list of favorite fruits.");
}
