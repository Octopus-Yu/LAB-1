class PaymentViewController {
    constructor(view, model, app) {

        // var generalStateController = new GeneralStateController(view, model);

        this.backEditBtn = view.querySelector("#backEdit");

        this.backEditBtn.addEventListener("click",
            () => app.backtoSearch());

        this.printRecipeBtn = view.querySelector("#printBtn");

        this.printRecipeBtn.addEventListener("click",
            () => app.printRecipe());

    }
}
