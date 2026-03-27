
console.log("Product data is loaded.")

var Intershield300V = {
pdsDate: "Based on 2/4/2015 PDS",
objectName: "Intershield300V",
ACAF: "AC",
name: "i300V",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "1-1",
volumeSolids: 0.63,
curingSchedules: [23, 41, 77, 95],
induction: "none",
h:{
    t23:   {
           touchDry: "6hrs", 
           hardDry: "28 hrs",
           potLife: "6hrs", 
           i979: "30 hrs, 5 dys",
           i267: "30 hrs, 14 dys",
           i740: "30 hrs, 7 dys",
           i300V: "30 hrs, 6 mths",
           i262: "30 hrs, 6 mths",
           i990HS: "30 hrs, 3 dys"
    },

    t41:    {
            touchDry: "4hrs", 
            hardDry: "17hrs", 
            potLife: "6hrs", 
            i979: "18hrs, 5dys", 
            i267: "18hrs, 14dys", 
            i740: "18hrs, 7dys", 
            i300V: "18 hrs, 6mnths", 
            i262: "18 hrs, 6 mnths", 
            i990HS: "18hrs, 3dys"
    },

    t77:    {
            touchDry: "3hrs", 
            hardDry: "4hrs", 
            potLife: "2hrs",  
            i979: "6.5hrs, 3dys", 
            i267: "6.5hrs, 14dys", 
            i740: "6.5hrs, 7dys",  
            i300V: "6.5 hrs, 5.5mths", 
            i262: "6.5 hrs, 5.5 mths",
            i990HS: "6.5hrs, 3dys"

    },
   

    t95:     {
             touchDry: "60 mins", 
             hardDry: "2 hrs", 
             potLife: "60 mins", 
             i979: "4 hrs, 3 dys", 
             i267: "4 hrs, 14 dys", 
             i740: "4 hrs, 7 dys", 
             i300V: "4 hrs, 3 mnths",
             i262: "4 hrs, 3 mths",
             i990HS: "4 hrs, 3 dys"
           
     }//cloze 95 degrees
} //cloze h
}; //cloze 300v objekt

var Intershield300VImmersed = {
pdsDate: "Based on 2/4/2015 PDS",
objectName: "Intershield300VImmersed",
ACAF: "AC",
name: "i300VI",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "1-1",
volumeSolids: 0.63,
curingSchedules: [23, 41, 77, 95],
induction: "none",
h:{
    t23:   {
           touchDry: "6hrs", 
           hardDry: "28 hrs",
           potLife: "6hrs", 
           i300VI: "30 hrs, 14 dys",
           i640: "6 hrs, NA",
           i6400NA: "6 hrs, NA"
    },

    t41:    {
            touchDry: "4hrs", 
            hardDry: "17hrs", 
            potLife: "6hrs", 
            i300VI: "18hrs, 14dys", 
            i640: "6 hrs, NA",
            i6400NA: "6 hrs, NA"
    },

    t77:    {
            touchDry: "3hrs", 
            hardDry: "4hrs", 
            potLife: "2hrs",  
            i300VI: "6.5hrs, 14dys", 
            i640: "2 hrs, NA",
            i6400NA: "2 HRS, NA"
    },
   

    t95:     {
             touchDry: "60 mins", 
             hardDry: "2 hrs", 
             potLife: "60 mins", 
             i300VI: "4 hrs, 14 dys", 
             i640: "60 mins, NA",
             i6400NA: "60 mins, NA"
    }//cloze 95 degrees
} //cloze h
}; //cloze 300v objekt


