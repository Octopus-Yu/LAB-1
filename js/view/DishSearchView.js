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

         //setting the types of the search bar


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
             // alert(this.currentDishes[j].id);
             //alert(this.currentDishes[j].image);
             var dishitemView = new DishitemView(this.currentDishes[j].id, model, container, app);

             var div = dishitemView.div;
             this.dishSearch.appendChild(div);


         }





     }

     searchUpdate(dshType) {

         for (let i = 0; i <= this.currentDishes.length; i++) {

             if (this.dishSearch.firstChild) {

                 this.dishSearch.removeChild(this.dishSearch.firstChild);

             }
         }
         this.currentDishes = [];

         //alert("###")
         //loading page
         this.app.serachDishesStart();


         if (dshType == "All") {
             this.currentDishes = this.model.dishesFilter(this.searchLabel.value);
             //alert("alllll"+this.searchLabel.value)
         } else {
             this.currentDishes = this.model.getAllDishes(dshType, this.searchLabel.value);
             //alert(dshType+"  "+this.searchLabel.value+this.currentDishes.length)
         }




         //alert("new" + this.currentDishes.length);
         //         for (let j = 0; j < this.currentDishes.length; j++) {
         //
         //             var dishitemView = new DishitemView(this.currentDishes[j].id, this.model, this.view, this.app);
         //
         //             var div = dishitemView.div;
         //             this.dishSearch.appendChild(div);
         //
         //
         //         }

     }
     //upadate
     update() {


         //alert("@@@@@")

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
