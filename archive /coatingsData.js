


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
var Intershield300V = {
name: "300v",
Manufacturer: "International Paint",
chemistry: "epoxy",
type: "anticorrosive-primer",
ratio: "1-1",
volumeSolids: 0.63,
curingSchedules: [23, 41, 77, 95],
w: "almost there",
h:{
	t22: "really, really close",

    t23: {
           touchDry: "6hrs", 
           hardDry: "28 hrs",
           potLife: "6hrs", 
           i979: ["30 hrs", "5 dys"],
           i267: ["30 hrs", "14 dys"],
           i740: ["30 hrs", "7 dys"],
           i300vImmersed: ["30 hrs", "14 dys"],
           i300v: ["30 hrs", "6 mths"],
           i990hs: ["30 hrs", "3 dys"],
           i640: ["6 hrs", "NA"]
    },

    t41: {
            touchDry: "4hrs", 
            hardDry: "17hrs", 
            potLife: "6hrs", 
            i979: ["18hrs", "5dys"], 
            i267: ["18hrs", "14dys"], 
            i740: ["18hrs", "7dys"], 
            i300v: ["18 hrs", "6mnths"], 
            i300vImmersed: ["18hrs", "14 dys"], 
            i990hs: ["18hrs", "3dys"],
            i640: ["6 hrs", "NA"]
    },

    t77: {
            touchDry: "3hrs", 
            hardDry: "4hrs", 
            potLife: "2hrs",  
            i979: ["6.5hrs", "3dys"], 
            i267: ["6.5hrs", "14dys"], 
            i740: ["6.5hrs", "7dys"], 
            i300vImmersed: ["6.5hrs", "14dys"], 
            i300v: [ "6.5 hrs", "5.5mnths"], 
            i990hs: ["6.5hrs", "3dys"],
            i640: ["2 hrs", "NA"]
    },
   

    t95:  {
             touchDry: "60 mins", 
             hardDry: "2 hrs", 
             potLife: "60 mins", 
             i979: ["4 hrs", "3 dys"], 
             i267: ["4 hrs", "14 dys"], 
             i740: ["4 hrs", "7 dys"], 
             i300vImmersed: ["4 hrs", "14 dys"], 
             i300v: ["4 hrs", "3 mnths"], 
             i990hs: ["4 hrs", "3 dys"],
             i640: ["60 mins", "NA"]
    }//cloze 95 degrees
} //cloze h
}; //cloze 300v objekt

function reportBack() {
	//console.log(Intershield300V.w)
	//console.log(Intershield300V.h.t22)
	var mydata = "Intershield300V.h.t77.i300v";
//console.log("touch dry time equals: " + mydata);
var myobject = eval(mydata);
console.log(mydata)
console.log(myobject);
};

reportBack();