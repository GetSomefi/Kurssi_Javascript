for (let i = 0; i < 10; ++i) {  //pre incremented
    console.log(i);             // i is incremented before its evaluated ( first incremented then used )
}

console.log("####");

for (let i = 0; i < 10; i++) {  // post incremented
    console.log(i);             // i is evaluated then incremented ( valee is used first and then incremented )
}