//perus
let jokuEiJooArvo = true;

if(jokuEiJooArvo)
    console.log("totta");

jokuEiJooArvo = false;

if(!jokuEiJooArvo) // ! on NOT
    console.log("ei oo totta");

//esimerkki
/*  voit käyttää includes() sijaan myös:    let pattern = /ä/;
                                            tutkittavaTeksti.indexOf("ä"), 
                                            pattern.test(tutkittavaTeksti) (RegEx), 
                                            tutkittavaTeksti.match(/ä/) 
                                            includes toimii parhaiten boolean esimerkkiin,
                                            koska se palauttaa true tai false 
                                            lisää muista tavoista https://github.com/GetSomefi/Kurssi_Javascript/tree/main/haeTeksti(RegEx)*/
const tutkittavaTeksti = "Onkohan tässä mitään järkeä";     //tutkittava teksti
const sisaltaako = tutkittavaTeksti.includes("ä");          //tarkistetaan sisältääkö muuttujan teksti tietyn kirjaimen (ä)

let vastaus = "Ei sisällä";
if(sisaltaako){
    vastaus = "Sisältää";
} 
//else{ vastaus = "Ei sisällä";  } // <- tarpeeton, mutta ok
console.log("Sisältääkö: " + vastaus);

//onko olemassa
//https://exploringjs.com/js/book/ch_booleans.html#tbl:converting_to_boolean
console.log("------");
console.log("Muunto booleaniksi Boolean() funktiolla");
let muuttuja;
console.log("let muuttuja; -> " + Boolean(muuttuja)); //false

muuttuja = undefined;
console.log("muuttuja = undefined; -> " + Boolean(muuttuja)); //false

muuttuja = null;
console.log("muuttuja = null; -> " + Boolean(muuttuja)); // false

muuttuja = NaN;
console.log("muuttuja = Nan; -> " + Boolean(muuttuja)); // false

muuttuja = ""; // vain tyhjä string tuottaa falsen, muut tuottavat true
console.log("muuttuja = \"\"; -> " + Boolean(muuttuja)); //false

muuttuja = ''; // vain tyhjä string tuottaa falsen, muut tuottavat true
console.log("muuttuja = \'\'; -> " + Boolean(muuttuja)); //false

muuttuja = 'false'; //jopa "false" tai 'false' on true 🤨
console.log("muuttuja = \'false\'; -> " + Boolean(muuttuja)); // true

muuttuja = 0;
console.log("muuttuja = 0; -> " + Boolean(muuttuja)); //false

muuttuja = 1;
console.log("muuttuja = 1; -> " + Boolean(muuttuja)); // true

muuttuja = -1;
console.log("muuttuja = -1; -> " + Boolean(muuttuja)); // true

muuttuja = {}; //objekti
console.log("muuttuja = {}; -> " + Boolean(muuttuja)); // true

muuttuja = []; //array
console.log("muuttuja = []; -> " + Boolean(muuttuja)); // true

muuttuja = Symbol("jokuAvain");
console.log("muuttuja = Symbol(\"jokuAvain\"); -> " + Boolean(muuttuja)); // true


//truthiness check
//https://exploringjs.com/js/book/ch_booleans.html#truthiness-existence-checks

//Alla oleva on hyvä esimerkki jonkin asian "onko olemassa" -tarkastuksesta.
//if (obj.prop)
//jos objekti sisältää kyseisen propertyn vastauksena on true -> truthy
//jos objekti ei sisällä kyseistä propertyä vastaus on false -> falsy (eli menee else haaraan jos sellainen on)

const obj = {};
if (obj.prop !== undefined) {
    // obj has property .prop
    console.log( "prop-property on olemassa", Boolean(obj.prop) );
}else{
    console.log( "prop-propertyä ei ole olemassa", Boolean(obj.prop) );
}

//Due to undefined being falsy, we can shorten this check to:
if (obj.prop) {
    // obj has property .prop
    console.log( "prop-property on olemassa", Boolean(obj.prop) );
}else{
    console.log( "prop-propertyä ei ole olemassa", Boolean(obj.prop) );
}

