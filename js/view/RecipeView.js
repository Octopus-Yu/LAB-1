 class RecipeView {

     constructor(container, model, app) {
         model.addObserver(this);
         this.container = container;
         this.app = app;
         this.container = container;
         this.model = model;
         this.recipeDetail = container.querySelector("#recipeDetail");
         this.customerNumber = container.querySelector("#recipeNumber");
     }

     update() {

         while (this.recipeDetail.firstChild) {

             this.recipeDetail.removeChild(this.recipeDetail.firstChild);
         }

         var menu = this.model.getFullMenu();

         for (let dsh of menu) {
             var img = dsh.image;
             var dshName = dsh.title;


             this.div = document.createElement('DIV');
             this.div.className = "row";
             var div1 = this.div.appendChild(document.createElement('DIV'));
             div1.className = "col-md-2 text-center";
             var divImg = div1.appendChild(document.createElement('IMG'));
             divImg.className = "card-img-top";
             divImg.src = this.model.urlRoot + img;

             var div2 = this.div.appendChild(document.createElement('DIV'));
             div2.className = "col-md-5";
             var divTitle1 = div2.appendChild(document.createElement('H2'));
             divTitle1.innerHTML = dshName;

             var divDescription1 = div2.appendChild(document.createElement('P'));
             divDescription1.innerHTML = dsh.description;

             var div3 = this.div.appendChild(document.createElement('DIV'));
             div3.className = "col-md-5";
             var divTitle2 = div3.appendChild(document.createElement('H4'));
             divTitle2.innerHTML = "PREPARATION";

             var divDescription2 = div3.appendChild(document.createElement('P'));
             divDescription2.innerHTML = dsh.description;

             this.recipeDetail.appendChild(this.div);
         }

         this.customerNumber.innerHTML = "My Dinner : " + this.model.getNumberOfGuests() + " People";
     }
 }
