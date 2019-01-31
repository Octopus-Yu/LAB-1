 class SideBarView {

     constructor(container, model) {
         model.addObserver(this);
         this.container = container;
         this.tablemenu = container.querySelector("#tablemenu");
         this.totalMenuPrice = container.querySelector("#totalprice");
         this.customernum = container.querySelector("#people")

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




     update(model) {
         var rowNumber = this.tablemenu.rows.length - 1;
         //alert(rowNumber);

         for (var i = 1; i < rowNumber; i++) {
             this.tablemenu.deleteRow(2);
         }

         for (let dsh of model.menu) {
             var tr = this.tablemenu.insertRow();
             //for(var j = 0; j < 2; j++){

             var td1 = tr.insertCell();
             td1.innerHTML = dsh.name;

             var td2 = tr.insertCell();
             td2.innerHTML = model.getDishPrice(dsh.id);


         }

         this.price = 0;
         this.price = model.getTotalMenuPrice();
         //alert(price);


         this.people = model.customers[0].customernum;



         //alert(this.totalMenuPrice.id);
         this.totalMenuPrice.innerHTML = "SEK: " + this.price + " ";
         this.customernum.innerHTML = "People:  " + this.people;
     }






 }





