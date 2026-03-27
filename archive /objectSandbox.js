

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