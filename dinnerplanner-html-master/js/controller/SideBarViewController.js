class SideBarViewController {
    constructor(view, model) {
        var generalStateController = new GeneralStateController(view, model);

        this.minusGuestBtn = view.querySelector("#minusGuest");
        this.plusGuestBtn = view.querySelector("#plusGuest");

        this.minusGuestBtn.addEventListener("click",
            () => model.setNumberOfGuests(model.getNumberOfGuests() - 1));

        this.plusGuestBtn.addEventListener("click",
            () => model.setNumberOfGuests(model.getNumberOfGuests() + 1));
        //alert(model.getNumberOfGuests());


    }
}
