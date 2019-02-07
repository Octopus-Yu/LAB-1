class DishDetailView {

    constructor(dsh, container, model, app) {
        model.addObserver(this);
        this.model = model;

        var dishDetailView = container.querySelector("#DishDetailView");
        this.dshName = dishDetailView.querySelector("#dshName");
        this.dshDescription = dishDetailView.querySelector("#dshDescription");
        this.dshImage = dishDetailView.querySelector("#dshImage");
        this.tablemenu = container.querySelector("#ingreTable");
        this.price = 0;
        this.ingreNumber = container.querySelector("#ingreNumber");
        this.dsh = dsh;


        this.dshName.innerHTML = dsh.title;
        // alert(dshName);
        this.dshDescription.innerHTML = dsh.description;
        this.dshImage.src = "images/" + dsh.image;

        this.ingreNumber.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";

        while (this.tablemenu.rows.length > 0) {
            this.tablemenu.deleteRow(this.tablemenu.rows.length - 1);


        }



        for (let ingre of this.dsh.ingredients) {
            var tr = this.tablemenu.insertRow();
            var td1 = tr.insertCell();
            td1.innerHTML = (ingre.quantity * model.customers[0].customernum).toFixed(1) + ' ' + ingre.unit;
            var td2 = tr.insertCell();
            td2.innerHTML = ingre.name;
            var td3 = tr.insertCell();
            td3.innerHTML = "SEK";
            var td4 = tr.insertCell();
            var ingrePrice = 0;
            ingrePrice = Math.trunc(ingre.price * model.customers[0].customernum);
            td4.innerHTML = ingrePrice;
            this.price += ingrePrice;

        }

        var tr = this.tablemenu.insertRow();
        var td1 = tr.insertCell();
        td1.innerHTML = "TOTAL";
        var td2 = tr.insertCell();
        var td3 = tr.insertCell();
        td3.innerHTML = "SEK";
        var td4 = tr.insertCell();
        td4.innerHTML = this.price;



    }

    dshUpdate(dsh) {
        this.dsh = dsh;
        this.price = 0;

        this.dshName.innerHTML = dsh.name;
        // alert(dshName);
        this.dshDescription.innerHTML = dsh.description;
        this.dshImage.src = "images/" + dsh.image;

        this.ingreNumber.innerHTML = "INGREDIENTS FOR " + this.model.getNumberOfGuests() + " PEOPLE";

        while (this.tablemenu.rows.length > 0) {
            this.tablemenu.deleteRow(this.tablemenu.rows.length - 1);


        }



        for (let ingre of this.dsh.ingredients) {
            var tr = this.tablemenu.insertRow();
            var td1 = tr.insertCell();
            td1.innerHTML = (ingre.quantity * this.model.customers[0].customernum).toFixed(1) + ' ' + ingre.unit;
            var td2 = tr.insertCell();
            td2.innerHTML = ingre.name;
            var td3 = tr.insertCell();
            td3.innerHTML = "SEK";
            var td4 = tr.insertCell();
            var ingrePrice = 0;
            ingrePrice = Math.trunc(ingre.price * this.model.customers[0].customernum);
            td4.innerHTML = ingrePrice;
            this.price += ingrePrice;

        }

        var tr = this.tablemenu.insertRow();
        var td1 = tr.insertCell();
        td1.innerHTML = "TOTAL";
        var td2 = tr.insertCell();
        var td3 = tr.insertCell();
        td3.innerHTML = "SEK";
        var td4 = tr.insertCell();
        td4.innerHTML = this.price;



    }

    update(model) {
        this.price = 0;
        this.ingreNumber.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";

        while (this.tablemenu.rows.length > 0) {
            this.tablemenu.deleteRow(this.tablemenu.rows.length - 1);


        }



        for (let ingre of this.dsh.ingredients) {
            var tr = this.tablemenu.insertRow();
            var td1 = tr.insertCell();
            td1.innerHTML = (ingre.quantity * model.customers[0].customernum).toFixed(1) + ' ' + ingre.unit;
            var td2 = tr.insertCell();
            td2.innerHTML = ingre.name;
            var td3 = tr.insertCell();
            td3.innerHTML = "SEK";
            var td4 = tr.insertCell();
            var ingrePrice = 0;
            ingrePrice = Math.trunc(ingre.price * model.customers[0].customernum);
            td4.innerHTML = ingrePrice;
            this.price += ingrePrice;

        }

        var tr = this.tablemenu.insertRow();
        var td1 = tr.insertCell();
        td1.innerHTML = "TOTAL";
        var td2 = tr.insertCell();
        var td3 = tr.insertCell();
        td3.innerHTML = "SEK";
        var td4 = tr.insertCell();
        td4.innerHTML = this.price;

    }




}
