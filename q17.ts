let guestArray:string[] = ["Hammad","ahsan","Hamza"];


let cannotattend:string = "Hammad";

let newguest :string = "fahad";
guestArray[guestArray.indexOf(cannotattend)]=newguest;

guestArray.unshift("zeeshan");

let middleguest:string = "umar";
let middlindex = guestArray.length/2;
guestArray.splice(middlindex,0,middleguest);


guestArray.push("Manzor");
console.log(guestArray);

console.log("we can invite only two people for dinner");

while(guestArray.length>2){
   let removeguest = guestArray.pop();
    console.log(`\nsorry ${removeguest} we can invite you to dinner`);
};

guestArray.map((itam)=>console.log(`\n${itam} you are still invited to dinner `));

guestArray.pop();
guestArray.pop();


console.log(guestArray);


