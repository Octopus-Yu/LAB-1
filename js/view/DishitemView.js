var DishitemView = function (dshID, model, container, app) {

    var dsh = model.getDish(dshID);

    var img = model.urlRoot + dsh.image;
    if (dshID == 0) {
        var img = "images/" + dsh.image;
    }
    var dshName = dsh.title;
    this.app = app;

    var dishitemViewController = new DishitemViewController(container, model, app);

    this.div = document.createElement('DIV');
    var div1 = this.div.appendChild(document.createElement('DIV'));
    div1.className = "card mx-2";
    div1.style = "width: 18rem;";
    var dshImage = div1.appendChild(document.createElement('IMG'));
    dshImage.src = img;
    dshImage.className = "card-img-top";
    var cardBody = div1.appendChild(document.createElement('DIV'));
    cardBody.className = "card-body";
    var dshCardName = cardBody.appendChild(document.createElement('H4'));
    dshCardName.className = "card-text text-center";
    dshCardName.innerHTML = dshName;

    this.div.addEventListener("click", () => dishitemViewController.clickEvent(dsh, container, model));


}
