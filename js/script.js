// richiesta KM

const Km = prompt('Quanti Km farai con il trenino?');
console.log(Km);
console.log(typeof Km);
console.log(isNaN(Km))

//richiesta età

const Eta = prompt('quanti anni hai?');
console.log(Eta);
console.log(typeof Eta);
console.log(isNaN(Eta))



// Verifica delle risposte corrette----------------

if (isNaN(Km) == true || isNaN(Eta) == true) {
    alert('Valori non validi, il programma non calcola il biglietto del trenino')
}
else {
   
    const basePrice = 0.21 * Km;
    console.log('basePrice', basePrice, typeof basePrice, isNaN(basePrice));
    let finalPrice = basePrice;
    let Discount

    if (Eta < 18) {

        const childDiscount = basePrice / 100 * 20; // sconto del 20%
        const finalPrice = basePrice - childDiscount; // Prezzo finale scontato
        console.log('childDiscount', childDiscount, typeof childDiscount, isNan(childDiscount));
        console.log('finalPrice', finalPrice, typeof finalPrice, isNan(finalPrice));
    }

    else if (Eta > 65) {
        const Discount = basePrice / 100 * 40; // sconto del 40%
        const finalPrice = basePrice - Discount; // Prezzo finale scontato
        console.log('Discount', Discount, typeof Discount, isNan(Discount));
        console.log('finalPrice', finalPrice, typeof finalPrice, isNan(finalPrice));

    }
    else {

        const finalePrice = basePrice; // prezzo finale non scontato

    }

    alert('Prezzo finale: €' + finalPrice)

}
    

//output finale