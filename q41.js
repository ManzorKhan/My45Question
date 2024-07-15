//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// create an array of magician names
var magicians = ["mustafa", "Ali", "sohail",];
function show_magicians1(magicians) {
    magicians.forEach(function (magician) {
        return console.log(magician);
    });
}
// call the function to show the magicians
show_magicians1(magicians);
