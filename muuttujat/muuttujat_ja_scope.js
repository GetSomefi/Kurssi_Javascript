//var (arvo muutettavissa sekä sama muuttujanimi kelpaa uudelleen)
var jokinArvo = "jebou";
var jokinArvo = "moro1"; //tämä on ok
console.log(jokinArvo);

{
//let (arvo muutettavissa)
let jokinArvo = "moro2";
jokinArvo = 2; //tämä on ok

console.log(jokinArvo);

//tämä on nou nou
//let jokinArvo = "sama muuttuja uusiksi";
}

{
//const (arvo muuttumaton)
const jokinArvo = "moro3";
//jokinArvo = 2; //muuttumatonta ei voi muuttaa -> virhe

console.log(jokinArvo);

//tämä myös on nou nou
//const jokinArvo = "sama muuttuja uusiksi";
}

