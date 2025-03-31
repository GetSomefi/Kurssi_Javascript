//https://tie.digitraffic.fi/api/weathercam/v1/stations

//then
//AJA: node .\scriptThen.js

//koska haemme tietoa ulkoisesta palvelusta emme voi tietää kuinka kauan tiedon haussa menee. 
//tieto ei ole edes välttämättä saatavilla, serverissä on vika, palomuuri estää -> haussa menee ikuisuus 
//käytetään async-avainsanaa funktion edessä (tehdään asynkroninen funktio).
//Tavallinen funktio suoritetaan järjestyksessään (heti valmis vastaus), taas async odottaa vastausta (valmis kun saadaan vastaus)
function getInfo(url) {
    console.log('Haetaan tietoa osoitteesta: ' + url);
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) throw new Error('Virhe vastauksessa');
        return response.json();
    })
    .catch(error => {
        console.error('Virhe:', error.message);
        return null;
    });
}

getInfo('https://tie.digitraffic.fi/api/weathercam/v1/stations').then(info => {
    if (info && info.features) { // varmistetaan, että data sisältää features
        info.features.forEach((element, i) => {
            if (i < 3) {
                console.log(element);
            }
        });
    }
});
