 class PaymentView {

     constructor(container, model, app) {
         model.addObserver(this);
         this.container = container;

         this.app = app;
         this.container = container;
         this.model = model;
         this.paymenDetail = container.querySelector("#paymentDetail");
         this.total = container.querySelector("#paymentViewTotal");
         this.cuntomerNumber = container.querySelector("#paymentNumber");









     }

     update(model) {



         while (this.paymenDetail.firstChild) {

             this.paymenDetail.removeChild(this.paymenDetail.firstChild);

         }




         var menu = model.getFullMenu();

         //alert("new" + this.currentDishes.length);
         for (let dsh of menu) {
             var dshID = dsh.id;

             var paymentitemView = new PaymentitemView(dshID, this.model, this.container, this.app);

             var div = paymentitemView.div;
             this.paymenDetail.appendChild(div);


         }
         //alert(this.total.id);
         //alert(model.getTotalMenuPrice());
         this.total.innerHTML = "Total: " + model.getTotalMenuPrice() + " SEK";
         this.cuntomerNumber.innerHTML = "My Dinner : " + model.getNumberOfGuests() + " People";
     }









 }
