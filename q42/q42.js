function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `the great ${name}`);
}
let magicians_names = ["ali", "aqsa", "sara"];
let great_magicians = make_great(magicians_names);
console.log(great_magicians);
export {};
