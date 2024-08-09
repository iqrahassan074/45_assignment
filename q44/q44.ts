function MakeSandwich(...Items: string[]) {
    console.log("\n Making a Sandwich with the following Items: \n");
    Items.forEach(singleItem =>
        console.log(singleItem)  
    )
    console.log("\nNow Enjoy Sandwich");       
}
MakeSandwich("Bread" , "Butter")
MakeSandwich("Chicken" , "Cheese" , "Egg")
MakeSandwich("Bread" , "Butter" , "Chicken" , "Tomato" , " Mayo" , "Cheese" , "Egg" )