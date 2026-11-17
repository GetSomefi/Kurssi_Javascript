const numbers = [4, 8, 15, 16, 23, 42];

//perus for-loop toimii aina hyvin
console.log("FOR");
for (let i = 0; i < numbers.length; i++) {
    const oneNumber = numbers[i];
    
    let result = `Luku ${oneNumber} on pariton`; // toimittaa elsen virkaa
    if (oneNumber % 2 === 0) {
        result = `Luku ${oneNumber} on parillinen`;
    }
    console.log(result);
}

//uudempiakin tyylejä on (in ja of)
console.log("FOR OF"); // 2015 ->
for(const oneNumber of numbers){  
    let result = `Luku ${oneNumber} on pariton`; // toimittaa elsen virkaa
    if (oneNumber % 2 === 0) {
        result = `Luku ${oneNumber} on parillinen`;
    }
    console.log(result);
}

//mikä on for in?
//alla olevassa ei ole sinänsä järkeä, mutta demoaa eron
console.log("FOR IN");
for(const oneKey in numbers){
    //console.log(oneKey); //in antaa objektin avaimen tai arrayn indeksin
    let result = `Luku indeksissä ${oneKey} on ${numbers[oneKey]} ja on pariton`; // toimittaa elsen virkaa
    if (numbers[oneKey] % 2 === 0) {
        result = `Luku indeksissä ${oneKey} on ${numbers[oneKey]} ja on parillinen`;
    }
    console.log(result);
}

//objektien käsittely
const person = {
    name:"Bob",
    age:67,
    veteran:true
};

//console.log("FOR OF (object)"); // kaikki arvot (values)
// alla oleva ei toimi: person is not iterable
// for(const oneItem of person){
//     console.log(oneItem);
// }
console.log("FOR IN (object) -> keys"); // kaikki avaimet (keys)
for(const oneKey in person){
    console.log(oneKey);
}

console.log("FOR IN (object) -> values");
for(const oneKey in person){
    console.log(`Avain ${oneKey} sisältää ${person[oneKey]}`);
}

console.log("FOR IN (object) -> values");
for(const oneItem of Object.values(person)){
    console.log(`Arvo ${oneItem}`);
}

console.log("FOREACH (object) -> values");
//forEach? Ei toimi suoraan vaan vaatii myös Object.values
Object.values(person).forEach(oneItem => {
    console.log(`Arvo ${oneItem}`);
});

//mites MAP?
//map ja kaverit ovatkin sitten oma tarinansa. Lisää aiheesta täältä: https://github.com/GetSomefi/Kurssi_Javascript/tree/main/mutatingMethods