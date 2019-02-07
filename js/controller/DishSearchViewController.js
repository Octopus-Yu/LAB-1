class DishSearchViewController {
    constructor(view, model, app) {
        this.view = view;
        this.app = app;
        this.selectMenu = view.querySelector("#selectMenu");
        this.model = model;
        this.searchBtn = view.querySelector("#searchBtn");
        this.dishSearch = view.querySelector("#dishSearch");
        this.currentDishes = model.dishes;
        this.searchBtn.addEventListener("click",
            () => this.app.dishSearchView.searchUpdate(this.selectMenu.value));



    }






}
