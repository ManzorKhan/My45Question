//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// create a variable
var alien_color = 'green';
// now create a passing condition
if (alien_color === "green") {
    console.log("congratulations! yow just eareed 5 points");
}
// then create a failing condition
var alien_color22 = 'red';
if (alien_color22 === "green") {
    console.log("failed");
}
