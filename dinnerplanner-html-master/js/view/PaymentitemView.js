var PaymentitemView = function (dshID, model, container, app) {

    var dsh = model.getDish(dshID);

    var img = dsh.image;
    var dshName = dsh.name;
    this.app = app;

    this.div = document.createElement('DIV');
    var div1 = this.div.appendChild(document.createElement('DIV'));
    div1.className = "card bg-default";
    var divBody = div1.appendChild(document.createElement('DIV'));
    divBody.className = "card-body";
    var divText = divBody.appendChild(document.createElement("P"));
    divText.className = "card-text text-center";
    var divImg = divText.appendChild(document.createElement('IMG'));
    divImg.src = "images/" + img;
    var divFooter = div1.appendChild(document.createElement('DIV'));
    divFooter.className = "card-footer text-center";
    divFooter.innerHTML = dshName;



}
