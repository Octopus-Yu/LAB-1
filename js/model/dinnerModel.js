//DinnerModel Object constructor
//DinnerModel.APIKEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

class DinnerModel {

    constructor() {
        this.dishes = dishesConst;
        this.urlRoot = "";
        this.customers = customersConst;
        this.menu = menuConst;
        this._observers = [];
        this.dishTypes = dishTypes;




    }

    setNumberOfGuests(num) {
        //TODO Lab 1
        this.customers[0].customernum = num;
        this.notifyObservers("sidebar");
    }
    //
    getNumberOfGuests() {
        //TODO Lab 1
        return this.customers[0].customernum;
    }

    //Returns the dish that is on the menu for selected type 
    getSelectedDish(type) {
    }

    //Returns all the dishes on the menu.
    getFullMenu() {
        return this.menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients() {
    }




    getDishPrice(id) {
        var dsh = this.getMenuDish(id);
        console.log(dsh);

        var totalDishPrice = 0;
        var num = 0;
        //console.log(dsh.ingredients);
        for (let ingredient of dsh.ingredients) {

            totalDishPrice += 1;
        }

        num = this.customers[0].customernum;
        return totalDishPrice * num;

    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    getTotalMenuPrice() {
        //TODO Lab 1
        var totalPrice = 0;
        for (let dsh of this.menu) {

            totalPrice += this.getDishPrice(dsh.id)

        }
        return totalPrice;
    }


    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    addDishToMenu(id) {
        this.menu.push(this.getDish(id));
        this.notifyObservers("sidebar");

    }

    //Removes dish from menu
    removeDishFromMenu(id) {
    }


    getAllDishes(type, filter) {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=12&type=" + type + "&query=" + filter, {
                headers: {
                    'X-Mashape-Key': DinnerModel.APIKEY
                }
            }).then(response => response.json())
            .then(data => {

                this.dishes = data.results;
                console.log(this.dishes);

                this.urlRoot = data.baseUri;
                console.log(this.urlRoot);
            })
            .then(() => {
                console.log("notifySuccess");


            })
            .then(() => {
                this.notifyObservers();

            })
            .catch(() => {
                console.log("error to get the web data")
            });


    }



    dishesFilter(filter) {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=12&query=" + filter, {
                headers: {
                    'X-Mashape-Key': DinnerModel.APIKEY
                }
            }).then(response => response.json())
            .then(data => {
                this.dishes = data.results;
                this.urlRoot = data.baseUri;
            })
            .then(() => this.notifyObservers())
            .catch(() => {
                console.log("error to get the web data")
            });

    }
    //   

    setSearchDefaltDishes() {

        return fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=20', {
                headers: {
                    'X-Mashape-Key': DinnerModel.APIKEY
                }
            }).then(response => response.json())
            .then(data => {
                this.dishes = data.results;
                this.urlRoot = data.baseUri;
            })
            .catch(() => {
                console.log("error to get the web data")
            }).then(() => this.notifyObservers());

    }


    getSelectedInformation(id) {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information", {
                headers: {
                    'X-Mashape-Key': DinnerModel.APIKEY
                }
            }).then(response => response.json())
            .then(data => {
                this.getDish(id).ingredients = data.extendedIngredients;
                this.getDish(id).description = data.instructions;
            })
            .then(() => this.notifyObservers())
            .catch(() => {
                console.log("error to get the web data")
            });

    }

    //function that returns a dish of specific ID
    getDish(id) {
        for (let dsh of this.dishes) {
            if (dsh.id == id) {
                return dsh;
            }
        }
        return undefined;
    }
    getMenuDish(id) {

        for (let dsh of this.menu) {
            if (dsh.id == id) {
                return dsh;

            }
        }
        return undefined;
    }


    getDishid(dshName) {
        for (let dsh of this.dishes) {
            if (dsh.title == dshName) {
                return dsh.id;
            }
        }
        return undefined;
    }




    /*****************************************  
    	      Observable implementation    
    	*****************************************/



    addObserver(observer) {
        this._observers.push(observer);
    }

    notifyObservers(arg) {
        console.log("notifymarker")
        for (var i = 0; i < this._observers.length; i++) {
            this._observers[i].update(arg);

        }
    }

}
DinnerModel.APIKEY = API_KEY;







// the dishes constant contains an array of all the 
// dishes in the database. Each dish has id, name, type,
// image (name of the image file), description and
// array of ingredients. Each ingredient has name, 
// quantity (a number), price (a number) and unit (string 
// defining the unit i.e. "g", "slices", "ml". Unit
// can sometimes be empty like in the example of eggs where
// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
const dishesConst = [

    {
        'id': 0,
        'title': 'French toast',
        'type': 'starter',
        'image': 'toast.jpg',
        'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
        'ingredients': [{
            'name': 'eggs',
            'quantity': 0.5,
            'unit': '',
            'price': 10
             }, {
            'name': 'milk',
            'quantity': 30,
            'unit': 'ml',
            'price': 6
             }, {
            'name': 'brown sugar',
            'quantity': 7,
            'unit': 'g',
            'price': 1
             }, {
            'name': 'ground nutmeg',
            'quantity': 0.5,
            'unit': 'g',
            'price': 12
             }, {
            'name': 'white bread',
            'quantity': 2,
            'unit': 'slices',
            'price': 2
             }]
         }
	];

//The type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.
const dishTypes = ["All", "main course", "side dish", "dessert", "appetizer", "salad", "bread",
    "breakfast", "soup", "beverage", "sauce", "drink"];


const customersConst = [{
    'customernum': 0
 }];
const menuConst = [

];
