"use strict";
let guestList = ["aqsa", "sarah", "erah", "ali", "areeba", "alia"];
// print message
console.log("unfortunately! the new dinner  table won't arrive so we can invite only two guest.");
// remove guest fron list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry ${removedGuest}, we can't invite you.`);
    }
}
//console.log(guestList);
guestList.forEach(guest => {
    console.log(`dear ${guest}, you are still invited for the dinner`);
});
// remove last two name from list 
guestList.splice(0, guestList.length);
// print updated empty list
console.log("updated list of guest:", guestList);
