//https://exploringjs.com/js/book/ch_syntax.html#modules

// !! Huomaa, että tiedostopääte on .mjs ei .js

import {summa, siisti} from './jokumoduuli.mjs';
console.log("Summa", summa(1,2));

console.log("Siisti", siisti("#Hästäg@mope di.fi"));