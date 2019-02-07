class DishDetailViewController {
    constructor(view, model, app) {
        this.view = view;
        this.app = app;
        this.backtoBtn = view.querySelector("#backtoSearch");
        this.model = model;
        this.addtoBtn = view.querySelector("#addtoMenu");
        this.currentDishes = model.dishes;

        this.backtoBtn.addEventListener("click",
            () => app.backtoSearch());

        this.addtoBtn.addEventListener("click",
            () => this.viewUpdate());





    }



    viewUpdate() {

        var dshName = this.view.querySelector("#dshName");
        var dishName = dshName.innerHTML;
        var dshId = this.model.getDishid(dishName);
        this.model.addDishToMenu(dshId);


    }



}
