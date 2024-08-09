"use strict";
let guestList = ["aqsa", "sarah", "erah"];
// print the name who is not invited for dinnar
let unableAttand = guestList.splice(0, 1)[0];
console.log(`${unableAttand}, not invited for dinner`);
console.log(guestList);
// push 
guestList.push("alia");
console.log(guestList);
// print a message
guestList.forEach(guest => {
    console.log(`dear ${guest}, you are invited for dinner `);
});
