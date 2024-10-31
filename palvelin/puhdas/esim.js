//ei vaadi valmisteluja / asennuksia
//aja: node esim.js
//testaa selaimessa: http://localhost:3000

const http = require('http');
const weatherData = require('../helper');

// Määritellään palvelimen portti
const port = 3000;

// Luodaan palvelin
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Juuri ("/")-polku
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Tervetuloa sää äppiin!</h1>');
  } else if (req.url === '/api') {
    // API ("/api")-polku
    // const weatherData = {
    //   city: "Helsinki",
    //   temperature: "5°C",
    //   condition: "Puolipilvinen",
    //   wind: "10 km/h",
    //   humidity: "80%"
    // };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(weatherData));
  } else {
    // Muu polku, annetaan 404-virhe
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Käynnistetään palvelin
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});