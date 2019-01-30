var InterfaceView5 = function (container, model) {


    // var numberOfGuests = container.find("#numberOfGuests");
    this.customernum = container.find("#customernum");
    this.totalPrice = container.find("#totalPrice");



    var people = 0;
    people = model.customers[0].customernum;
    alert(people);
    alert(this.customernum.id);
    this.customernum.text("My Dinner : " + people + " People");


    this.totalPrice.text("SEK: " + model.getTotalMenuPrice());
    // numberOfGuests.text("3");

    //    numberOfGuests.html("3");
    //    var test = container.find("#test");
    //    test.html("testtest");
}
