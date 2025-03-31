//localstorage
//AJA: index.html (kts. konsoli)

let person = {
    name:"Jorkki Korkki",
    age:29,
    occupation:"Insinööri"
};
const personJSONstr = JSON.stringify(person);
localStorage.setItem("p1", personJSONstr);

person = null;

const p1 = localStorage.getItem("p1");

console.log(p1);