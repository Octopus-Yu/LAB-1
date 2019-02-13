 class SideBarView {

     constructor(container, model) {
         model.addObserver(this);
         this.model = model;
         this.container = container;
         this.tablemenu = container.querySelector("#tablemenu");
         this.totalMenuPrice = container.querySelector("#totalprice");
         this.customernum = container.querySelector("#people");
         this.comfirmDinnerBtn = container.querySelector("#comfirmDinner");


         for (let dsh of model.menu) {
             var tr = this.tablemenu.insertRow();
             var td1 = tr.insertCell();
             td1.innerHTML = dsh.name;
             var td2 = tr.insertCell();
             td2.innerHTML = model.getDishPrice(dsh.id);
         }

         this.price = 0;
         this.price = model.getTotalMenuPrice();
         this.people = model.customers[0].customernum;
         this.totalMenuPrice.innerHTML = "SEK: " + this.price + " ";
         this.customernum.innerHTML = "People:  " + this.people;
        }


     update(arg) {

         while (this.tablemenu.rows.length > 1) {
             this.tablemenu.deleteRow(this.tablemenu.rows.length - 1);
         }

         if (this.model.menu.length > 0) {
             for (let dsh of this.model.menu) {
                 var tr = this.tablemenu.insertRow();

                 var td1 = tr.insertCell();
                 td1.innerHTML = dsh.title;

                 var td2 = tr.insertCell();
                 td2.innerHTML = this.model.getDishPrice(dsh.id);
             }
         }


         this.price = 0;
         this.price = this.model.getTotalMenuPrice();

         this.people = this.model.getNumberOfGuests();

         this.totalMenuPrice.innerHTML = "SEK: " + this.price + " ";
         this.customernum.innerHTML = "People:  " + this.people;

         if (this.tablemenu.rows.length > 1) {
             this.comfirmDinnerBtn.className = "btn btn-block btn-primary"
             this.comfirmDinnerBtn.disabled = false;

         } else {

             this.comfirmDinnerBtn.disabled = true;
         }
     }
 }
