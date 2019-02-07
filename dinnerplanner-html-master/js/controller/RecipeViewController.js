class RecipeViewController {
    constructor(view, model, app) {

        // var generalStateController = new GeneralStateController(view, model);

        this.backEditBtn = view.querySelector("#recipeBack");

        this.backEditBtn.addEventListener("click",
            () => app.backtoSearch());



    }
}
