const arvo1 = undefined;
const arvo2 = null;
const arvo3 = true;
const arvo4 = 12;
const arvo5 = 2.12344;
const arvo6 = 123n; //bigint
const arvo7 = "moro";

const arvo8 = {}; //object

const arvo9 = Symbol("objektinYksiAvain"); //symbol (aina uniikki)

const arvo10 = () => {} //funktio

arvo8[arvo9] = "kissa";
arvo8["muut"] = [arvo1,arvo2,arvo3,arvo4,arvo5,arvo6,arvo7,arvo8,arvo9,arvo10] //array (pohimmiltaan myös objekti)

console.log(arvo8);

console.log(arvo8[arvo9]);
//console.log(arvo8["objektinYksiAvain"]); // ei toimi

//tyypin testaaminen (typeof)
console.log("-------------");
for (let index = 0; index < arvo8["muut"].length; index++) {
    console.log(typeof arvo8["muut"][index]);
}