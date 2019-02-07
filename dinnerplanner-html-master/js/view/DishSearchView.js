 class DishSearchView {

     constructor(container, model, app) {

         this.app = app;
         this.container = container;
         this.selectMenu = container.querySelector("#selectmenu");
         this.dishSearch = container.querySelector("#dishSearch");
         this.model = model;
         this.searchLabel = container.querySelector("#searchLabel");

         this.currentDishes = model.dishes;
        


         for (let j = 0; j < this.currentDishes.length; j++) {
             // alert(this.currentDishes[j].id);
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


         if (dshType == "All") {
             this.currentDishes = this.model.dishesFilter(this.searchLabel.value);
             //alert("alllll"+this.searchLabel.value)
         } else {
             this.currentDishes = this.model.getAllDishes(dshType,this.searchLabel.value);
             //alert(dshType+"  "+this.searchLabel.value+this.currentDishes.length)
         }
         //console.log(this.currentDishes.length)

         //alert("new" + this.currentDishes.length);
         for (let j = 0; j < this.currentDishes.length; j++) {

             var dishitemView = new DishitemView(this.currentDishes[j].id, this.model, this.view, this.app);

             var div = dishitemView.div;
             this.dishSearch.appendChild(div);


         }

     }









 }
