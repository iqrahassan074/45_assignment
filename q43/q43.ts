function show_magicians (magicians: string[]){
    magicians.forEach(name =>  console.log(name)
    );   
}

function make_great(magicians: string[]){
    return magicians.map(name => `the great ${name}`)
}
let magicians_names = ["ali","aqsa","sara"]

let great_magicians = make_great(magicians_names)


let copy_magicians_names = magicians_names.slice()

let copy_great_magicians = make_great(copy_magicians_names)

console.log("\noriginal array\n");
show_magicians(magicians_names)
console.log("\ncopied array\n");
show_magicians(copy_great_magicians)




