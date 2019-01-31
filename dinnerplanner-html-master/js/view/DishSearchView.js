 class DishSearchView {

     constructor(container, model) {
         // add observer
         model.addObserver(this);

         this.container = container;
         this.selectMenu = container.querySelector("#selectmenu");
         this.dishSearch = container.querySelector("#dishSearch");

         this.currentDishes = model.dishes;



         for (let j = 0; j < this.currentDishes.length; j++) {
             // alert(this.currentDishes[j].id);
             var dishitemView = new DishitemView(this.currentDishes[j].id, model);
             var div = dishitemView.div;
             this.dishSearch.appendChild(div);


         }





     }









 }
