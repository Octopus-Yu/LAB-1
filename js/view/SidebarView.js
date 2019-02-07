 class SideBarView {

     constructor(container, model) {
         model.addObserver(this);
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




     update(model) {
         //         var rowNumber = this.tablemenu.rows.length - 1;
         //         alert(rowNumber);
         //
         //         for (var i = 1; i < rowNumber; i++) {
         //             this.tablemenu.deleteRow(2);
         //         }
         while (this.tablemenu.rows.length > 1) {
             this.tablemenu.deleteRow(this.tablemenu.rows.length - 1);
             //alert(this.tablemenu.rows.length);
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

         if (this.tablemenu.rows.length > 1) {
             this.comfirmDinnerBtn.className = "btn btn-block btn-primary"
             this.comfirmDinnerBtn.disabled = false;
             //alert("true");
         } else {

             this.comfirmDinnerBtn.disabled = true;
             //alert("false");
         }

     }






 }





 //var SidebarView = function (tablemenu, model) {
 //
 //
 //     for (let dsh of model.menu) {
 //         var tr = tablemenu.insertRow();
 //         //for(var j = 0; j < 2; j++){
 //
 //         var td1 = tr.insertCell();
 //         td1.innerHTML = dsh.name;
 //
 //         var td2 = tr.insertCell();
 //         td2.innerHTML = model.getDishPrice(dsh.id);
 //
 //
 //     }
 //
 //     this.price = 0;
 //     this.price = model.getTotalMenuPrice();
 //     //alert(price);
 //
 //
 //     this.people = model.customers[0].customernum;
 //
 // }
