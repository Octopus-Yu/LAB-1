class WelcomePageViewController {
    constructor(view, model) {

        var generalStateController = new GeneralStateController(view, model);

        this.creatNewDinnerBtn = view.querySelector("#CreatNewDinner");

        this.creatNewDinnerBtn.addEventListener("click",
            () => generalStateController.showDishSearchView());
        this.creatNewDinnerBtn.addEventListener("click",
            () => generalStateController.showSideBarView());

        this.creatNewDinnerBtn.addEventListener("click",
            () => generalStateController.hideWelcomePageView());
        //        view.minusButton.addEventListener("click",
        //            () => model.setNumberOfGuests(model.getNumberOfGuests() - 1));
    }
}
