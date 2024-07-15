var guestArray = ["Hammad", "ahsan", "Hamza"];
var cannotattend = "Hammad";
var newguest = "fahad";
guestArray[guestArray.indexOf(cannotattend)] = newguest;
guestArray.unshift("zeeshan");
var middleguest = "umar";
var middlindex = guestArray.length / 2;
guestArray.splice(middlindex, 0, middleguest);
guestArray.push("Manzor");
console.log(guestArray);
console.log("we can invite only two people for dinner");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nsorry ".concat(removeguest, " we can invite you to dinner"));
}
;
guestArray.map(function (itam) { return console.log("\n".concat(itam, " you are still invited to dinner ")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
