function show_magicians (magicians: string[]){
    magicians.forEach(name =>  console.log(name)
    );   
}

function make_great(magicians: string[]){
    return magicians.map(name => `the great ${name}`)
}
let magicians_names = ["ali","aqsa","sara"]

let great_magicians = make_great(magicians_names)

console.log(great_magicians);
