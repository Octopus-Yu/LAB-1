 var SidebarView = function (tablemenu, model) {


     for (let dsh of model.menu) {
         var tr = tablemenu.insertRow();
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

 }
