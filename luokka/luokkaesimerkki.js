//https://exploringjs.com/js/book/ch_syntax.html#classes

//luokka
class Auto{
    constructor(merkki,malli,vuosimalli){
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }
    TulostaTiedot(){
        return `Auton tiedot: ${this.merkki} ${this.malli}, ${this.vuosimalli}`; //tehdään template literal shift + ` <- merkki löytyy backspacen vierestä
    }
}

//tehdään olio
const yskiAuto = new Auto("VW", "Golf", 1994);

//tulostukset
console.log(yskiAuto);
console.log('---------');
console.log(yskiAuto.merkki, yskiAuto.malli);
console.log('---------');
console.log(yskiAuto.TulostaTiedot());

//perivä luokka
class SahkoAuto extends Auto{
    constructor(merkki,malli,vuosimalli,sahkoMoottorinTeho){
        super(merkki,malli,vuosimalli); //parentin (eli Auto) konstruktorikutsu
        this.sahkoMoottorinTeho = sahkoMoottorinTeho;
    }
    TulostaTiedot(){
        return super.TulostaTiedot() + `, Teho: ${this.sahkoMoottorinTeho}`;
    }
}

//tehdään olio
const yskiSahkoAuto = new SahkoAuto("VW", "ID-4", 2020, "200kWh");
console.log('---------');
console.log(yskiSahkoAuto);
console.log('---------');
console.log(yskiSahkoAuto.TulostaTiedot());
