var catsGG999 = require('./test_03.js');

function nameStats(cotolist)
{
    var arraN = {name:[] } ;

    for (var i = 0; i < cotolist.length; i++)
    {
        arraN.name[i]= cotolist[i].name;
    }
    var ameN={nam:[],cou:[]};
    var counter=0;
    for (var i5 = 0; i5 < arraN.name.length; i5++) 
    {   
        counter=0;
        ameN.nam.push(arraN.name[i5]);
        for (var j5 = i5+1; j5 < arraN.name.length; j5++) 
        {
            if (arraN.name[i5]===arraN.name[j5])
            {
                counter=counter+1;
                arraN.name.splice(j5,1);
                j5=j5-1;
            }   
        }
        ameN.cou.push(counter+1);
    }
}

module.exports = nameStats;