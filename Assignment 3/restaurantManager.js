class restaurantManager{
     restaurantList=[{
        Name:"Dominos",
        Address:"Agra",
        City:"Delhi"
    },
    {
        Name:"KFC",
        Address:"Tharavi",
        City:"Mumbai"

    },
    {
        Name:"PizzaHut",
        Address:"Whitefield",
        City:"Bangalore"
    },
    {
        Name:"BarbequeNation",
        Address:"ShanthiNagar",
        City:"Bangalore"
    },
    {
        Name:"RollOver",
        Address:"Thidravandram",
        City:"Kerla"
    }]
    printAllrestaurantsNames()
{

    for (var i = 0; i < this.restaurantList.length; i++) {
        console.log(this.restaurantList[i].Name);
    }
}

    filterRestaurantByCity(city){

        for (var i=0;i<this.restaurantList.length;i++){
            if (this.restaurantList[i].City == city){
                console.log(this.restaurantList[i].City)
            }
        }
    }
}    

let resMan = new restaurantManager()
console.log('---------------')
console.log('Restaurant Names:')
resMan.printAllrestaurantsNames()
console.log('----------------')
console.log('Filtered By City:')
resMan.filterRestaurantByCity('Delhi')
