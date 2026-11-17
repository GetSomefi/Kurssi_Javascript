// edellinen esimerkki muutti tiedostoluvun synkroniseksi, joka hidastaa isommassa skaalassa palvelinta
// tässä vielä yksi versio joka kestää virheet: 
// tiedostoa ei löytynyt
// json-syntaksi on virheellinen

const {createServer} = require('http'); //tarvitaan vain createServer ominaisuus
const fs = require('fs');     //tiedoston lukuun tarvitaan filesystem = fs 
const path = require('path'); //tiedoston polkuun pääsee käsiksi path-moduulilla
//kaikki http, path ja fs on sisäänkirjoitettuja node.js:ään

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'data_broken.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    //readFile sisältää callbackin ja voimme tarkistaa heti löytyikö tiedosto 
    if (err) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.statusCode = 404; //http status-koodi "ei löytynyt"
        const data = { 
            name: "Tiedostoa ei löytynyt"
        };
        res.end(JSON.stringify(data));
        return; // suoritus loppuu tähän jos tiedostoa ei löytynyt
    }

    //tässä kohtaa tiedämme, että tiedosto löytyi. Seuraavaksi varmistamme, että rikkinäinen syntaksi ei riko mitään.
    try {
      const dataJSON = JSON.parse(data); // nyt koodi räjähtää ja hyppää catchiin.
    
      // Edelleenkään tänne ei edetä ellei json-syntaksi ole ok.
      const modifiedData = {...dataJSON}; //... on spread-syntaksi, joka luo data-objektista kopion (shallow copy). Näin alkuperäinen "data" pysyy koskemattomana.

      modifiedData.name = "Bob"; // muutetaan Joe -> Bob

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(modifiedData));
    } catch (error) { // catch:in error kertoo mukavasti mikä meni vikaan. Se onkin sitten toinen tarina miten tästä virheestä palaudutaan vaikka koko homma ei kaatunutkaan.
      let clearReason = "";
      if (error instanceof SyntaxError) { // jos json parse epäonnistuu se palauttaa SyntaxErrorin. Infotaan käyttäjää, että json-syntaksi on viallinen
        clearReason = "Check the JSON syntax";
      }
      const response = {
        status:400,
        clearReason,            // Nykyään (ECMAScript 2015 ->) ei tarvitse enää kirjoittaa clearReason:clearReason
        errorMsg:error.message  //error sisältää ihmisluettavan .message virheviestin 
      }

                  //400 = Bad Request
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(response));
    }
  });    

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});