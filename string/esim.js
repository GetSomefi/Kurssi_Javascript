//https://exploringjs.com/js/book/ch_strings.html#ch_strings

/*
Tätä et varmaan tiennyt:
"Strings are primitive values in JavaScript and immutable. 
That is, string-related operations always produce new strings 
and never change existing strings."

Eli stringit ovat muuttumattomia JavaScriptissä. Ja kyllä voit tietty muuttaa 
stringin arvoa, mutta joka kerta kun arvoa muutetaan tuotetaan oikeasti uusi 
string. 🤨  
*/

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
enkkua = "Egg \\o/ Chicken";
console.log(enkkua);

//String() ja .toString()
//melkein samat ja käytössä tuskin huomaa eroa.
//String() on globaali ja .toString() on olion prototyypissä sijaitseva metodi
//.toString ei osaa muuntaa nullia tai undefined arvoja
// -> String() on inan turvallisempi (ei kaada ohjelmaa)

//toString null
let testi = null;
//testi.toString(); //<- kaataa ohjelman (pakko käyttää try catch)
try {
    testi.toString();
} catch (error) {
    console.log(error.message); //<- menee tänne
}

//String() null
console.log(String(testi)); //ei kaada ohjelmaa vaikka null

//toString undefined
testi = undefined;
try {
    testi.toString();
} catch (error) {
    console.log(error.message); //<- menee tänne
}
//String() undefined
console.log(String(testi));

////////////////

//template literal ( `` )
{
const nimi = "Piki";
const lause = `Koiran nimi on ${nimi}`;
console.log(lause);
}

//stringin pituus
const kirjaimia = "abcdefghijklmn";
console.log(kirjaimia.length); // 14

//stringin looppaus
for (let index = 0; index < kirjaimia.length; index++) {
    console.log( index+1 + ". " + kirjaimia[index] );
}

//console.log(kirjaimia[1]);

//hae tekstistä 
//Tutustu: https://github.com/GetSomefi/Kurssi_Javascript/tree/main/haeTeksti(RegEx)

//trim
//trim() poistaa välit(tab/sarkain) ja rivinvaihdot alusta ja lopusta (HUOM. ei kaikkialta)
let lause = "\t\tMinun nimeni on Bob🔧. \n\t\tOlen sen ja sen vuotias ja asun...";
console.log(lause);
/*
Tulostaa:
                Minun nimeni on Bob🔧.
                Olen sen ja sen vuotias ja asun...
*/

console.log(lause.trim());
/*
Tulostaa:
Minun nimeni on Bob🔧. 
                Olen sen ja sen vuotias ja asun...
*/

//Ei hyvä. Jos halutaan poistaa kaikki turhat "välit" käytä 
//replace() korvaa ensimmäisen esiintymän ellei g-lippua käytetä
//tai 
//replaceAll() korvaa kaikki esiintymät ja vaatii g-lipun jos monta korvattavaa

//                                      Korvattavat merkit
//                                   ____|___
//                                  |       |
let putsattuLause = lause.replace(/[\n,\t,🔧]/g,'');
console.log(putsattuLause);
//tai
putsattuLause = lause.replaceAll(/[\n,\t,🔧]/g,'');
console.log(putsattuLause);
/*
Tulostaa:
Minun nimeni on Bob. Olen sen ja sen vuotias ja asun...
*/

//jos korvataan vain tietyn merkin ensimmäinen esiintymä (ei vaadi g-lippua)
putsattuLause = lause.replace('\t','');
console.log("# Ensimmäinen tabit poistettu", putsattuLause);

//jos korvataan vain tietty merkki kaikkialla (ei vaadi g-lippua)
putsattuLause = lause.replaceAll('\t','');
console.log("# Kaikki tabit poistettu", putsattuLause);

//luo string repeatilla
console.log("Käyttäjätunnus: Mes" + '*'.repeat(4) + "90" );

//helpota käyttäjän syötteitä toLowerCase() ja toUpperCase()
const helppotunnus = "Testiriino";
const testaa = "TeSTiRiiNo";

if(helppotunnus === testaa){
    console.log("Jee, tarkalleen oikein!");
}else{
    console.log("Tunnus ei ollut tarkalleen oikein. Helpotetaan...");
    if(helppotunnus.toLowerCase() === testaa.toLowerCase()){
        console.log("Jee, nyt onnistui!");
    }else{
        console.log("Käyttäjätunnusta ei ole olemassa!");
    }
}

//lisää olemassa olevaan stringiin
let htmlDiv = "";
htmlDiv += "<div>";
    htmlDiv += "<p>Tämä on div</p>";
htmlDiv += "</div>";

//join() ( array -> string )
//yhdistä array yhdeksi merkkijonoksi
{
const lause = ["Olen", " ", "niin", " ", "innoissani", " ", "JavaScriptistä!"];
                        //'' merkki jolla "pilkut korvataan" 
console.log( lause.join('') );
}

//slice()
//"pätkäise" osa merkkijonosta
const tutkittavaTeksti = "Onkohan tässä mitään järkeä tai kärkeä";
console.log("Koko teksti: " + tutkittavaTeksti);
console.log("Lyhennetty teksti: " + tutkittavaTeksti.slice(0,tutkittavaTeksti.length-7));

//split
//tee array merkkijonosta erottimella
                                    //erotin
const osat = tutkittavaTeksti.split(" "); //palauttaa arrayn
console.log("Tutkittavan tekstin osat:");
for (const osa in osat) {   
    console.log(osat[osa]);
}

//at()
//           0123456
//           |
const abc = "takussa";
console.log( abc.at(1).toUpperCase() + abc.at(2) + abc.at(3) + " Ankka" );

// .: Vastaa mitä tahansa merkkiä (paitsi rivinvaihtoja).
// -> https://github.com/GetSomefi/Kurssi_Javascript/blob/main/haeTeksti(RegEx)/esim.js
console.log('x.x.'.replace(/./, '#')); // #.x.
console.log('x.x.'.replace(/./g, '#')); // ####