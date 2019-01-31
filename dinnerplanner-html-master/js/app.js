class GeneralStateController {
    constructor(view, model) {

        this.view = view;
        this.model = model;

    }



    hideWelcomePageView() {
        var welcomePageView = this.view.querySelector("#WelcomePageView");
        welcomePageView.style.display = "none";
    }

    showSideBarView() {
        var sideBarView = this.view.querySelector("#SideBarView");
        sideBarView.style.display = "block";
    }

    showDishSearchView() {
        var dishSearchView = this.view.querySelector("#DishSearchView");
        dishSearchView.style.display = "block";
    }


}

window.onload = function () {
    //We instantiate our model
    const model = new DinnerModel();
    var dinnerPlannerView = document.getElementById("DinnerPlannerView");
    var sideBarView = new SideBarView(dinnerPlannerView, model);
    var dishSearchView = new DishSearchView(dinnerPlannerView, model);
    var wellcomePageViewController = new WelcomePageViewController(dinnerPlannerView, model);
    var sideBarViewController = new SideBarViewController(dinnerPlannerView, model);
    var dishSearchViewController = new DishSearchViewController(dinnerPlannerView, model);

}
