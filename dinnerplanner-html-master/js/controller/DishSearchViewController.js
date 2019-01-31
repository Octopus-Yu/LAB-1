class DishSearchViewController {
    constructor(view, model) {
        var generalStateController = new GeneralStateController(view, model);
        this.selectMenu = view.querySelector("#selectMenu");
        this.model = model;
        this.searchBtn = view.querySelector("#searchBtn");
        this.dishSearch = view.querySelector("#dishSearch");
        this.currentDishes = model.dishes;
        //alert("##" + this.currentDishes[0].type);
        this.searchBtn.addEventListener("click",
            () => this.searchUpdate(this.selectMenu.value));



    }



    searchUpdate(dshType) {

        for (let i = 0; i <= this.currentDishes.length; i++) {

            if (this.dishSearch.firstChild) {

                this.dishSearch.removeChild(this.dishSearch.firstChild);

            }
        }
        this.currentDishes = [];


        if (dshType == "All") {
            this.currentDishes = this.model.dishes;
            //alert("alllll")
        } else {
            this.currentDishes = this.model.getAllDishes(dshType);
        }

        alert("new" + this.currentDishes.length);
        for (let j = 0; j < this.currentDishes.length; j++) {

            var dishitemView = new DishitemView(this.currentDishes[j].id, this.model);
            var div = dishitemView.div;
            this.dishSearch.appendChild(div);


        }

    }



}
