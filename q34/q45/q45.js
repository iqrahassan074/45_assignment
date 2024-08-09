function createcar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const mycar = createcar("toyota", "corolla", { colour: "silver", year: "2024" });
console.log(mycar);
export {};
