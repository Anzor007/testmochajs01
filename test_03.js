var catfact = require('./test_02.js');

function catsGroupGenerate(n0)
{
    var arraCatFac = [];

    for (var i=0; i<n0; i++) {
        arraCatFac[i]=catfact();
    }
    return arraCatFac;
}

module.exports = catsGroupGenerate;