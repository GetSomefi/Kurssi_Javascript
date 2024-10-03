//https://exploringjs.com/js/book/ch_callables.html#ordinary-functions

{
function summa(luku1, luku2){
    const tulos = luku1 + luku2;
    console.log("Summa: " + tulos);
}
summa(12,4);
}

{
const summa = (luku1, luku2) => {
    const tulos = luku1 + luku2;
    console.log("Summa: " + tulos);
}
summa(12,4);
}

{
const summa = (luku1, luku2) => {
    const tulos = luku1 + luku2;
    console.log("Summa func tulos: " + tulos);
    return tulos;
}

const lasku = summa(12,4) + 10;
console.log("Summa: " + lasku);
}