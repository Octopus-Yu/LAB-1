window.onload = function () {
    //We instantiate our model
    var model = new DinnerModel();
    //model.setinitDishes();


    //    setTimeout(function () {
    //        console.log(model.dishes);
    //    }, 4000)

    //console.log(model.dishes);


    var dsh = model.getDish("0");
    //alert(dsh);
    //    console.log("dshname:" +
    //        dsh);
    var dinnerPlannerView = document.getElementById("DinnerPlannerView");
    var sideBarView = new SideBarView(dinnerPlannerView, model);
    this.dishSearchView = new DishSearchView(dinnerPlannerView, model, this);
    this.dishDetailView = new DishDetailView(dsh, dinnerPlannerView, model, this);
    var paymentView = new PaymentView(dinnerPlannerView, model, this);
    var recipeView = new RecipeView(dinnerPlannerView, model, this);

    var wellcomePageViewController = new WelcomePageViewController(dinnerPlannerView, model, this);
    var sideBarViewController = new SideBarViewController(dinnerPlannerView, model, this);
    var dishSearchViewController = new DishSearchViewController(dinnerPlannerView, model, this);
    var dishDetailViewController = new DishDetailViewController(dinnerPlannerView, model, this);
    var paymentViewController = new PaymentViewController(dinnerPlannerView, model, this);
    var recipeViewController = new RecipeViewController(dinnerPlannerView, model, this);


    hideAllViews = () => {

        var welcomePageView = dinnerPlannerView.querySelector("#WelcomePageView");
        welcomePageView.style.display = "none";

        var dishSearchView = dinnerPlannerView.querySelector("#DishSearchView");
        dishSearchView.style.display = "none";

        var dishDetailView = dinnerPlannerView.querySelector("#DishDetailView");
        dishDetailView.style.display = "none";

        var sideBarView = dinnerPlannerView.querySelector("#SideBarView");
        sideBarView.style.display = "none";
        var paymentView = dinnerPlannerView.querySelector("#paymentPage");
        paymentView.style.display = "none";
        var recipeView = dinnerPlannerView.querySelector("#recipeView");
        recipeView.style.display = "none";
    }


    showSideBarView = () => {
        var sideBarView = dinnerPlannerView.querySelector("#SideBarView");
        sideBarView.style.display = "";
    }

    showDishSearchView = () => {
        var dishSearchView = dinnerPlannerView.querySelector("#DishSearchView");
        dishSearchView.style.display = "";
    }

    showDishDetailView = () => {
        var dishDetailView = dinnerPlannerView.querySelector("#DishDetailView");
        dishDetailView.style.display = "";
    }

    this.creatNewDinner = () => {

        hideAllViews();
        showSideBarView();
        showDishSearchView();

    }

    this.checkDishDetail = () => {

        hideAllViews();
        showSideBarView();
        showDishDetailView();

    }

    this.backtoSearch = () => {

        hideAllViews();
        showSideBarView();
        showDishSearchView();

    }

    this.confirmDinner = () => {
        hideAllViews();
        var paymentPage = dinnerPlannerView.querySelector("#paymentPage");
        paymentPage.style.display = "";

    }

    this.printRecipe = () => {
        hideAllViews();
        var recipeView = dinnerPlannerView.querySelector("#recipeView");
        recipeView.style.display = "";

    }
    this.serachDishesStart = () => {
        var searchLoading = dinnerPlannerView.querySelector("#searchLoading");
        var dishSearch = dinnerPlannerView.querySelector("#dishSearch");
        var searchnoResults = dinnerPlannerView.querySelector("#searchnoResults");

        searchLoading.style.display = "";
        dishSearch.style.display = "none";
        searchnoResults.style.display = "none";

    }
    this.serachDishesEnd = () => {
        var searchLoading = dinnerPlannerView.querySelector("#searchLoading");
        var dishSearch = dinnerPlannerView.querySelector("#dishSearch");
        var searchnoResults = dinnerPlannerView.querySelector("#searchnoResults");

        searchLoading.style.display = "none";
        dishSearch.style.display = "";
        searchnoResults.style.display = "none";


    }
    this.nothingtoShow = () => {
        var searchLoading = dinnerPlannerView.querySelector("#searchLoading");
        var dishSearch = dinnerPlannerView.querySelector("#dishSearch");
        var searchnoResults = dinnerPlannerView.querySelector("#searchnoResults");
        searchLoading.style.display = "none";
        dishSearch.style.display = "none";
        searchnoResults.style.display = "";
    }


    this.detailDishesStart = () => {
        var detailLoading = dinnerPlannerView.querySelector("#detailLoading");
        var dishDetail = dinnerPlannerView.querySelector("#dishDetail");

        detailLoading.style.display = "";
        dishDetail.style.display = "none";

    }
    this.detailDishesEnd = () => {
        var detailLoading = dinnerPlannerView.querySelector("#detailLoading");
        var dishDetail = dinnerPlannerView.querySelector("#dishDetail");

        detailLoading.style.display = "none";
        dishDetail.style.display = "";
    }
}
