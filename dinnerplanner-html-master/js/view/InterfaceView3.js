var InterfaceView3 = function (container, model) {


    //var numberOfGuests = container.find("#numberOfGuests");
    this.tablemenu = container.find("#tablemenu");
    this.totalMenuPrice = container.find("#totalprice");
    this.customernum = container.find("#dropdownMenuButton")
//    for (var i = 0; i < 3; i++) {
//        var tr = tablemenu.insertRow();
//        //for(var j = 0; j < 2; j++){
//
//        var td = tr.insertCell();
//        td.innerHTML = model.menu[i].name;
//        
//        var td = tr.insertCell();
//        td.innerHTML = model.getDishPrice(i);
     for (let dsh of model.menu) {
        var tr = tablemenu.insertRow();
        //for(var j = 0; j < 2; j++){

        var td1 = tr.insertCell();
        td1.innerHTML = dsh.name;
        
        var td2 = tr.insertCell();
        td2.innerHTML = model.getDishPrice(dsh.id);


    }
    var price = 0;
    price = model.getTotalMenuPrice();
    //alert(price);
    this.totalMenuPrice.text("SEK: "+price+" ");
    alert(model.customers[0].customernum);
    var people = model.customers[0].customernum;
    this.customernum.text(people);




    //    table.rowIndex = model.menu.length;
   
    //numberOfGuests.text("test");
    //numberOfGuests.text(model.menu.getElementById[1].name);
    // numberOfGuests.text("3");

    //    numberOfGuests.html("3");
    //    var test = container.find("#test");
    //    test.html("testtest");
}
