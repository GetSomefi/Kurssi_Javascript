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

