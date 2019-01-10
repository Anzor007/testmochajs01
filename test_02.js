/* ---------------------------------------------------------------------------- /**/
/* Задача 2                                                                     /**/
/* Написать котогенератор function catFactory(), которая возвращает объект      /**/
/* со свойствами: name , age , gender , legsCount , tailLength                  /**/
/* Значения - произвольные из набора, который вы сами зададите.                 /**/
/* Используйте функцию pick из предыдущего задания                              /**/
/* ---------------------------------------------------------------------------- /**/
var pick01 = require('./test_01.js');

function catFactory() {
    var massName = ['Айсберг','Аскольд','Астерикс' ,'Аякс'     ,'Артур'];
    var massAge = ['1','2','3','5','7','9','10','13'];
    var massGender = ['Мужской','Женский'];
    var massLegsCount = ['4','3'];
    var massTailLength  = ['1','3','5','7','9','11','13','15','25'];
    var catfac = {
        name: pick01(massName),
        age : pick01(massAge),
        gender : pick01(massGender),
        legsCount : pick01(massLegsCount),
        tailLength  : pick01(massTailLength)
    };
    return catfac;
}
/*
console.log (" ");
console.log (" Котогенератор ");
console.log (" ", catFactory());
console.log (" ");
*/
module.exports = catFactory;