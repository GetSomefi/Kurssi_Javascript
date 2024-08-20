//tämä näyttää hankalalta, mutta paloitellaan se ja ei se ollutkaan niin paha
//alkup. https://exploringjs.com/js/book/ch_undefined-null.html#nullish-coalescing-operator

//const valueToUse = receivedValue ?? defaultValue;
//The following two expressions are equivalent:

//a ?? b
//a !== undefined && a !== null ? a : b

//Käydään ensin läpi    a ?? b
//eli ?? palauttaa ensimmäisen arvon joka ei ole null tai undefined
//testataan
let jokinSyote = null;
let nimi = "Matti";

let oletusNimi = jokinSyote ?? nimi; // -> tuloksena Matti koska ensimmäinen muuttuja null (tai undefined)
console.log(oletusNimi);

//testataan versio, jossa molemmissa arvo
let jokinSyote2 = "Jorkki";
let nimi2 = "Tiina";

oletusNimi = jokinSyote2 ?? nimi2; // -> tuloksena Jorkki (ensimmäinen ei null tai undefined)
console.log(oletusNimi);

//testataan sekamelska versio
//              null        Matti   Jorkki          Matti
oletusNimi = jokinSyote ?? nimi ?? jokinSyote2 ?? nimi2;    // -> tuloksena Matti (ensimmäinen ei null tai undefined)
console.log(oletusNimi);

//ja testataan vielä versio missä neljäst vain nimi2 (Tiina) ei ole null tai undefined
jokinSyote = undefined;
nimi = null;
jokinSyote2 = null;
oletusNimi = jokinSyote ?? nimi ?? jokinSyote2 ?? nimi2;    // -> tuloksena Tiina (ensimmäinen ei null tai undefined)
console.log(oletusNimi);

//Tutustu/kertaa tätä ennen ternaryOperator-kansio
//Käydään läpi      a !== undefined && a !== null ? a : b

let a = "kissa";
let b = "koira";
let tulos = a !== undefined && a !== null ? a : b;          // 1. a !== undefined   ->  jos a ei ole tyypiltään tai arvoltaan undefined     (arvo on kissa joten tämä palauttaa true)
console.log(tulos);                                         // 2. &&                ->  JA eli edellinen ja seuraava ehto pitää täyttyä 
                                                            // 3. a !== null        ->  jos a ei ole tyypiltään tai arvoltaan null          (arvo on koira joten tämä palauttaa true)
                                                            // 4. ?                 ->  ehto/ehdot päättyy
                                                            // 5. a : b;            ->  jos ehto on totta palautetaan a ja muuten b         (1. ja 2. on true eli palauttaa muuttujan a (kissa))
                                                         