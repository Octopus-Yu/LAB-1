class SideBarViewController {
    constructor(view, model, app) {
        this.model = model;
        this.minusGuestBtn = view.querySelector("#minusGuest");
        this.plusGuestBtn = view.querySelector("#plusGuest");
        this.comfirmDinnerBtn = view.querySelector("#comfirmDinner");

        this.minusGuestBtn.addEventListener("click",
            () => this.minusSet());

        this.plusGuestBtn.addEventListener("click",
            () => model.setNumberOfGuests(model.getNumberOfGuests() + 1));

        this.comfirmDinnerBtn.addEventListener("click",
            () => app.confirmDinner());


    }

    minusSet() {
        var currentNumber = this.model.getNumberOfGuests();

        if (currentNumber == 0) {;
        } else {
            this.model.setNumberOfGuests(currentNumber - 1);

        }

    }

}
