// Spread: unpack
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Rest: pack
function showNumbers(...numbers) {
    console.log(numbers); // [1, 2, 3]
}

showNumbers(1, 2, 3);