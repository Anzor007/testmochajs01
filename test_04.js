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

function catMan(catsGGList) {   //FILTER

    return catsGGList.filter(cat => cat.gender === "Мужской");

}

function catName(catsGGList) {  //MAP
 
    return catsGGList.map(cat => cat.name); // cat.name != undefined

}

function catOldMan(catsGGList, n) { //SORT SLICE
    
    var catAge = catMan(catsGGList);
 
    catAge.sort((a, b) => (a.age - b.age));
    
    return catAge.slice(catAge.length - n);

}

function catWoman(catsGGList, n) {  //SORT SLICE

    var catWAge = catsGGList.filter(cat => cat.gender === "Женский");

    catWAge.sort((a, b) => (a.age - b.age));
    
    return catWAge.slice(n);

}

console.log(catMan(catsGG(5)));
module.exports = { catMan, catName, catOldMan, catWoman };
