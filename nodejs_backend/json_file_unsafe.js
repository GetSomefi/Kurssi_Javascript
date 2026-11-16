const {createServer} = require('http'); //tarvitaan vain createServer ominaisuus
const fs = require('fs');     //tiedoston lukuun tarvitaan filesystem = fs 
const path = require('path'); //tiedoston polkuun pääsee käsiksi path-moduulilla
//kaikki http, path ja fs on sisäänkirjoitettuja node.js:ään

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'data_broken.json');

  // Luetaan tiedosto aina asynkronisesti (vaihtoehtona readFileSync), jotta koko palvelimen ei tarvitse odottaa yhden käyttäjän pyyntöä. Testatessa merkityksetöntä, mutta merkitys kasvaa vasta oikeassa palvelinympäristössä, kun käyttäjiä on monia. 
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.statusCode = 404; //http status-koodi "ei löytynyt"
        const data = { 
            name: "Tiedostoa ei löytynyt"
        };
        res.end(JSON.stringify(data));
        return; // suoritus loppuu tähän jos tiedostoa ei löytynyt
    }

    //Tiedosto löytyi ja seuraavaksi käsitellään dataa. Tämä kohta kuitenkin rikkoo suorituksen, sillä se ei ymmärrä rikkinäistä jsonia.
    console.log(data); // toimii tähän asti

    const modifiedData = {...data}; //... on spread-syntaksi, joka luo data-objektista kopion (shallow copy). Näin alkuperäinen "data" pysyy koskemattomana.

    //console.log(modifiedData); // toimii vieläkin, mutta tulostus on jo mitä sattuu

    modifiedData.name = "Bob";
    
    console.log(modifiedData); // toimii vielä, mutta tulostus on mitä sattuu ja name:'Bob' on mukana tulostuksessa.

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(modifiedData); // nyt koodi räjähtää ja saamme virheen [nodemon] app crashed - waiting for file changes before starting...

    //Katso seuraava esimerkki, joka "kestää" tämän virheen
  });
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});