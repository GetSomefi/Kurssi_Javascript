//simuloitu viive

async function simulatedDelay(delayInSeconds) {
    return new Promise((resolve,reject) => { //tehdään "lupaus" vastauksesta (resolve jos onnistuu ja reject jos epäonnistuu)
        if (delayInSeconds > 2) {
            reject("Ei ihan jaksa odotella näin kauan!");
            return;
        }

        setTimeout(() => {
            resolve("Moi!"); //muutetaan resolven sisältö x-sekunnin päästä
        }, 1000 * delayInSeconds);
    });
}

console.log("Kysely matkaan (tehdään pyyntö ja odotetaan vastausta...");
simulatedDelay(3).then(response=>{ // simulatedDelay(1) - tehdään pyyntö ja odotetaan vastausta // then - kun saadaan vastaus (resolve)
    console.log("Sitten (then) saatiin vastaus: " + response); // () => {} nimetään vastaus (response) ja tehdään sillä jotain 
}).catch(error => { // jos jokin ei onnistunut (reject)
    console.error("ERR:", error);
});