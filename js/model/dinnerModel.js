//DinnerModel Object constructor
//DinnerModel.APIKEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

class DinnerModel {

    constructor() {
        this.dishes = dishesConst;
        this.urlRoot = "";
        //        this.getinitDishes();
        //        this.getinitDishes().then(data => {
        //            //console.log(data.results);
        //            this.dishes = data.results;
        //            console.log(this.dishes);
        //            this.urlRoot = data.baseUri;
        //        }); // to be replaced in lab 3

        //TODO Lab 1 implement the data structure that will hold number of guest
        // and selected dishes for the dinner menu
        //console.log(this.dishes);
        this.customers = customersConst;
        this.menu = menuConst;
        this._observers = [];
        //this.dishSearchResult = dishesConst;
        this.dishTypes = dishTypes;



    }

    //    setDishSearchResult(dshType) {
    //        if (dshType = "All") {
    //            this.dishSearchResult = this.getInitDishes();
    //        } else {
    //            this.dishSearchResult = this.getAllDishes(dshType);
    //            alert(this.dishSearchResult)
    //        }
    //
    //        this.notifyObservers();
    //
    //    }

    //    getDishSearchResult(dshType) {
    //
    //        return this.dishSearchResult;
    //
    //    }



    setNumberOfGuests(num) {
        //TODO Lab 1
        this.customers[0].customernum = num;
        this.notifyObservers();
    }
    //
    getNumberOfGuests() {
        //TODO Lab 1
        return this.customers[0].customernum;
    }

    //Returns the dish that is on the menu for selected type 
    getSelectedDish(type) {
        //TODO Lab 1
        //        return this.menu.getAllDishes(type);
    }

    //Returns all the dishes on the menu.
    getFullMenu() {
        return this.menu;






    }

    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients() {
        //            //TODO Lab 1
        //           var i = this.menu.length;
        //           while (i– - ) {
        //                fn(this.menu[i].ingredients);
        //            }
    }



    getDishPrice(id) {
        var dsh = this.getDish(id);

        var totalDishPrice = 0;
        var num = 0;
        for (let ingredient of dsh.ingredients) {

            totalDishPrice += ingredient.price;

        }

        num = this.customers[0].customernum;
        //alert(num);
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
        //alert("model" + this.getDish(id));
        this.notifyObservers();

    }

    //Removes dish from menu
    removeDishFromMenu(id) {
        //TODO Lab 1
    }


    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    //    getAllDishes(type, filter) {
    //        return this.dishes.filter(function (dish) {
    //            let found = true;
    //            if (filter) {
    //                found = false;
    //                dish.ingredients.forEach(function (ingredient) {
    //                    if (ingredient.name.indexOf(filter) != -1) {
    //                        found = true;
    //                    }
    //                });
    //                if (dish.name.indexOf(filter) != -1) {
    //                    found = true;
    //                }
    //            }
    //            return dish.type == type && found;
    //
    //        });
    //    }

