var assert = require('assert');
var test01 = require('./test_01');
var test02 = require('./test_02');
var test03 = require('./test_03');
var test04 = require('./test_04');
var test05 = require('./test_05');
var test06 = require('./test_06');
//console.log("\n-01 test01\n",test01);
//console.log("\n-02 test02\n",test02);
//console.log("\n-03 test03\n",test03);
//console.log("\n-04 test04\n",test04);
//console.log("\n-04 test04.catMen\n",test04.catMen);
//console.log("\n-04 test04.catName\n",test04.catName);
//console.log("\n-04 test04.catOld\n",test04.catOld);
//console.log("\n-04 test04.catKid\n",test04.catKid);
//console.log("\n-05 test05\n",test05);
//console.log("\n-06 test06\n",test06);
//console.log("\n-06 test06.catFactory\n",test06.catFactory);
//console.log("\n-06 test06.catsGroupGenerate\n",test06.catsGroupGenerate);

describe('Cat', function() {
  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function(){
      console.log("\n-- остался для примера --");
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    /*------------------------------------------------------------------*/
    
    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test01 --");
        var li=['qq','ww','ee','rr','tt','yy','uu','ii'];
        var t=test01(li);
        const r = ['qq','ww','ee','rr','tt','yy','uu','ii'].indexOf(t);
        var d=0;
        if (r!==-1)
        { d=1;}
        //console.log(li );
        //console.log(t );
        //console.log(r );
        assert.equal(1, d);
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function() {
        console.log("\n-- work test02 --");
        var catfac={};
        catfac = test02();
        var tmp=[];
        for (var prop in catfac){
          if (catfac[prop]== 'undefined' )
          {
            //console.log(prop + " t= "+catfac[prop]);
            tmp.push('0');
          }
          else{
            //console.log(prop + " e= "+catfac[prop]);
            tmp.push('1');
          }
        }
        assert.equal(-1, tmp.indexOf(0));
      });
    /*------------------------------------------------------------------*/
      
    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test03 --");
        var n3 = 5;
        
        for (var i = 1; i < n3; i++) {
          
          var catfacgen={};
          catfacgen = test03(i);
          //console.log("\n catfacgen =",catfacgen);
          //console.log("\n i= ",i);
          var tmpA = [];

          catfacgen.forEach(function (cat) {
            if (cat == 'undefined' )
            {
            //  console.log("then", cat);
              tmpA.push('0');
            }
            else{
            //  console.log("else", cat);
              tmpA.push('1');
            }
          });
          assert.equal(-1, tmpA.indexOf(0));
        }
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test04.1 --");

        var n4 = 20;
        var catList4 =test03(n4);
        //console.log("catlist4", catList4);
        var catManList4 = {};
        catManList4 = test04.catMan(catList4);
        var tmp4 = [];
        //console.log("catmanlist4", catManList4, catManList4.length);
        if (catManList4.length == 0) {
          tmp4.push(1);
        }
        //console.log("1temp4 =",tmp4);  
        catManList4.filter (function (cat4) {
          if (cat4.gender == 'Мужской' )
          {
          //  console.log("then", cat4);
            tmp4.push('1');
          }
          else{
          //  console.log("else", cat4);
            tmp4.push('0');
          }
        });
        //console.log("2temp4 =",tmp4);  
        assert.equal(-1, tmp4.indexOf(0));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test04.2 --");
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test04.3 --");
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test04.4 --");
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
      console.log("\n-- work test05 --");
      assert.equal(-1, [1,2,3].indexOf(4));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test06.1 --");
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test06.2 --");
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    /*------------------------------------------------------------------*/

    it('should return -1 when the value is not present', function(){
        console.log("\n-- work test07 --");
        assert.equal(-1, [1,2,3].indexOf(4));
      });
  });
});