// Tämä esimerkki estää ohjelman kaatumisen, vaikka json-tiedostoa ei löytysi tai sen syntaksi olisi rikki. 
// (Tämä yksinkertaistaa ratkaisun olematta paras tapa. Löydät paremman tavan täältä: https://github.com/GetSomefi/Kurssi_Javascript/blob/main/nodejs_backend/json_file_safe_better.js ) 

const {createServer} = require('http'); //tarvitaan vain createServer ominaisuus
const fs = require('fs');     //tiedoston lukuun tarvitaan filesystem = fs 
const path = require('path'); //tiedoston polkuun pääsee käsiksi path-moduulilla
//kaikki http, path ja fs on sisäänkirjoitettuja node.js:ään

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'data_broken.json');

  // Laitetaan "vaarallinen" tiedonmuokkaustoiminto try:n sisään ja näin koko ohjelma ei kaadu virheen sattuessa.  
  // MUTTA nyt tiedoston lukeminen ei voi olla enää asynkroninen (readFile) tai try ei "huomaa" virhettä. 
  // Muutetaan fs-toiminto readFileSync:iksi, jolloin try nappaa virheen. (Tämä yksinkertaistaa ratkaisun olematta paras tapa. Löydät paremman tavan täältä: https://github.com/GetSomefi/Kurssi_Javascript/blob/main/nodejs_backend/json_file_safe_better.js ) 
  try {
    const data = fs.readFileSync(filePath, 'utf8'); //synkroninen versio ei sisällä callbackiä eli "seuraavaa vaihetta" tai ,(tietoja)=>{//sitten} ei ole 
    
    //Jos tiedostoa ei löydy catch nappaa virheen (testaa muuttamalla filePath kohdassa data_broken.json nimeksi data_broken_.json)

    const dataJSON = JSON.parse(data); // nyt koodi räjähtää (rikkinäisen parsiminen ei onnistu), mutta nyt koodi hyppää catchiin.
  
    // Edelleenkään tänne ei edetä jos json-tiedosto on rikki
    const modifiedData = {...dataJSON}; //... on spread-syntaksi, joka luo data-objektista kopion (shallow copy). Näin alkuperäinen "data" pysyy koskemattomana.

    modifiedData.name = "Bob"; // muutetaan Joe -> Bob

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    res.end(modifiedData); 
      
  } catch (error) { // catch:in error kertoo mukavasti mikä meni vikaan. Se onkin sitten toinen tarina miten tästä virheestä palaudutaan vaikka koko homma ei kaatunutkaan.
    // Voit huoletta vastaa json-muodossa virheen (... kunhan se ei ole mikään rikkinäinen tiedosto)
    let clearReason = "";
    if (error instanceof SyntaxError) { // jos json parse epäonnistuu se palauttaa SyntaxErrorin, josta voimme käyttäjän pähkäilyä helpottaakseen kertoa json syntaksin olevan viallinen
      clearReason = "Check the JSON syntax";
    }
    const response = {
      status:400,
      errorMsg:error.message, //error sisältää ihmisluettavan .message virheviestin 
      clearReason
    }

                //400 = Bad Request
    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(response));
  }

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});