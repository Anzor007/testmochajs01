var pick01 = require('./test_01.js');


function catFactory(defaults) {
    var name = ['Айсберг', 'Аскольд', 'Астерикс', 'Аякс', 'Артур', 'Асклепий', 'Арес'];
    var age = ['1', '2', '3', '5', '7', '9', '10', '13'];
    var gender = ['Мужской', 'Женский', 'Непонятный'];
    var legsCount = ['4', '3'];
    var tailLength  = ['1', '3', '5', '7', '9', '11', '13', '15', '25'];
    
    var CatFac = {}; 
  
    if (typeof defaults !== 'undefined') {
        CatFac.name = defaults.name || pick01(name);
        CatFac.age = defaults.age || pick01(age);
        CatFac.gender = defaults.gender || pick01(gender);
        CatFac.legsCount = defaults.legsCount || pick01(legsCount);
        CatFac.tailLength  = defaults.tailLength || pick01(tailLength);
    } else {
        CatFac.name = pick01(name);
        CatFac.age = pick01(age);
        CatFac.gender = pick01(gender);
        CatFac.legsCount = pick01(legsCount);
        CatFac.tailLength  = pick01(tailLength);
    }
 return CatFac;
}

function catsGroupGenerate(n0,defaults){
    var arraCatFac = [];
    for (var i=0; i<n0; i++){
        arraCatFac[i]=catFactory(defaults);
    } 
    return arraCatFac;
}

module.exports = {catFactory, catsGroupGenerate};



//console.log("\n ",catFactory({gender:'ops', name:'упс', age:'ops'}));
//console.log("\n ",catFactory());
//var n=3;
//console.log ("\n ", catsGroupGenerate(n));
//console.log ("\n ", catsGroupGenerate(n, { age:'ops',legsCount:'ops'}));
