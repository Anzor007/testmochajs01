var catsGG = require('./test_03.js');

function catMen(catsGGList) {
    var arraCatMen = [];

    var counter = 0;

    for (var i=0; i<n; i++){
        if (catsGGList[i].gender === "Мужской"){            
            arraCatMen[counter] = catsGGList[i];
            counter++;
        }
     }
     if (counter===0){
         console.log (" Мужиков нет ");
     }
     else{
        console.log (" - котов мужского пола -\n",counter);
        console.log (" ",arraCatMen);
     }
     
     return arraCatMen;
}

function catName(catsGGList) {
    var arraCatName = [] ;
    for (var i=0; i<n; i++) {
        arraCatName[i] = catsGGList[i].name;
     }
     return arraCatName;
}

function catOld(catsGGList,n0) {
    var t_arracatAge=[];
    for (var i0=0; i0<catsGGList.length; i0++) {
        t_arracatAge[i0]=catsGGList[i0];
    }
    t_arracatAge.sort((prev,next) => prev.age-next.age);
    var arrafin = t_arracatAge.slice(t_arracatAge.length-n0);
    return arrafin;
}

function catKid(catsGGList,n0) {
    var t_arracatAge=[];

    for (var i0=0; i0<catsGGList.length; i0++) {
        t_arracatAge[i0]=catsGGList[i0];
    }

    t_arracatAge.sort((prev,next) => next.age-prev.age);

    var arrafin = {} = t_arracatAge.slice(t_arracatAge.length-n0);

    var arrayEND = [];
    for (var i1=0; i1<arrafin.length; i1++)
    {
        arrayEND[i1] = arrafin[i1].name;
    }
    return arrayEND;
}

module.exports = {catMen,catName,catOld,catKid};
