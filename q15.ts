let guestArray:string[] = ["Hammad","ahsan","Hamza"];


let cannotattend:string = "Hammad";
console.log(`${cannotattend} can not make it ,for dinner`);

let newguest :string = "fahad";
guestArray[guestArray.indexOf(cannotattend)]=newguest;
console.log(guestArray);

guestArray.map((itams)=> console.log(`Hello, ${itams} you are invited to dinner`))