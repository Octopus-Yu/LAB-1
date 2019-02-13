 class DishSearchView {

     constructor(container, model, app) {
         model.addObserver(this);

         this.app = app;
         this.container = container;
         this.selectMenu = container.querySelector("#selectMenu");
         this.dishSearch = container.querySelector("#dishSearch");
         this.model = model;
         this.searchLabel = container.querySelector("#searchLabel");
         this.dishTypes = model.dishTypes;
         this.currentDishes = model.dishes;

         while (this.selectMenu.firstChild) {
             this.selectMenu.removeChild(this.selectMenu.firstChild);
         }


         for (let type of this.dishTypes) {

             var option = document.createElement("option");
             option.value = type;
             option.text = type;
             if (type == "All") {
                 option.optSelected = true;
             }
             this.selectMenu.appendChild(option);
         }


         for (let j = 0; j < this.currentDishes.length; j++) {

             var dishitemView = new DishitemView(this.currentDishes[j].id, model, container, app);

             var div = dishitemView.div;
             this.dishSearch.appendChild(div);
         }
     }

     //Run on click event
     searchUpdate(dshType) {

         for (let i = 0; i <= this.currentDishes.length; i++) {

             if (this.dishSearch.firstChild) {

                 this.dishSearch.removeChild(this.dishSearch.firstChild);

             }
         }
         this.currentDishes = [];

         this.app.serachDishesStart();


         if (dshType == "All") {
             this.model.dishesFilter(this.searchLabel.value);
         } else {
             this.model.getAllDishes(dshType, this.searchLabel.value);
         }
     }

     //Observer upadate
     update() {

         for (let i = 0; i <= this.currentDishes.length; i++) {

             if (this.dishSearch.firstChild) {

                 this.dishSearch.removeChild(this.dishSearch.firstChild);
             }
         }

         this.currentDishes = [];
         this.currentDishes = this.model.dishes;

         for (let j = 0; j < this.currentDishes.length; j++) {

             var dishitemView = new DishitemView(this.currentDishes[j].id, this.model, this.view, this.app);

             var div = dishitemView.div;
             this.dishSearch.appendChild(div);
         }
         if (this.currentDishes.length == 0) {
             this.app.nothingtoShow();

         } else {
             this.app.serachDishesEnd();
         }

     }









 }
