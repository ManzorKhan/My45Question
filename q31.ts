//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let friends_name: string[] = ["manzor", "Ali","Ahmed", "usman"];

// check if the list of users is not empty
if (friends_name.length > 0) {
// loop through the array and print cach user
 for (let user of friends_name) {
    console.log("user: " + user);
    
 }
} else {
    console.log("we need to frind some users");
    
}

// remove all usernames from the array
let nulName: string[] = [];

// check if the list of users is not empty after removal
if (nulName.length > 0) {
    // loop through the array and print cach user
    for (let user of nulName) {
        console.log("user: " + user);
        
     }
    } else {
        console.log("we need to frind some users");

}