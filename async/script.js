// //https://tie.digitraffic.fi/api/weathercam/v1/stations

//async ja await
//AJA: node .\script.js

//koska haemme tietoa ulkoisesta palvelusta emme voi tietää kuinka kauan tiedon haussa menee. 
//tieto ei ole edes välttämättä saatavilla, serverissä on vika, palomuuri estää -> haussa menee ikuisuus 
//käytetään async-avainsanaa funktion edessä (tehdään asynkroninen funktio).
//Tavallinen funktio suoritetaan järjestyksessään (heti valmis vastaus), taas async odottaa vastausta (valmis kun saadaan vastaus)
async function getInfo(url) {
    console.log('Haetaan tietoa osoitteesta: ' + url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) throw new Error('Virhe vastauksessa');

        const data = await response.json();
        return data;
    } catch (error) { //jos esim palvelin ei vastaa tjsp. (fetch failed)
        console.error('Virhe:', error.message);
        return null;
    }
}

//odota vastausta
const info = await getInfo('https://tie.digitraffic.fi/api/weathercam/v1/stations'); //palauttaa 'FeatureCollection'
//console.log(info);
if (info && info.features) {
    info.features.forEach((element,i) => {
        if (i < 3) {
            console.log(element);
        }
    });
}