var Interthane990HS = {

pdsDate: "2/4/2015",
objectName: "Interthane990HS",
ACAF: "TC",
name: "i990HS",
manufacturer: "International Paint",
chemistry: "polyurethane",
ratio: "9-1",
volumeSolids: 0.68,
curingSchedules: [41, 50, 77, 86],
induction: "none",
h: {
     t41: {
           touchDry: "3.5hrs", 
           hardDry: "24 hrs",
           potLife: "7 hrs",
           i990HS:  "24 hrs, ext."
    },

     t50: {
           touchDry: "3 hrs", 
           hardDry: "17 hrs",
           potLife: "5.5 hrs",
           i990HS:  "17 hrs, ext."
     },

     t77: {
           touchDry: "2 hrs", 
           hardDry: "6 hrs",
           potLife: "3 hrs",
           i990HS:  "6 hrs, ext."

     },

     t86: {
           touchDry: "75 mins", 
           hardDry: "3 hrs",
           potLife: "2 hrs",
           i990HS:  "3 hrs, ext."

     }

}
};


var Interspeed640 = {

pdsDate: "2/4/2015",
objectName: "Interspeed640",
ACAF: "AF",
name: "i640",
manufacturer: "International Paint",
chemistry: "antifouling, TBTfree, polishing",
ratio: "1-part",
volumeSolids: 0.62,
curingSchedules: [41, 50, 77, 95],
induction: "none",
h: {
      t41: {
           touchDry: "12 hrs", 
           beforeFlooding: "12 hrs",
           i640: "24 hrs, ext."

      },

      t50: {
           touchDry: "6 hrs", 
           beforeFlooding: "12 hrs",
           i640: "20 hrs, ext"

      },

      t77: {
           touchDry: "4 hrs", 
           berforeFlooding: "8 hrs",
           i640: "6 hrs, ext", 

      },

      t95: {
           touchDry: "2 hrs", 
           beforeFlooding: "7 hrs",
           i640: "4 hrs, ext" 
      }
}
};

var Interspeed6400NA = {

pdsDate: "12/20/2013",
objectName: "Interspeed6400NA",
ACAF: "AF",
name: "i6400NA",
manufacturer: "International Paint",
chemistry: "antifouling, TBTfree, polishing ",
ratio: "1-part",
volumeSolids: 0.60,
curingSchedules: [23, 41, 77, 95],
induction: "none",
h: {
     t23: {
           touchDry: "6 hrs", 
           beforeFlooding: "32 hrs",
           i6400NA: "20 hrs, 6 mnths", 
         },

      t41: {
           touchDry: "4hrs", 
           beforeFlooding: "12 hrs",
           i6400NA: "12 hrs, 6 mnths"
         },

      t77: {
           touchDry: "2 hrs", 
           beforeFlooding: "8 hrs",
           i6400NA: "6 hrs, 6 mnths"
         },

      t95: {
           touchDry: "1 hr",
           beforeFlooding: "7 hrs",
           i6400NA: "4 hrs, 3 mnths"
         }
}
};
var Interbond998 = {

pdsDate: "12/12/2014",
objectName: "Interbond998",
ACAF: "AC",
name: "i998",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "2-1",
volumeSolids: 0.90,
curingSchedules: [41, 50, 77, 95],
induction: "none",
h: {

  t41: {
        touchDry: "14 hrs", 
        hardDry: "32 hrs",
        beforeFlooding: "7 dys",
        potLife: "90 mins", 
        i998: "24 hrs, 28 dys",
        i6GV: "24 hrs, 14 dys",
        i7100LWT: "NA, NA"

        },

  t50: {
           touchDry: "12 hrs", 
           hardDry: "18 hrs",
           beforeFlooding: "7 dys",
           potLife: "75 minutes", 
           i998: "18 hrs, 28 dys",
           i6GV: "18 hrs, 14 dys",
           i7100LWT: "24 hrs, 14 dys"
         },

  t77: {
           touchDry: "4 hrs", 
           hardDry: "6 hrs",
           beforeFlooding: "7 dys",
           potLife: "60 mins",
           i998: "6 hrs, 14 dys",
           i6GV: "6hrs, 10 dys",
           i7100LWT: "16 hrs, 14 dys"
        },

  t95:  {touchDry: "2 hrs", 
           hardDry: "3 hrs",
           beforeFlooding: "7 dys",
           potLife: "45 min",
           i998: "3hrs, 7 dys",
           i6GV: "3 hrs, 7 dys",
           i7100LWT: "4 hrs, 7 dys" 
        }
}
};