    getAllDishes(type, filter) {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=12&type=" + type + "&query=" + filter, {
                headers: {
                    'X-Mashape-Key': DinnerModel.APIKEY
                }
            }).then(response => response.json())
            .then(data => {
                //console.log(data.results);
                this.dishes = data.results;
                //console.log(this.dishes);
                this.urlRoot = data.baseUri;
            })
            .then(() => this.notifyObservers())
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
                //console.log(data.results);
                this.dishes = data.results;
                //console.log(this.dishes);
                this.urlRoot = data.baseUri;
            })
            .then(() => this.notifyObservers())
            .catch(() => {
                console.log("error to get the web data")
            });

    }
    //    dishesFilter(filter) {
    //        return this.dishes.filter(function (dish) {
    //            let found = true;
    //            if (filter) {
    //                found = false;
    //                dish.ingredients.forEach(function (ingredient) {
    //                    if (ingredient.name.indexOf(filter) != -1) {
    //                        found = true;
    //                    }
    //                });
    //                if (dish.name.indexOf(filter) != -1) {
    //                    found = true;
    //                }
    //            }
    //            return found;
    //
    //        });
    //
    //
    //    }

    //    getAllDishes = function (type, filter) {
    //        return fetch(SOME_API_URL, {
    //                headers: {
    //                    'X-Mashape-Key': API_KEY
    //                }
    //            }).then(response => response.json())
    //            .then(data => data.results)
    //    }

    setSearchDefaltDishes() {

        return fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=20', {
                headers: {
                    'X-Mashape-Key': DinnerModel.APIKEY
                }
            }).then(response => response.json())
            .then(data => {
                //console.log(data.results);
                this.dishes = data.results;
                //console.log(this.dishes);
                this.urlRoot = data.baseUri;
            })
            .catch(() => {
                console.log("error to get the web data")
            }).then(() => this.notifyObservers());





    }

    //        getAllDishes(type, filter) {
    //        return this.dishes.filter(function (dish) {
    //            let found = true;
    //            if (filter) {
    //                found = false;
    //                dish.ingredients.forEach(function (ingredient) {
    //                    if (ingredient.name.indexOf(filter) != -1) {
    //                        found = true;
    //                    }
    //                });
    //                if (dish.name.indexOf(filter) != -1) {
    //                    found = true;
    //                }
    //            }
    //            return dish.type == type && found;
    //
    //        });
    //    }

    //    getAllDishes(type) {
    //        var searchResult = [];
    //
    //        for (let dsh of this.dishes) {
    //            if (dsh.type = type)
    //                searchResult.push(dsh);
    //        }
    //        return searchResult;
    //
    //
    //
    //    }


    //    getInitDishes() {
    //        return dishesConst;
    //    }



    //function that returns a dish of specific ID
    getDish(id) {
        //console.log(this.dishes[1].title);
        for (let dsh of this.dishes) {
            //console.log("LOOP");

            if (dsh.id == id) {
                return dsh;

            }
        }

        //        this.dishes.forEach((x) => {
        //            if (x.id == id)
        //                return x;
        //        })

        return undefined;
    }


    getDishid(dshName) {
        for (let dsh of this.dishes) {
            if (dsh.name == dshName) {
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
        var arg = new DinnerModel();
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
        'image': 'toast.jpg'
    }
	];

//The type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.
const dishTypes = ["All", "main course", "side dish", "dessert", "appetizer", "salad", "bread",
    "breakfast", "soup", "beverage", "sauce", "drink"];


const customersConst = [{
    'customernum': 0
 }];
const menuConst = [

//    {
    //        'id': 1,
    //        'name': 'French toast',
    //        'type': 'starter',
    //        'image': 'toast.jpg',
    //        'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
    //        'ingredients': [{
    //            'name': 'eggs',
    //            'quantity': 0.5,
    //            'unit': '',
    //            'price': 10
    //			}, {
    //            'name': 'milk',
    //            'quantity': 30,
    //            'unit': 'ml',
    //            'price': 6
    //			}, {
    //            'name': 'brown sugar',
    //            'quantity': 7,
    //            'unit': 'g',
    //            'price': 1
    //			}, {
    //            'name': 'ground nutmeg',
    //            'quantity': 0.5,
    //            'unit': 'g',
    //            'price': 12
    //			}, {
    //            'name': 'white bread',
    //            'quantity': 2,
    //            'unit': 'slices',
    //            'price': 2
    //			}]
    //		},
    //    {
    //        'id': 2,
    //        'name': 'Sourdough Starter',
    //        'type': 'starter',
    //        'image': 'sourdough.jpg',
    //        'description': "Here is how you make it... Lore ipsum...",
    //        'ingredients': [{
    //            'name': 'active dry yeast',
    //            'quantity': 0.5,
    //            'unit': 'g',
    //            'price': 4
    //			}, {
    //            'name': 'warm water',
    //            'quantity': 30,
    //            'unit': 'ml',
    //            'price': 0
    //			}, {
    //            'name': 'all-purpose flour',
    //            'quantity': 15,
    //            'unit': 'g',
    //            'price': 2
    //			}]
    //		}, {
    //        'id': 100,
    //        'name': 'Meat balls',
    //        'type': 'main dish',
    //        'image': 'meatballs.jpg',
    //        'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
    //        'ingredients': [{
    //            'name': 'extra lean ground beef',
    //            'quantity': 115,
    //            'unit': 'g',
    //            'price': 20
    //			}, {
    //            'name': 'sea salt',
    //            'quantity': 0.7,
    //            'unit': 'g',
    //            'price': 3
    //			}, {
    //            'name': 'small onion, diced',
    //            'quantity': 0.25,
    //            'unit': '',
    //            'price': 2
    //			}, {
    //            'name': 'garlic salt',
    //            'quantity': 0.7,
    //            'unit': 'g',
    //            'price': 2
    //			}, {
    //            'name': 'Italian seasoning',
    //            'quantity': 0.6,
    //            'unit': 'g',
    //            'price': 3
    //			}, {
    //            'name': 'dried oregano',
    //            'quantity': 0.3,
    //            'unit': 'g',
    //            'price': 3
    //			}, {
    //            'name': 'crushed red pepper flakes',
    //            'quantity': 0.6,
    //            'unit': 'g',
    //            'price': 3
    //			}, {
    //            'name': 'Worcestershire sauce',
    //            'quantity': 6,
    //            'unit': 'ml',
    //            'price': 7
    //			}, {
    //            'name': 'milk',
    //            'quantity': 20,
    //            'unit': 'ml',
    //            'price': 4
    //			}, {
    //            'name': 'grated Parmesan cheese',
    //            'quantity': 5,
    //            'unit': 'g',
    //            'price': 8
    //			}, {
    //            'name': 'seasoned bread crumbs',
    //            'quantity': 15,
    //            'unit': 'g',
    //            'price': 4
    //			}]
    //}


];
