let guestArray:string[] = ["Hammad","ahsan","Hamza"];


let cannotattend:string = "Hammad";

let newguest :string = "fahad";
guestArray[guestArray.indexOf(cannotattend)]=newguest;

console.log("welcom all we found a dinner table");

guestArray.unshift("zeeshan");

let middleguest:string = "umar";
let middlindex = guestArray.length/2;
guestArray.splice(middlindex,0,middleguest);


guestArray.push("ahsan");

guestArray.map((itam)=>console.log(`\ndear ${itam} you are invited to dinner`))