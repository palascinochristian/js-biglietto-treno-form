/*-----------
   ELEMENTS
------------*/

// FORM
const formElm = document.getElementById("userData");
const formUserNameElm = document.getElementById("userName");
const formKmElm = document.getElementById("userKm");
const formAgeElm = document.getElementById("userAge")
// TICKET
const ticketBox = document.querySelector(".ticket")
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

//Funzione che consente di generare numeri randomici dato un range di numeri
const randomNum = (min, max) => {
    const Num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Num;
}


/*-----------
  DOM EVENTS
------------*/
formElm.addEventListener("submit", function(event) {
    event.preventDefault();  //Evito che si ricarichi la pagina e si perdano i dati
    

    // Mostro il box relativo al biglietto solo al submit
    ticketBox.classList.remove("d-none");

    // Calcolo dei valori al momento del submit
    const price = KmPriceCalculator(formKmElm, formAgeElm).toFixed(2); // Prezzo biglietto
    const carriage = randomNum(1, 10); // Numero carrozza
    const code = randomNum(9000, 10000); // Codice CP

    // Aggiornamento degli elementi nel DOM
    ticketUserNameElm.innerHTML = formUserNameElm.value; //Nome Passeggero

    // Creo una condizione per aggiornare l'elemento che verifica il valore inserito dall'utente per restituire il tipo di offerta
    if(formAgeElm.value == "Minorenne" || formAgeElm.value == "Over 65"){
        ticketOfferType.innerHTML = ` Biglietto ${formAgeElm.value}`;
    } else{
        ticketOfferType.innerHTML = "Biglietto standard";
    }
    
    ticketCarriage.innerHTML = carriage;
    ticketCode.innerHTML = code;
    ticketPrice.innerHTML = `${price} €`;
});

