//variables p1, p2 and p3 represent the empty buckets
//whatever products will be used on the first, second 
//and third coats of a paint job.


var bestTemp = 199;
var bestDiff = 199;
var difference;
var minMaxDry;
var x;

var goGetIt;
var min_dft = 5.0; //later this will be provided by the user
var temp = 55; //later this will be provided by the user

var Intershield300v = {
name: "300v",
Manufacturer: "International Paint",
chemistry: "epoxy",
type: "anticorrosive-primer",
ratio: "1-1",
volumeSolids: 0.63,
curingSchedules: [23, 41, 77, 95],
h:{
    23: {
           touchDry: "6hrs", 
           hardDry: "28 hrs"
           potLife: "6hrs", 
           979: ["30 hrs", "5 dys"],
           267: ["30 hrs", "14 dys"],
           740: ["30 hrs", "7 dys"],
           300v(immersed): ["30 hrs", "14 dys"],
           300V: ["30 hrs", "6 mths"],
           990hs: ["30 hrs", "3 dys"],
           640: ["6 hrs", "NA"]
    };

    41: {
            touchDry: "4hrs", 
            hardDry: "17hrs", 
            potLife: "6hrs", 
            979: ["18hrs", "5dys"], 
            267: ["18hrs", "14dys"], 
            740: [18hrs", "7dys"], 
            300v": ["18 hrs", "6mnths"], 
            300v(immersed): ["18hrs", "14 dys"], 
            990hs: ["18hrs", "3dys"]
            640: ["6 hrs", "NA"]
    };

    77: {
            touchDry: "3hrs", 
            hardDry: "4hrs", 
            potLife: "2hrs",  
            979: ["6.5hrs", "3dys"], 
            267: ["6.5hrs", "14dys"], 
            740: ["6.5hrs", "7dys"], 
            300v(immersed): ["6.5hrs", "14dys"], 
            300v: [ "6.5 hrs", "5.5mnths"], 
            990hs: ["6.5hrs", "3dys"],
            640: ["2 hrs", "NA"]
    };
   

    95:  {
             touch-dry: "60 mins", 
             hard-dry: "2 hrs", 
             pot-life: "60 mins", 
             979: ["4 hrs", "3 dys"], 
             267: ["4 hrs", "14 dys"], 
             740: ["4 hrs", "7 dys"], 
             300v(immersed): ["4 hrs", "14 dys"], 
             300v: ["4 hrs", "3 mnths"], 
             990hs: ["4 hrs", "3 dys"]
             640: ["60 mins", "NA"]
    }; //cloze 95 degrees
}; //cloze h
}; //cloze 300v objekt

var Interthane990hs = {
    Manufacturer: "International Paint",
chemistry: "polyurethane",
type: "topcoat",
ratio: "9-1",
volumeSolids: 0.68,
curingSchedules: [41, 50, 77, 86],

    h: {
        41:  {
            touch-dry: "3.5 hrs", "hard-dry", "24 hrs", "pot-life", "7 hrs", "interthane990hs", "24 hrs", "ext"],


        }
        [
        h41: ["touch-dry", "3.5 hrs", "hard-dry", "24 hrs", "pot-life", "7 hrs", "interthane990hs", "24 hrs", "ext"],
        h50: ["touch-dry", "3 hrs", "hard-dry", "17 hrs", "pot-life", "5.5 hrs", "interthane990hs", "17 hrs", "ext"],
        h77: ["touch-dry", "2 hrs", "hard-dry", "6 hrs", "pot-life", "3 hrs", "interthane990hs", "6 hrs", "ext"],
        h86: ["touch-dry", "75 mins", "hard-dry", "3 hrs", "pot-life", "2 hrs", "interthane990hs", "3 hrs", "ext"]
}
};       
var Intertuf262 = {
        Manufacturer: "International Paint", 
        chemistry: "polyurethane",
        type: "epoxy",
        ratio: "4-1",
        volumeSolids: 0.73,
        curingSchedules: [50, 59, 77, 95],
        h: {
            h50: ["touch-dry", "12 hrs", "hard-dry", "28 hrs", "pot-life", "7 hrs", "intertane990hs", "16 hrs", "7 dys", "intertuf262", "18 hrs", "28 dys"],
            h59: ["touch-dry", "8 hrs", "hard-dry", "24 hrs", "pot-life", "6 hrs", "interthane990hs", "11 hrs", "5 dys", "intertuf262", "13 hrs", "28 dys"],
            h77: ["touch-dry", "6 hrs", "hard-dry", "18 hrs", "pot-life", "4 hrs", "interthane990hs", "6 hrs", "3 dys", "intertuf262", "6 hrs", "28 dys"], 
            h95: ["touch-dry", "4 hrs", "hard-dry", "10 hrs", "pot-life", "2 hrs", "interthane990hs", "4 hrs", "2 dys", "intertuf262", "4 hrs", "15 dys"]
        }
        };
var Interspeed640 = { 
        manufacturer: "International Paint",
        chemistry: "polyurethane",
        type: "epoxy",
        ratio: "4-1",
        volumeSolids: 0.73,
        curingSchedules: [41, 50, 77, 95],
        h: {
            h41: ["touch-dry", "12 hrs", "before-flooding", "12 hrs", "interspeed640", "24 hrs", "ext"],
            h50: ["touch-dry", "6 hrs", "before-flooding", "12 hrs", "interspeed640,", "20 hrs", "ext"],
            h77: ["touch-dry", "4 hrs", "before-flooding", "8 hrs", "interspeed640", "ext"],
            h95: ["touch-dry", "2 hrs", "before-flooding", "7 hrs", "interspeed640", "4hrs", "ext"] 
        }
        };

var p1 = Intershield300v;
var p2 = Intershield300v;
var p3 = Interthane990hs;

var getDFT = function getDFT () {
var max_dft =  min_dft + 1;
var min_wft = min_dft/(Intershield300v.volumeSolids);
var max_wft = max_dft/(Intershield300v.volumeSolids);
WFTstring = max_dft + ", " + min_wft + ", " + max_wft;
return WFTstring;
};
//This function below will decide which column of curing schedule
//is best, by picking the one whose name (a temperature) is 
//closest to the current temperature. It uses the curing-schedules
//array, which is a property of each paint-product object.
var closest = function closest () {
    var i;
for (i=0; i<Intershield300v.curingSchedules.length; i++) {
var tempToTry = Intershield300v.curingSchedules[i];
difference = Math.abs(tempToTry-temp);
if (difference < bestDiff) {
    bestTemp = tempToTry;
     bestDiff = difference;
}
}
return bestTemp;
};
var tempRange = function tempRange () {
var minTemp = Intershield300v.curingSchedules[0];
var maxTemp = Intershield300v.curingSchedules[Intershield300v.curingSchedules.length-1];
var goodTemps = minTemp + ", " + maxTemp;
return goodTemps;
};
var getSchedule = function getSchedule () {
x = Intershield300v.h["h" + closest()];
console.log("value of 'X': " + x);
};
function thursday () {
var nextProduct = Intershield300v.h.h41.indexOf("300v");
var minDryPos = nextProduct + 1;
var maxDryPos = nextProduct + 2;
var mindry = Intershield300v.h.h41[minDryPos]
var maxdry = Intershield300v.h.h41[maxDryPos]
console.log("next-product:" + nextProduct);
console.log("mindry:" + mindry);
console.log("maxdry: " + maxdry);
return x;
};

console.log(Intershield300v.name);
console.log("your mils dry/wet: " + min_dft + ", " + getDFT());
console.log("Your temp is: " + temp);
console.log("And your table is: " + closest ());
thursday();
/* the p1 to p3 variables don't work because they are
are above the objects. The arrays may have to be replaced
with objects--because it will take less time to indicate
the dry times within an object, rather than search
through an array*/