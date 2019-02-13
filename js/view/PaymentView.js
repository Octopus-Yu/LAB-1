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

     update() {

         while (this.paymenDetail.firstChild) {

             this.paymenDetail.removeChild(this.paymenDetail.firstChild);
         }

         var menu = this.model.getFullMenu();

         for (let dsh of menu) {
             var dshID = dsh.id;

             var paymentitemView = new PaymentitemView(dshID, this.model, this.container, this.app);

             var div = paymentitemView.div;
             this.paymenDetail.appendChild(div);


         }

         this.total.innerHTML = "Total: " + this.model.getTotalMenuPrice() + " SEK";
         this.cuntomerNumber.innerHTML = "My Dinner : " + this.model.getNumberOfGuests() + " People";
     }
 }
