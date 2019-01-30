var InterfaceView2 = function (container, model) {

    this.customernum = container.find("#dropdownMenuButton");

    //    this.dishDetail = container.find("#dishDetail"); In jQuery, it returns a jQuery obeject rather than a html dom object. 

    this.dishDetail = document.getElementById("dishDetail");

    var people = 0;
    people = model.customers[0].customernum;
    this.customernum.text(people);




    for (let dsh of model.menu) {
        var dishitemView = new DishitemView(dsh.id, model);
        var div = dishitemView.div;
        this.dishDetail.appendChild(div);
        //    container.body.insertBefore(div, dishDetail);s
    }




}
