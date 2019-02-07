class DishitemViewController {
    constructor(view, model, app) {
        this.app = app;
        this.view = view;
        this.model = model;
    }



    clickEvent(dsh, container, model) {

        this.app.checkDishDetail();
        this.app.dishDetailView.dshUpdate(dsh);





    }



}
