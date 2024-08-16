const jokuArray = [1,2,3];
for (const yksiTieto of jokuArray){ //tämä on ihan ok, sillä yksiTieto ei muutu koskaan
    console.log(yksiTieto);
}

for (const index = 0; index < jokuArray.length; index++) {
    console.log(index);
}