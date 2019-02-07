class WelcomePageViewController {
    constructor(view, model, app) {

        // var generalStateController = new GeneralStateController(view, model);

        this.creatNewDinnerBtn = view.querySelector("#CreatNewDinner");

        this.creatNewDinnerBtn.addEventListener("click",
            () => {
                app.creatNewDinner();
                model.setSearchDefaltDishes();
            });

    }
}
