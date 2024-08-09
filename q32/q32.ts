let current_users = ["aqsa","alia","ali","sarah","sana"]

let new_users = ["aysha","asim","Alia","erah","Sana"]

new_users.forEach(new_one_users => {
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken!`);  
    } else {
        console.log(`this is username ${new_one_users} is available!`);
        
    }
})