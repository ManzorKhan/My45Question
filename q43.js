//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians4(magicians4) {
    magicians4.forEach(function (magician) { return console.log(magician); });
}
function make_great2(magicians4) {
    return magicians4.map(function (magicians) { return "the great" + magicians; });
}
// define an array of magicians names
var magicians4 = ["mustafa", "sohail", "ali",];
var great_magicians5 = make_great2(__spreadArray([], magicians4, true)); // creating a copy using
// call thow_magicians4() to show thew original array of magicians names
console.log("original magicians:");
show_magicians4(magicians4);
// call show_magicians4() to show the array with "the great " added to each magicians
console.log("\ngreat magicians:");
show_magicians4(great_magicians5);
