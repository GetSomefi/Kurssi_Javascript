//test()
const tutkittavaTeksti = "Onkohan tässä mitään järkeä tai kärkeä";     //tutkittava teksti
let hae = /ä/; //vain ensimmäinen
console.log( "1. ", hae.test(tutkittavaTeksti) );

//match()
hae = /ärkeä/g; // <- käytetään mukana g-lippua jotta saadaan kaikki osumat. Ilman tulostuu vain ensimmäinen osuma
console.log( "2. ", tutkittavaTeksti.match(hae) );

//includes()
console.log( "3. ", tutkittavaTeksti.includes("ä") );

//indexOf()
console.log( "4. ", tutkittavaTeksti.indexOf("ä") );
                                            
// Tulostaa:
// 1.  true                                 //test() palauttaa vain tiedon löytyikö. Jos merkkiä ei löytynyt saadaan arvoksi false.
// 2.  [ 'ärkeä', 'ärkeä' ]                 //match() palauttaa kaikki osumat. Jos merkkiä ei löytynyt saadaan arvoksi null.
// 3.  true                                 //includes() palauttaa vain tiedon löytyikö. Jos merkkiä ei löytynyt saadaan arvoksi false.
// 4.  9                                    //indexOf() palauttaa sijainnin mistä merkki löytyi. Jos merkkiä ei löytynyt saadaan arvoksi -1.  


/* 
Yleisimpiä säännöllisten lausekkeiden (RegEx) osia

Perusmerkit:
.: Vastaa mitä tahansa merkkiä (paitsi rivinvaihtoja).
\d: Vastaa mitä tahansa numeroa (0-9).
\w: Vastaa mitä tahansa sana-merkkiä (a-z, A-Z, 0-9, _).
\s: Vastaa mitä tahansa valkoista merkkiä (välilyönti, tabulaattori, rivinvaihto).

Määritys:
*: Vastaa edellistä merkkiä nollasta tai useammasta esiintymästä.
+: Vastaa edellistä merkkiä yhdestä tai useammasta esiintymästä.
?: Vastaa edellistä merkkiä nollasta tai yhdestä esiintymästä.
{n}: Vastaa edellistä merkkiä tarkalleen n kertaa.
{n,}: Vastaa edellistä merkkiä vähintään n kertaa.
{n,m}: Vastaa edellistä merkkiä vähintään n mutta enintään m kertaa.

Rajoittimet:
^: Merkkijonon alku.
$: Merkkijonon loppu.

Ryhmät ja vaihtoehdot:
(abc): Ryhmittelee merkit a, b ja c yhdeksi osaksi.
a|b: Vastaa joko a tai b.

Escape-merkit:
\: Käytetään erityisten merkkien, kuten pisteen tai sulkujen, tarkasteluun. Esimerkiksi \. tarkoittaa kirjaimellista pistettä.

Lähde: ChatGPT
*/