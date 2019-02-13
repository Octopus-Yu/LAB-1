class PaymentViewController {
    constructor(view, model, app) {


        this.backEditBtn = view.querySelector("#backEdit");

        this.backEditBtn.addEventListener("click",
            () => app.backtoSearch());

        this.printRecipeBtn = view.querySelector("#printBtn");

        this.printRecipeBtn.addEventListener("click",
            () => app.printRecipe());

    }
}
