//asenna ensin express: npm install express
//aja: node esim.js
//testaa selaimessa: http://localhost:3000

const express = require('express');
const app = express();
const port = 3000;

const weatherData = require('../helper');

// Juuripolku ("/"), joka vastaa yksinkertaisella HTML-tervehdyksellä
app.get('/', (req, res) => {
  res.send('<h1>Tervetuloa sää äppiin!</h1>');
});

// API-polku ("/api"), joka palauttaa JSON-muotoisia säätietoja
app.get('/api', (req, res) => {
  // Yksinkertainen sääobjekti
  // const weatherData = {
  //   city: "Helsinki",
  //   temperature: "5°C",
  //   condition: "Puolipilvinen",
  //   wind: "10 km/h",
  //   humidity: "80%"
  // };

  res.json(weatherData); // Lähetetään JSON-muotoinen vastaus
});

// Käynnistetään palvelin
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});