"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["aqsa", "ali", "admin", "alia", "sana"];
userNames.forEach(oneuser => {
    if (oneuser === "admin") {
        console.log(` hello ${oneuser}, would you like to see a status report?`);
    }
    else {
        console.log(` hello ${oneuser}, thank you for logging in again.`);
    }
});
