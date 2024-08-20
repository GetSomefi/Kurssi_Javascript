//https://exploringjs.com/js/book/ch_operators.html

//num
const a = 10;
const b = 3;
const c = 13;

let tulos_num = a + b; // -> tietty 13

console.log(tulos_num);

//"num" (numeron näköiset stringit)
const a_str = '10';
const b_str = '3';

let tulos_num_str = a_str + b_str;  // -> 103, koska 10 ja 3 eivät ole numeroita
                                    // miksi? + -operaattori toimii myös yhdistimenä. 
                                    // kun yhdistetään (concat) '10' ja '3' tulee '103'
tulos_num_str += " <- ei ole 13"; // += lisää stringin perään merkkejä ja "plussaa" lukuun (tai -= vähentää)

console.log(tulos_num_str);

//string -> num
let tulos_num_str_toInt = parseInt(a_str) + parseFloat(b_str);  // -> parset muuntavat numeron näköiset stringit
                                                                // (parseInt kokonaisluvuilla ja parseFloat desimaaliluvuille)                                                                
                                                                // numeroiksi ja tulos on taas -> 13
                                                                
console.log(tulos_num_str_toInt);

//string
const d = "tie";
const e = "toa";
const f = "tietoa";

let tulos_str = d + e;              // -> "tietoa"

//template literal
let temp_lit= `Tässä ${tulos_str}` + " ja vähän vielä lisää " + d + e + ".";

console.log(temp_lit);

//vertailu (tässä vain tärkeimmät)
const g = true; //true tai false arvoja kutsutaan booleaneiksi
const h = true;
//if( g = h ){}     // ei näin. Tämä ei ole kuitenkaan virhe. 
                    // Tässä g saa arvokseen h. Eli jos tarkoitus olisi vertailla tämä ei johda haluttuun lopputulokseen
                    // siispä tarkkana!

if( g == h ){ //jos arvot samat
    console.log("OK");
}
if( g === h ){ //jos arvot ja tyyppi samat
    console.log("OK");
}
if( g && h ){ //jos g ja h on olemassa
    console.log("OK");
}
if( g || h ){ //jos g tai h on olemassa
    console.log("OK");
}
if( g != h ){ //jos g ei ole h
    console.log("OK");
}
if( g !== h ){ //jos g ja sen tyyppi ei ole h
    console.log("OK");
}

const i = "kissa";
const j = "kissa";
if( g == h && i == j ){ //jos g on h ja a on b 
    console.log("OK 👍");
}

//sit perus luvun vertailut
if( 1 < 3 ){
    console.log("jep 1 on pienempi kuin 3");
}
if( 1 <= 3 ){
    console.log("jep 1 on pienempi tai maksimissaan yhtäsuuri kuin 3");
}
if( 3 > 1 ){
    console.log("jep 3 on suurempi kuin 3");
}
if( 3 >= 1 ){
    console.log("jep 3 on suurempi tai vähintään yhtäsuuri kuin 1");
}

//samat vertailut muuttujilla
const k = 1;
const l = 3;
//kommentit perustuvat vain kokonaislukuihin
if( k < l ){
    console.log("jep k on pienempi kuin l"); // k 2 tai vähemmän
}
if( k <= l ){
    console.log("jep k on pienempi tai maksimissaan yhtäsuuri kuin l"); // k 3 tai vähemmän
}
if( l > k ){
    console.log("jep l on suurempi kuin k"); // l 2 tai enemmän
}
if( l >= k ){
    console.log("jep l on suurempi tai vähintään yhtäsuuri kuin k"); // l 1 tai enemmän
}