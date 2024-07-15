//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var friends_name = ["manzor", "Ali", "Ahmed", "usman"];
// check if the list of users is not empty
if (friends_name.length > 0) {
    // loop through the array and print cach user
    for (var _i = 0, friends_name_1 = friends_name; _i < friends_name_1.length; _i++) {
        var user = friends_name_1[_i];
        console.log("user: " + user);
    }
}
else {
    console.log("we need to frind some users");
}
// remove all usernames from the array
var nulName = [];
// check if the list of users is not empty after removal
if (nulName.length > 0) {
    // loop through the array and print cach user
    for (var _a = 0, nulName_1 = nulName; _a < nulName_1.length; _a++) {
        var user = nulName_1[_a];
        console.log("user: " + user);
    }
}
else {
    console.log("we need to frind some users");
}
