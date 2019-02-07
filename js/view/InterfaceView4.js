var InterfaceView4 = function (container, model) {


    //var numberOfGuests = container.find("#numberOfGuests");
    this.tablemenu = container.find("#tablemenu");
    this.customernum = container.find("#dropdownMenuButton")
    this.dishmenu = container.find("#dishmenu");
    this.totalMenuPrice = container.find("#totalprice");
    var sidebarView = new SidebarView(this.dishmenu[0], model);


    //use side bar view
    this.totalMenuPrice.text("SEK: " + sidebarView.price + " ");
    this.customernum.text(sidebarView.people);




    for (let dsh of model.menu) {
        for (let ingre of dsh.ingredients) {
            var tr = tablemenu.insertRow();
            var td1 = tr.insertCell();
            td1.innerHTML = (ingre.quantity * model.customers[0].customernum).toFixed(1) + ' ' + ingre.unit;
            var td2 = tr.insertCell();
            td2.innerHTML = ingre.name;
            var td3 = tr.insertCell();
            td3.innerHTML = "SEK";
            var td4 = tr.insertCell();
            td4.innerHTML = Math.trunc(ingre.price * model.customers[0].customernum);
        }
    }
    var tr = tablemenu.insertRow();
    var td1 = tr.insertCell();
    td1.innerHTML = "TOTAL";
    var td2 = tr.insertCell();
    var td3 = tr.insertCell();
    td3.innerHTML = "SEK";
    var td4 = tr.insertCell();
    td4.innerHTML = model.getTotalMenuPrice();
    var colums = tablemenu.rows[0].cells.length;
    alert(colums);
    var price = 0;
    price = model.getTotalMenuPrice();
    //alert(price);
    this.totalMenuPrice.text("SEK: " + price + " ");
    //alert(model.customers[0].customernum);




    //    var people = model.customers[0].customernum;
    //    this.customernum.text(people);

}