//HUOM HUOM (kaataa ohjelman ilman try:tä)
//Esimerkki try catch:istä https://github.com/GetSomefi/Kurssi_Javascript/tree/main/tryCathFinally
//Alla yritetään tarkastaa sisältääkö obj2 prop-propertyn
//tämä vertailu antaa virheen ja kaataisi ohjelman, sillä let obj2; on määrittämättä (undefined).
//... ja jos jotain ei ole määritetty sen jäseniäkään ei voida tarkastella 
let obj2;
console.log( typeof obj2 ); // tulostaa undefined
try{
    if (obj2.prop) {
        // obj has property .prop
        console.log( "prop-property on olemassa", Boolean(obj2.prop) );
    }else{
        console.log( "prop-propertyä ei ole olemassa", Boolean(obj2.prop) );
    }
}catch(err){
    console.log("Virhe: ", err.message);
}

//todisteena vielä truthy versio vertailusta (scopen sisässä https://exploringjs.com/js/book/ch_variables-assignment.html#the-scope-of-a-variable)
{
    const obj = {
        prop:"kissa"
    };
    if (obj.prop !== undefined) {
        // obj has property .prop
        console.log( "prop-property on olemassa", Boolean(obj.prop) );
    }else{
        console.log( "prop-propertyä ei ole olemassa", Boolean(obj.prop) );
    }

    //Due to undefined being falsy, we can shorten this check to:
    if (obj.prop) {
        // obj has property .prop
        console.log( "prop-property on olemassa", Boolean(obj.prop) );
    }else{
        console.log( "prop-propertyä ei ole olemassa", Boolean(obj.prop) );
    }
}

//funktion parametri (onko olemassa)
//https://exploringjs.com/js/book/ch_booleans.html#use-case-was-a-parameter-provided
const jokuFunktio = (parametri) => {
    return Boolean(parametri);
}
console.log("ilman argumentteja: "+ jokuFunktio()); //ilman argumentteja
console.log("argumentin kera: " + jokuFunktio("kissa")); //argumentin kera

//in operaattori
//https://exploringjs.com/js/book/ch_objects.html#in-operator
//Varsinkin objektien kanssa työskennellessä in-operaattori voi olla kätevä
const jokuObjekti = {
    merkki:"Volvo",
    malli:"Amazon"
}

//vertailu onnistuu perinteisesti näin
if( jokuObjekti.vuosimalli ){
    console.log("Vuosimalli on " + jokuObjekti.vuosimalli);
}else{
    console.log("Vuosimalli tieto puuttuu!");
}

//tai in-operaattoria käyttämällä
if( 'vuosimalli' in jokuObjekti ){
    console.log("Vuosimalli on " + jokuObjekti.vuosimalli);
}else{
    console.log("Vuosimalli tieto puuttuu!");
}

//lisätään vielä vuosimalli objektiin ja testataan toimivaksi (eli pitäisi mennä if-haaraan)
jokuObjekti['vuosimalli'] = 1960;
//tai jokuObjekti.vuosimalli = 1960;
if( 'vuosimalli' in jokuObjekti ){
    console.log("Vuosimalli on " + jokuObjekti.vuosimalli);
}else{
    console.log("Vuosimalli tieto puuttuu!");
}
//ja jos tässä kohtaa ihmettelet miten const (constant) objektia voi muokata jälkikäteen 
//tutustu tai kertaa
//https://github.com/GetSomefi/Kurssi_Javascript/blob/main/muuttujat/const_immutability.js

//nyt varmaan ternaryOperator käy paremmin järkeen
//https://exploringjs.com/js/book/ch_booleans.html#conditional-operator
//https://github.com/GetSomefi/Kurssi_Javascript/blob/main/ternaryOperator

//Eli
// ehto ? jos : muuten
let vuosimalli = 'vuosimalli' in jokuObjekti ? jokuObjekti.vuosimalli : "Vuosimalli tieto puuttuu!";
console.log("Vuosimallin ternaryOperator testi: " + vuosimalli, jokuObjekti);

//ja jos tieto puuttuu
delete jokuObjekti.vuosimalli; //delete poistaa objektin jäsenen/ominaisuuden
vuosimalli = 'vuosimalli' in jokuObjekti ? jokuObjekti.vuosimalli : "Vuosimalli tieto puuttuu!";
console.log("Vuosimallin ternaryOperator testi: " + vuosimalli, jokuObjekti);