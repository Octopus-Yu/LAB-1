class InterfaceView3 {

    constructor(container, model) {
        this.container = container;
        this.model = model;


        //var numberOfGuests = container.find("#numberOfGuests");
        this.dishDetail = document.getElementById("dishDetail");
        this.tablemenu = container.find("#tablemenu");
        this.totalMenuPrice = container.find("#totalprice");
        this.customernum = container.find("#dropdownMenuButton")
        var sidebarView = new SidebarView(this.tablemenu[0], model);

        this.totalMenuPrice.text("SEK: " + sidebarView.price + " ");
        this.customernum.text(sidebarView.people);


        for (let dsh of model.menu) {
            var dishitemView = new DishitemView(dsh.id, model);
            var div = dishitemView.div;
            this.dishDetail.appendChild(div);

        }




        // For mobile view:

        this.tablemenuMobile = container.find("#tablemenuMobile");
        this.totalMenuPriceMobile = container.find("#totalpriceMobile");
        this.customernumMobile = container.find("#dropdownMenuButtonMobile")
        var sidebarViewMobile = new SidebarView(this.tablemenuMobile[0], model);

        this.totalMenuPriceMobile.text("SEK: " + sidebarView.price + " ");
        this.customernumMobile.text(sidebarView.people);





    }
}