var Interzinc22HS = {

pdsDate: "12/12/2014",
objectName: "Interzinc 22HS",
ACAF: "AC",
name: "i22HS",
manufacturer: "International Paint",
chemistry: "inorganic zinc",
ratio: "1-2.86",
volumeSolids: 0.78,
curingSchedules: [50, 59, 77, 104],
induction: "none",
h: {
    t50: {
          touchDry: "30 mins", 
          hardDry: "2 hrs",
          potLife: "12 hrs", 
          i269: "48 hrs, ext."
    },

    t59: {
          touchDry: "25 mins", 
          hardDry: "1.5 hrs",
          potLife: "10 hrs", 
          i269: "37 hrs, ext."
    },

    t77: {
          touchDry: "15 mins", 
          hardDry: "1 hr",
          potLife: "8 hrs", 
          i269: "24 hrs, ext."
    },

    t104: {
          touchDry: "15 mins", 
          hardDry: "1 hr",
          potLife: "4 hrs", 
          i269: "24 hrs, ext."
    }
}
};

var Interzinc75V = {

pdsDate: "2/4/2015",
objectName: "Interzinc75V",
ACAF: "AC",
name: "i75V",
manufacturer: "International Paint",
chemistry: "organic zinc",
ratio: "4-1",
volumeSolids: 0.64,
curingSchedules: [41, 50, 77, 95],
induction: "none",
h: {
    t41: {
          touchDry: "24 hrs,", 
          hardDry: "48 hrs",
          potLife: "12 hrs", 
          i264: "48 hrs, ext. ",
          i262: "48 hrs, ext."
    },

    t50: {
          touchDry: "16 hrs,", 
          hardDry: "30 hrs",
          potLife: "10 hrs", 
          i264: "30 hrs, ext. ",
          i262: "30 hrs, ext."
    },

    t77: {
          touchDry: "2 hrs,", 
          hardDry: "8 hrs",
          potLife: "6 hrs", 
          i264: "8 hrs, ext. ",
          i262: "8 hrs, ext."
    },

    t95: {
          touchDry: "1 hr,", 
          hardDry: "6 hrs",
          potLife: "4 hrs", 
          i264: "6 hrs, ext. ",
          i262: "6 hrs, ext."
    }
}
};

var Interseal670HS = {

pdsDate: "10-11-2012",
objectName: "Interseal 670HS",
ACAF: "AC",
name: "i670HS",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "5.67-1",
volumeSolids: 0.82,
curingSchedules: [50, 59, 77, 104],
induction: "none",
h: {
    t50: {
          touchDry: "8 hrs", 
           hardDry: "32 hrs",
           potLife: "5 hrs", 
           i670HS: "32 hrs, 6 wks"
    },
    t59: {
          touchDry: "7 hrs", 
           hardDry: "26 hrs",
           potLife: "3 hrs", 
           i670HS: "26 hrs, 4 wks"
    },
    t77: {
          touchDry: "5 hrs", 
           hardDry: "18 hrs",
           potLife: "2 hrs", 
           i670HS: "18 hrs, 14 wks"
    },
    t104: {
          touchDry: "2 hrs", 
           hardDry: "6 hrs",
           potLife: "1 hr", 
           i670HS: "6 hrs, 7 dys"
    }
  }
  };

var Intertuf262 = {

pdsDate: "12/12/2014",
objectName: "Intertuf262",
ACAF: "AC",
name: "i262",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "4-1",
volumeSolids: 0.73,
curingSchedules: [50, 59, 77, 95],
induction: "30 minutes",
h: {
    t50: {
          touchDry: "12 hrs", 
           hardDry: "28 hrs",
           potLife: "7 hr", 
           i990HS: "16 hrs, 7 dys",
           i262: "18 hrs, 28 dys"
    },

    t59: {
          touchDry: "8 hrs", 
           hardDry: "24 hrs",
           potLife: "6 hrs", 
           i990HS: "11 hrs, 5 dys",
           i262: "13 hrs, 28 dys"
    },

    t77: {
          touchDry: "6 hrs", 
           hardDry: "18 hrs",
           potLife: "4 hrs", 
           i990HS: "6 hrs, 3 dys",
           i262: "6 hrs, 28 dys"
          },

    t95:  {
          touchDry: "4 hrs", 
           hardDry: "10 hrs",
           potLife: "2 hrs", 
           i990HS: "4 hrs, 2 dys",
           i262: "4 hrs, 2 dys"
    }
}
};

