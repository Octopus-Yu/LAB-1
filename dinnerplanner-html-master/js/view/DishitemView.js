var DishitemView = function (dshID, model) {


    var dsh = model.getDish(dshID);
    var img = dsh.image;
    var dshName = dsh.name;


    this.div = document.createElement('DIV');
    var div1 = this.div.appendChild(document.createElement('DIV'));
    div1.className = "card mx-2";
    div1.style = "width: 18rem;";
    var dshImage = div1.appendChild(document.createElement('IMG'));
    dshImage.src = "images/" + img;
    dshImage.className = "card-img-top";
    dshImage.style = "height: 100%";
    var cardBody = div1.appendChild(document.createElement('DIV'));
    cardBody.className = "card-body";
    var dshCardName = cardBody.appendChild(document.createElement('H4'));
    dshCardName.className = "card-text text-center";
    dshCardName.innerHTML = dshName;


}
