//TÄRKEÄ JUTTU "muuttumattomuudesta"
//Exploring JavaScript (ES 2025), A Book For Programmers, sivu 97.

//const
//vaikka const on muuttumaton esim. objektin (tai arrayn) tietoja voi muuttaa
const jokuObjekti = {
    nimi:"mauri"
}
console.log(jokuObjekti);

//muutetaan nimeä
jokuObjekti.nimi = "tauno";
console.log(jokuObjekti);

//jokuobjektiin voi jopa lisätä uusia propertyjä
jokuObjekti['ika'] = 10;
//tai jokuObjekti.ika = 10;
console.log(jokuObjekti);

//MUTTA jokuobjektia ei voi enää muuttaa täysin toiseen arvoon kuten numeroksi tai stringiksi
jokuObjekti = 10; //virhe:  Assignment to constant variable.
jokuObjekti = "testi";
console.log(jokuObjekti);