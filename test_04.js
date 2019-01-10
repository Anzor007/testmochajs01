/* ---------------------------------------------------------------------------- /**/
/* Задача 4                                                                     /**/
/* Const list = catsGroupGenerate(999)                                          /**/
/* Написать функции, которые принимая list вернут массив:                       /**/
/* - котов мужского пола                                                        /**/
/* - имен                                                                       /**/
/* - n самых старых котов                                                       /**/
/*      (функция также принимает параметр n - максимальный размер результата)   /**/
/* - имен n самых молодых кошек                                                 /**/
/*      (функция также принимает параметр n - максимальный размер результата)   /**/
/* ---------------------------------------------------------------------------- /**/

var catsGG = require('./test_03.js');

function catMan(catsGGList) //- котов мужского пола
{
    return catsGGList.filter(cat => cat.gender === "Мужской");
}
var cats0 = catsGG(10);
//console.log("catMan\n",cats0.map(cat => cat.gender),cats0.length);
//t=catMan(cats0);
//console.log(t,t.length);


function catName(catsGGList) {

    return catsGGList.map(cat => cat.name);
}

console.log("catNam\n",catName(cats0),catName(cats0).length);




function catOldMan(catsGGList,count) {
    var catAge = catMan(catsGGList);
  //  console.log("catAgeMan",catAge,catAge.length);
    catAge.sort((a,b) => (a.age-b.age));
  //  return catAge.slice(-count);
    return catAge.slice(catAge.length-count);
}
//ar catMtmp = catOldMan(cats0,5);
//console.log("catOldMan\n",catMtmp.map(cat => cat.age));
//console.log(catMtmp,catMtmp.length);


function catWoman(catsGGList,count) {
    var catWAge = catsGGList.filter(cat => cat.gender === "Женский");
  //  console.log("1catWAge\n",count,catWAge.map(cat => cat.age),catWAge.length);
    catWAge.sort((a,b) => (a.age-b.age));
    console.log("11catWAge\n",count,catWAge,catWAge.length);

    return catWAge.slice(count);
}
console.log("\n--------",cats0,cats0.length);
ntmp=3;
var tmpw = catWoman(cats0,ntmp);
console.log("tmp",tmpw,tmpw.length);
console.log("catWoman\n",tmpw.map(cat => cat.age));
//console.log(tmpw,tmpw.length);

module.exports = {catMan, catName, catOldMan, catWoman};
