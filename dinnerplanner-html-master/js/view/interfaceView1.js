var InterfaceView1 = function (container, model) {


    // var numberOfGuests = container.find("#numberOfGuests");
    this.customernum = container.find("#dropdownMenuButton")



    var people = 0;
    people = model.customers[0].customernum;
    alert(people);
    this.customernum.text(people);
    // numberOfGuests.text("3");

    //    numberOfGuests.html("3");
    //    var test = container.find("#test");
    //    test.html("testtest");
}
