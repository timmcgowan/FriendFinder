// initial set created from array
var friendData = require("../data/friends");

console.log(friendData.name["Ahmed"]);

var Ahmed = friendData.name["Ahmed"].scores;
var Bob = friendData.name["Bob"].scores;

// evaluate objects
function compareObjects(obj1, ojb2) {
    // test obj
    if (!obj1) {
        return console.log("Error missing first object")
    }
    if (!ojb2) {
        return console.log("Error missing second object")
    }

    let l1 = obj1.length;
    let l2 = ojb2.length;
    if (l1 = l2) {  
        var ovalue = 0;
        for (var i = 0; i < l1; i++) {
            ovalue = ovalue + Math.abs(obj1[i] - ojb2[i]);
            //console.log(ovalue);
        }  
        return ovalue;
    } else {
        return console.log("Error objects are not same size");
    }
}

//compareObjects(bob, frank);
console.log("Ahmed & Bob have a compatibility value of : " + compareObjects(Ahmed, Bob));