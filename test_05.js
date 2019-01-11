var catsGG999 = require('./test_03.js');

function nameStats(cotolist) {  //FOREACH
    var stats = {};

    cotolist.forEach(cat => stats[cat.name] ? stats[cat.name]++ : stats[cat.name] = 1);
    return stats;
}
/*
var catList = catsGG999(30);
console.log(catList.map(cat => cat.name));
console.log(nameStats(catList));
*/
module.exports = nameStats;