type car ={
    manufacturer: string
    model: string
    [key: string]: any;
}
function createcar(manufacturer: string, model: string, optional: Record<string, any>): car{
    return{
        manufacturer,
        model,
        ...optional
    }
}
const mycar: car = createcar("toyota","corolla", {colour: "silver" , year: "2024" })
console.log(mycar);
