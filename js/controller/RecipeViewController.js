class RecipeViewController {
    constructor(view, model, app) {

        this.backEditBtn = view.querySelector("#recipeBack");

        this.backEditBtn.addEventListener("click",
            () => app.backtoSearch());



    }
}
