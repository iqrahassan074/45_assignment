let guestlist : string[] =["aqsa","sarah","erah"];
//console.log("great news! we found a bigger table")
// unshift 
guestlist.unshift("alia");
//console.log(guestlist);
// splice()
guestlist.splice(Math.floor(guestlist.length),0, "ali");
//console.log(guestlist);
// push
guestlist.push("areeba");
//console.log(guestlist);

guestlist.forEach(guest => {
    console.log(`dear ${guest}, you all are invited for dinner.`);
    
})



