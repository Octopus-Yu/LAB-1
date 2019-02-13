class WelcomePageViewController {
    constructor(view, model, app) {


        this.creatNewDinnerBtn = view.querySelector("#CreatNewDinner");

        this.creatNewDinnerBtn.addEventListener("click",
            () => {
                app.creatNewDinner();
                model.setSearchDefaltDishes();
            });

    }
}
