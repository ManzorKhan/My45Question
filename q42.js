//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// create an array of magicians names
var magicians1 = ["mustafa", "Ali", "sohail",];
function show_magicians(magicians1) {
    magicians1.forEach(function (magician1) {
        return console.log(magician1);
    });
}
function make_great(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the great " + magicians1[i];
    }
}
// call make_great() to modify the array of magicians
make_great(magicians1);
// call show_magicians() to see that list has been modified
show_magicians(magicians1);
show_magicians(magicians1);
