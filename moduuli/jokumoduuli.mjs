export function summa (luku1,luku2){
    return luku1+luku2;
}

export function siisti (siistittavaTeksti) {
    return siistittavaTeksti.replaceAll(/[ .#@äö]/g,"");
}