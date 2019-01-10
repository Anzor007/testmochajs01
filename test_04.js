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

function catMan(catsGGList) {

    return catsGGList.filter(cat => cat.gender === "Мужской");

}

function catName(catsGGList) {
 
    return catsGGList.map(cat => cat.name); // cat.name != undefined

}

function catOldMan(catsGGList, n) {
    
    var catAge = catMan(catsGGList);
 
    catAge.sort((a, b) => (a.age - b.age));
    
    return catAge.slice(catAge.length - n);

}

function catWoman(catsGGList, n) {

    var catWAge = catsGGList.filter(cat => cat.gender === "Женский");

    catWAge.sort((a, b) => (a.age - b.age));
    
    return catWAge.slice(n);

}

module.exports = { catMan, catName, catOldMan, catWoman };
