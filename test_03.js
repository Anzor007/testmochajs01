var catfact = require('./test_02.js');

function catsGroupGenerate(n) {

    var arraCatFac = [];

    for (var i = 0; i < n; i++) {
        arraCatFac.push( catfact() );
    }
    return arraCatFac;
}

module.exports = catsGroupGenerate;