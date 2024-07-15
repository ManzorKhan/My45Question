var guestArray = ["Hammad", "ahsan", "Hamza"];
var cannotattend = "Hammad";
console.log("".concat(cannotattend, " can not make it ,for dinner"));
var newguest = "fahad";
guestArray[guestArray.indexOf(cannotattend)] = newguest;
console.log(guestArray);
guestArray.map(function (itams) { return console.log("Hello, ".concat(itams, " you are invited to dinner")); });
