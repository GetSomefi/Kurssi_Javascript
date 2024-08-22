// kun javascriptin oikeastaan mitä vain dokumentaatiota seuraa tulee vastaan
// literal- käsite. String literal tarkoittaa merkkijonon kirjaimellista esitystapaa
// koodissa

//string literal on siis perustekstiä koodissa
let elukka = "Kissa";
let nimi = "Matti";

//               escape-merkki, joka mahdollistaa ' käytön '' merkkien sisällä 
//               |
let enkkua = 'Don\'t be like that';
console.log(enkkua);
enkkua = 'Don\'t be like "that"';
console.log(enkkua);
enkkua = "Don't be like that";
console.log(enkkua);
enkkua = "Ouh, like \"that\"";
console.log(enkkua);