var Intergard264 = {
pdsDate: "12/12/2014",
objectName: "Intergard264",
ACAF: "AC",
name: "i264 ",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "4-1",
volumeSolids: 0.80,
curingSchedules: [50, 59, 77, 86],
induction: "none",
h: {

    t50: {
          touchDry: "10 hrs", 
           hardDry: "24 hrs",
           potLife: "8 hrs", 
           i5703: "24 hrs, 10 dys",
           i264: "24 hrs, 12 wks",
           i267: "24 hrs, 8 wks",
           i740: "24 hrs, 12 wks",
           i6GV: "24 hrs, 7 dys",
           i7100LWT: "36 hrs, 7 dys",
           i990HS: "24 hrs, 10 dys"
    },

    t59:  {
          touchDry: "7 hrs", 
           hardDry: "17 hrs",
           potLife: "6 hrs", 
           i5703: "12 hrs, 3 dys",
           i264: "18 hrs, 10 wks",
           i267: "18 hrs, 6 wks",
           i740: "18 hrs, 10 wks",
           i6GV: "24 hrs, 7 dys",
           i7100LWT: "32 hrs, 7 dys",
           i990HS: "18 hrs, 9 dys"
    },

    t77:  {
          touchDry: "4 hrs", 
           hardDry: "8 hrs",
           potLife: "4 hrs", 
           i5703: "6 hrs, 3 dys",
           i264: "10 hrs, 8 wks",
           i267: "10 hrs, 4 wks",
           i740: "10 hrs, 8 wks",
           i6GV: "24 hrs, 7 dys",
           i7100LWT: "24 hrs, 7 dys",
           i990HS: "10 hrs, 7 dys"
    },

    t86: {
          touchDry: "2 hrs", 
           hardDry: "4 hrs",
           potLife: "2 hrs", 
           i5703: "3 hrs, 2 dys",
           i264: "7 hrs, 28 wks",
           i267: "NA, NA",
           i740: "7 hrs, 28 DYS",
           i6GV: "24 hrs, 7 dys",
           i7100LWT: "16 hrs, 7 dys",
           i990HS: "7 hrs, 3 dys"
    }

}
};


var Intershield803 = {

pdsDate: "12/12/2014",
objectName: "Intershield803",
ACAF: "AC",
name: "i803",
manufacturer: "International Paint",
chemistry: "epoxy",
ratio: "4-1",
volumeSolids: 0.75,
curingSchedules: [41, 59, 77, 95],
induction: "none",
h: {
    t41: {
          touchDry: "6 hrs", 
           hardDry: "18 hrs",
           potLife: "2 hrs", 
           i740: "8 hrs, 5 dys",
           i803: "18 hrs, 7 dys",
           i990HS: "NA, NA"
    },

     t59: {
          touchDry: "3.5 hrs", 
           hardDry: "13 hrs",
           potLife: "1.5 hrs", 
           i740: "12 hrs, 7 dys",
           i803: "12 hrs, 7 dys",
           i990HS: "12 hrs, 24 hrs"
    },

    t77: {
          touchDry: "3 hrs", 
           hardDry: "6 hrs",
           potLife: "1 hr", 
           i740: "6 hrs, 7 dys",
           i803: "6 hrs, 7 dys",
           i990HS: "6 hrs, 24 hrs"
    },

    t95: {
          touchDry: "2.5 hrs", 
           hardDry: "4 hrs",
           potLife: "30 mins ", 
           i740: "4 hrs, 7 dys",
           i803: "4 hrs, 5 dys",
           i990HS: "4 hrs, 24 hrs" 
    }
}
};
