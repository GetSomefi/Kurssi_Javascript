//https://exploringjs.com/js/book/ch_syntax.html#exception-handling

try{
    if(tallaistaEiOleOlemassakaan){
        console.log("Tämä ei voi tulostua");
    }
}catch(err){
    console.log("Ai ai, nyt tapahtui virhe: ,", err.message);
}finally{
    console.log("try catch finally on valmis!"); //tämä tapahtuu joka tapauksessa
}


//uudestaan 
const tallainenOnOlemassa = "Nyt on olemassa";
try{
    if(tallainenOnOlemassa){
        console.log("---\nTämä tulostuu jos vain verrattava muuttuja on olemassa");
    }
}catch(err){
    console.log("Ai ai, nyt tapahtui virhe: ,", err.message);
}finally{
    console.log("try catch finally on valmis!"); //tämä tapahtuu joka tapauksessa
}
