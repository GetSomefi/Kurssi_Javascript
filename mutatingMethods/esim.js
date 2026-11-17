/* 
Mutating methods
push() – Lisää yhden tai useamman alkion taulukon loppuun.

pop() – Poistaa taulukon viimeisen alkion.

shift() – Poistaa taulukon ensimmäisen alkion.

unshift() – Lisää yhden tai useamman alkion taulukon alkuun.

splice() – Poistaa, korvaa tai lisää alkioita mihin tahansa kohtaan taulukkoa.

sort() – Järjestää taulukon alkiot (huom: muuttaa alkuperäistä taulukkoa!).

reverse() – Kääntää taulukon alkioiden järjestyksen päälaelleen.
*/
const numbers = [4, 8, 15, 16, 23, 42];
console.log(numbers);

//lisää tieto loppuun
numbers.push(43); //mietitkö miten const numbers muuttujaan voi lisätä jotain? "Sehän piti olla muuttumaton!". Kertaa asia täältä: https://github.com/GetSomefi/Kurssi_Javascript/blob/main/muuttujat/const_immutability.js
console.log(numbers);

//poista viimeinen tieto
numbers.pop();
console.log(numbers);

//poista ensimmäinen tieto
numbers.shift();
console.log(numbers);

//lisää yksi tai useampi
numbers.unshift(3);
numbers.unshift(1,2);
console.log(numbers);

//poistaa, korvaa tai lisää tietoa tietystä kohdasta
{
//Poisto
const deleteFromPosition = 2; //0:1, 1:2, 2:3 <- poistokohta
const howMany = 1; //poistaa yhden
numbers.splice(deleteFromPosition,howMany);
console.log("Poisto", numbers);
}
{
//Korvaus
const deleteFromPosition = 2; //0:1, 1:2, 2:8 <- korvauskohta
const howMany = 1; // korvaa yhden
const add = 7; // tällä kohdassa (deleteFromPosition)
numbers.splice(deleteFromPosition,howMany,add);
console.log("Korvaus", numbers);
}
{
//Lisää
const deleteFromPosition = 2; //0:1, 1:2, 2:7 <- lisäyskohta
const howMany = 0; //ei poista yhtään
const add = 6; //vaan lisää tämän kohtaan (deleteFromPosition)
numbers.splice(deleteFromPosition,howMany,add);
console.log("Lisää", numbers); 
}

