var guestArray = ["Hammad", "ahsan", "Hamza"];
var cannotattend = "Hammad";
var newguest = "fahad";
guestArray[guestArray.indexOf(cannotattend)] = newguest;
//guestArray.map((itams)=> console.log(`Hello, ${itams} you are invited to dinner`))
console.log("welcom all we found a dinner table");
guestArray.unshift("zeeshan");
var middleguest = "umar";
var middlindex = guestArray.length / 2;
guestArray.splice(middlindex, 0, middleguest);
guestArray.push("ahsan");
guestArray.map(function (itam) { return console.log("\ndear ".concat(itam, " you are invited to dinner")); });
