var assert = require('assert');
var test01 = require('./test_01');                    //console.log("\n-01 test01\n",test01);
var test02 = require('./test_02');                    //console.log("\n-02 test02\n",test02);
var test03 = require('./test_03');                    //console.log("\n-03 test03\n",test03);
var test04 = require('./test_04');                    //console.log("\n-04 test04\n",test04);
                                                      //console.log("\n-04 test04.catMen\n",test04.catMen);
                                                      //console.log("\n-04 test04.catName\n",test04.catName);
                                                      //console.log("\n-04 test04.catOld\n",test04.catOld);
                                                      //console.log("\n-04 test04.catKid\n",test04.catKid);var test05 = require('./test_05');
var test05 = require('./test_05');                    //console.log("\n-05 test05\n",test05);
var test06 = require('./test_06');                    //console.log("\n-06 test06\n",test06);
                                                      //console.log("\n-06 test06.catFactory\n",test06.catFactory);
                                                      //console.log("\n-06 test06.catsGroupGenerate\n",test06.catsGroupGenerate);
var test07 = require('./test_07');                    //console.log("\n-07 test07\n",test07);

describe('Cat', function() {

  describe('#indexOf()', function() {

    it('test00   should return -1 when the value is not present', function() {

      assert.equal(-1, [1,2,3].indexOf(4));

    });
    /*------------------------------------------------------------------*/
    
    it('test01   should return -1 when the value is not present', function() {

      var li = ['qq', 'ww', 'ee', 'rr', 'tt', 'yy', 'uu', 'ii'];                //console.log("li = ", li);
      var t = test01(li);                                                       //console.log("t = ", t);
      const r = li.indexOf(t);                                                  //console.log("r = ", r);
      
      r !== -1 ? d = 1 : d = 0 ;                                                //console.log("d = ", d);

      assert.equal(1, d);

    });
    /*------------------------------------------------------------------*/

    it('test02   should return -1 when the value is not present', function() {

      var catfac = test02();
      var tmp2 = [];

      for (var prop in catfac) {

        if (catfac[prop] == 'undefined' ) {
          tmp2.push('0');                     //console.log(prop + " t= "+catfac[prop]);
        } else {
          tmp2.push('1');                     //console.log(prop + " e= "+catfac[prop]);
        }

      }

      //console.log("tmp2 = ",tmp2);
      assert.equal(-1, tmp2.indexOf(0));

    });
    /*------------------------------------------------------------------*/
      
    it('test03   should return -1 when the value is not present', function() {

      var n3 = 5;
        
      for (var i = 1; i < n3; i++) {
        
        var catfacgen = test03(i);
        var tmp3 = [];

        catfacgen.forEach(function (cat) {

          if (cat == 'undefined' ) {
            tmp3.push('0');                     //  console.log("then", cat);
          } else {
            tmp3.push('1');                     //  console.log("else", cat);
          }

        });

        //console.log("tmp3 = ",tmp3);
        assert.equal(-1, tmp3.indexOf('0'));

      }

    });
    /*------------------------------------------------------------------*/

    it('test04.1 should return -1 when the value is not present', function() {

        var n41 = 20;
        var catList41 = test03(n41);
        var catManList41 = test04.catMan(catList41);
        var tmp41 = [];

        if (catManList41.length == 0) {
          tmp41.push(1);
        }
        //catManList41[2].gender = 'tototo';              console.log("01 ",catManList41[2].gender);
        
        catManList41.filter (function (cat41) {

          if (cat41.gender == 'Мужской' ) { 
            tmp41.push('1');
          } else { 
            tmp41.push('0');
          }

        });

        //console.log("tmp41 = ",tmp41);
        assert.equal(-1, tmp41.indexOf('0'));
 
    });
    /*------------------------------------------------------------------*/

    it('test04.2 should return -1 when the value is not present', function() {

      var arName = ['Айсберг', 'Аскольд', 'Астерикс', 'Аякс', 'Артур'];   //console.log("arNAME = ",arName);
      var n42 = 5;
      var catList42 =test03(n42);                                         //console.log("catList42 = ",catList42);
      var aracatName42 = test04.catName(catList42);                       //console.log("aracatName42 = ",aracatName42);
      var tmp42 = [];

      aracatName42.forEach (function (cat42) { 

        if (arName.indexOf(cat42) !== -1) {
          tmp42.push('1');
        } else {
          tmp42.push('0');
        }

      });
      
      if (aracatName42.length !== tmp42.length) {
        tmp42.push('0'); 
      }                                               
      
      //console.log("tmp42 = ",tmp42);
      assert.equal(-1, tmp42.indexOf('0'));

    });
    /*------------------------------------------------------------------*/

    it('test04.3 should return -1 when the value is not present', function() {

      var n43=50;
      var catList43 =test03(n43);                                   //catList43.forEach(function(cat43) { console.log(cat43.age,"  - ",cat43.name,"  - ",cat43.gender); });
      var count = 5;
      var aracatName43 = test04.catOldMan(catList43,count);         //aracatName43.forEach(function(cat43) { console.log(cat43.age,"  - ",cat43.name,"  - ",cat43.gender); });
      var tmp43 = [];

      for (var prop in aracatName43) {
      
        if (aracatName43[prop] == 'undefined' ) {
          tmp43.push('0');
        } else {
          tmp43.push('1');
        }

      }

      if (aracatName43.length !== count) {
        tmp43.push('0'); 
      } 

      //console.log("tmp43 = ",tmp43);
      assert.equal(-1, tmp43.indexOf('0'));

    });
    /*------------------------------------------------------------------*/

    it('test04.4 should return -1 when the value is not present', function() {

        
      var n44 = 50;
      var catList44 = test03(n44);                             //catList44.forEach(function(cat44) { console.log(cat44.age,"  - ",cat44.name,"  - ",cat44.gender); });
      var count = 5;
      var aracatName44 = test04.catWoman (catList44,count);   //aracatName44.forEach(function(cat44) { console.log(cat44.age,"  - ",cat44.name,"  - ",cat44.gender); });
      var tmp44 = [];

      for (var prop in aracatName44) {

        if (aracatName44[prop] == 'undefined' ) {
          tmp44.push('0');
        } else {
          tmp44.push('1');
        }

      }

      if (aracatName44.length < count) {
        tmp44.push('0'); 
      }  
      
      //console.log("tmp44 = ",tmp44);
      assert.equal(-1, tmp44.indexOf('0'));

    });
    /*------------------------------------------------------------------*/

    it('test05   should return -1 when the value is not present', function() {

      var n5 = 10;                                //console.log("n = ",n5);
      var catList5 = test03(n5);                  //console.log("catlist = ",catList5, catList5.length);
      var stats5 = test05(catList5);              //console.log("stats = ",stats5);
      var listname = test04.catName(catList5);    //console.log("listName = ",listname);
      var namestats = Object.keys(stats5);        //console.log("namestats = ",namestats);
      var tmp5 = [];
      
      namestats.forEach(function(catn){

        if (listname.indexOf(catn) !== -1) {
          tmp5.push('1');
        } else {
          tmp5.push('0');
        }

      });

      console.log("tmp5 = ",tmp5);
      assert.equal(-1, tmp5.indexOf(0));

    });
    /*------------------------------------------------------------------*/

    it('test06.1 should return -1 when the value is not present', function() {

      var tmp61 = [];  
      var catlist61 = test06.catFactory({gender : 'toto'});       //console.log("calist61 = ",catlist61);
      
      if (catlist61.gender == 'toto' ) { 
        tmp61.push('1');
      } else {
        tmp61.push('0');
      }

      //console.log("tmp61 = ",tmp61);
      assert.equal(-1, tmp61.indexOf('0'));

    });
    /*------------------------------------------------------------------*/

    it('test06.2 should return -1 when the value is not present', function() {

      var n62 =3;
      var catlist62 = test06.catsGroupGenerate(n62, {gender : 'toto'});     //console.log("calist62 = ",catlist62);
      var tmp62 = [];

      catlist62.forEach(function(cat62) {

        if (cat62.gender == 'toto') {
          tmp62.push('1');
        } else {
          tmp62.push('0');
        }

      });

      if (tmp62.length !== n62) {
        tmp43.push('0'); 
      } 
      
      //console.log("tmp62 = ",tmp62);
      assert.equal(-1, tmp62.indexOf(4));

    });
    /*------------------------------------------------------------------*/

    it('test07   should return -1 when the value is not present', function(){
     
      var catlist7 = test07({gender : 'toto'});                             //console.log("calist7 = ",catlist7);
      var objNam = Object.keys(catlist7);                                   //console.log("objNam  = ",objNam);
      var b = objNam.some(function (t) { return t == 'loudness'; });        
      
      //console.log("b = ",b);
      assert.equal(true,b);

    });
 
  });

});