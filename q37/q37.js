function make_shirt(size = "large", printMessage = "i love typescript") {
    console.log(`creating a ${size} shirt with ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love javascript");
export {};
