//sisältää vain perusjuttuja, ei mitään korkeaa matematiikkaa

let numero = 10;

//lisää tai poista 1
numero++; // +1
console.log(numero);
numero--; // -1
console.log(numero);

numero += 1; //+1 
console.log(numero);
numero -= 1; //-1 
console.log(numero);

//muunna
numero = "300";
numero = parseInt(numero); // 300
console.log(numero);
numero = "400";
numero = parseFloat(numero); // 400
console.log(numero);

numero = "3.1111";
numero = parseInt(numero); // 3
console.log(numero);
numero = "3.1111";
numero = parseFloat(numero); //3.1111
console.log(numero);

//sitten vielä
numero = Number("tästä ei tule numeroa vaan NaN"); // NaN (Not a Number)
console.log(numero);
numero = Number("3.11"); //3.11
console.log(numero);

//Math.
//itseisasrvo eli etäisyys nollasta (oli luku negatiivinen tai positiivinen etäisyys on aina positiivinen (+ -merkkinen) )
numero = Math.abs(-7); // Palauttaa 7
console.log(numero);

//suurin arvo
numero = Math.max(3, 7, 1); // Palauttaa 7
console.log(numero);

//pienin arvo
numero = Math.min(3, 7, 1); // Palauttaa 1
console.log(numero);

//pyöristää luvun ALASPÄIN lähimpään
numero = Math.floor(4.9); // Palauttaa 4
console.log(numero);

//pyöristää luvun YLÖSPÄIN lähimpään
numero = Math.ceil(4.1); // Palauttaa 5
console.log(numero);

//poistaa pisteen jälkeiset desimaalit
numero = Math.trunc(4.1); // Palauttaa 4
console.log(numero);

//kirjassa on oma osio luvun pyöristämiseen
//https://exploringjs.com/js/book/ch_math.html#math-rounding

//palauta satunnainen luku
numero = Math.random(); // voi palauttaa mitä vain
console.log(numero);
const min = 1;
const max = 10;
numero = Math. floor( Math. random()*max ) + min; // palauttaa luvun väliltä 1 - 10
console.log(numero);

//neliöjuuri
numero = Math.sqrt(16); // Palauttaa 4
console.log(numero);

//eksponentti
//                korotettava luku
//                | potenssi
//                | |
numero = Math.pow(3,3); //Palauttaa 27
console.log(numero);
//tai
numero = 3 ** 3;
console.log(numero);

//Pii
numero = Math.PI;
console.log(numero);

//tarkistus
console.log("Onko numero?");
Number.isInteger("öö") ? console.log("on integer") : console.log("ei");
Number.isNaN("öö") ? console.log("on NaN") : console.log("ei");
Number.isNaN( parseInt("öö") ) ? console.log("on NaN") : console.log("ei");
Number.isInteger(1) ? console.log("on integer") : console.log("ei");
Number.isInteger(1.11) ? console.log("on integer") : console.log("ei");
//floatille ei ole vastaavaa