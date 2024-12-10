/*-----------
   ELEMENTS
------------*/

// FORM
const formElm = document.getElementById("userData");
const formUserNameElm = document.getElementById("userName");
const formKmElm = document.getElementById("userKm");
const formAgeElm = document.getElementById("userAge")
// TICKET
const ticketUserNameElm = document.getElementById("ticketUserName");
const ticketOfferType = document.getElementById("ticketOfferType");
const ticketCarriage = document.getElementById("ticketCarriage");
const ticketCode = document.getElementById("ticketCode");
const ticketPrice = document.getElementById("ticketPrice");


/*-----------
  FUNCTIONS
------------*/

//Funzione che calcola il prezzo del biglietto al submit, dati i valori di Km ed età
const KmPriceCalculator = (formKmElm, formAgeElm) => {
const kmCost = Number(formKmElm.value) * 0.21;
let discount = 0;
let finalPrice = kmCost;

if (formAgeElm.value == "Minorenne") {
    discount = kmCost * 0.20;
    finalPrice = kmCost - discount;
} else if (formAgeElm.value == "Over 65") {
    discount = kmCost * 0.40;
    finalPrice = kmCost - discount;
} 
return finalPrice;

}



/*-----------
  DOM EVENTS
------------*/
formElm.addEventListener("submit", function(event) {
    event.preventDefault();
    //console.log(KmPriceCalculator(formKmElm, formAgeElm));
    ticketUserNameElm.innerHTML = formUserNameElm.value;
    // ticketOfferType.innerHTML = offerType.value;
    // ticketCarriage.innerHTML = carriage.value;
    // ticketCode.innerHTML = code.value;
    // ticket.Price.innerHTML = price.value;
});

