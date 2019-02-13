var PaymentitemView = function (dshID, model, container, app) {

    var dsh = model.getMenuDish(dshID);

    var img = dsh.image;
    var dshName = dsh.title;
    this.app = app;

    this.div = document.createElement('DIV');
    var div1 = this.div.appendChild(document.createElement('DIV'));
    div1.className = "card w-75";
    var divBody = div1.appendChild(document.createElement('DIV'));
    divBody.className = "card-body";
    var divImg = divBody.appendChild(document.createElement('IMG'));
    divImg.className = "card-img-top";
    divImg.src = model.urlRoot + img;
    var divText = divBody.appendChild(document.createElement("P"));
    divText.className = "card-text text-center";

    var divFooter = div1.appendChild(document.createElement('DIV'));
    divFooter.className = "card-footer text-center";
    divFooter.innerHTML = dshName;



}
