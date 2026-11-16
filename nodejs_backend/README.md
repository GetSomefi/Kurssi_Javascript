# Kurssi_Javascript -> Node.js Backend

## Johdanto (16.11.2026)
Aika päivittää taas materiaalia ja lisätä mukaan ohjeita yksinkertaisen palvelinsoftan luomiseen.

### Yksinkertaisin mahdollinen vastaus
Tällä koodin pätkällä voit helposti testata palvelimesi toiminnan. Voit aina käyttää tätä koodia projektin alkuna ja laajentaa sitä sitten tarpeen mukaan.
```javascript
//basecode
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('That was easy!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
** [Lähde](https://nodejs.org/learn/getting-started/introduction-to-nodejs)**

### JSON-muotoinen vastaus palvelimelta

#### Object -> JSON-muotoinen vastaus
Tässä opit tekemään JSON-muotoisen vastauksen, jota on helppo jatkojalostaa tarpeiden mukaan.<br />
HUOM: ilman express-kirjastoa
```javascript
//korvaa server basecodesta
const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    const data = { 
        name: "Joe",
        age:"86"
    };
    res.end(JSON.stringify(data)); //JSON.stringify muuttaa puhtaan objektin stringiksi (muuten vastaus object Object) 
});
```
**Esimerkki [JSON-vastaus](https://github.com/GetSomefi/Kurssi_Javascript/tree/main/nodejs_backend/json_simple)**

#### JSON-tiedosto -> JSON-muotoinen vastaus
Data voi olla myös tiedostomuodossa, jolloin JSON-tiedosto tarjoillaan palvelimelta ulos sellaisenaan. 
```javascript
const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'data.json');

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

    // Vaihtoehtoinen tapa yhdistää status koodi ja content type
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(data);
  });
});
```

#### Rikkinäinen JSON-tiedosto -> Ehdollinen JSON-vastaus (RIKKI)
Noniin, Kesä-Janne olikin sitten jättänyt rikkinäisen jekkutiedoston palvelimelle. Jos tiedosto vain tulostetaan kaikki menee hyvin, mutta ongelmat alkavat kun tiedoston sisältöä koitetaan käsitellä. <br />
Huom. Tämä koodi ei toimi, koska se osaa käsitellä virhettä. 
```javascript
```

#### --
--
```javascript
```