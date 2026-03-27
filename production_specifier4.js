var paint = { 
// This object contains all the variables for this script
manufacturer: undefined, 
closest: {}, //closest is a function
bestTemp: 199, 
bestDiff: 199, 
difference: 199,
x: 0,
dryTimes: "",
goodTemps: "",
dtB: "",
dtA: "",
minTemp: 199,
maxTemp: 199,
dryRay: [],
tempToTry: 199,
temp: 199,
customerProduct: [],
customerThickness: [], 
kay: 0, //allows the value of "K" counter to be handed to another function
currentProduct: "",
nextProduct: "",
maxDFT: 0,
minDFT: 0,
minWFT: 0,
maxWFT: 0,
getDFT: {},//getDFT is a function
WFTstring: "",
finalTemp: 199, 
userError: false,
userErrorMessage: " Error: Incompatible products, surface temperature limits exceeded, or no overcoating data exists.",
dryStrung: "",
validCoat: {}, //validCoat is a function
canCoat: true,
checkValid: "",
coatCheck: "",
tempRange: {},
getSchedule: {},
info: "",
output: "",
};

console.log("specifier script is loaded");

function buttonhandler () {
//Purpose: to create the right number of pull-down menus in the form.
//manufacturer = document.getElementById('mfg').value;
topBox.style.display = "none";
middleBox.style.display = "block";

    
var bullet;
paint.x = document.getElementById("c").value;
for (i = 0; i < paint.x; i++) {
     bullet = "b" + i;
     console.log("value of bullet is: " + bullet);
  document.getElementById(bullet).innerHTML = "<select><option value='Choose'>Choose coating</option><option value='Intershield300V'>Intershield 300V</option><option value='Intershield300VImmersed'>Intershield 300V Immersed</option><option value='Interthane990HS'>Interthane 990HS</option><option value='Intertuf262'>Intertuf 262</option><option value='Interspeed640'>Interspeed 640</option><option value='Interspeed6400NA'>Interspeed 6400NA</option><option value='Interbond998'>Interbond 998</option><option value='Interzinc22HS'>Interzinc 22HS</option><option value='Interzinc75V'>Interzinc75V</option><option value='Interseal670HS'>Interseal 670HS</option><option value='Intergard264'>Intergard 264</option><option value='Intershield803'>Intershield 803</option><option value='Amerlock2VOC'>Amerlock 2</option><option value='PSX1001'>PSX 1001</option><option value='PSX700'>PSX 700</option><option value='Dimetcote302H'>Dimetcoat 302H</option><option value='Amercoat240'>Amercoat 240</option><option value='ABC3'>ABC 3</option><option value='Interspeed5640'>Interspeed 5640</option><option value='Carbocoat150UP'>Carbocoat 150UP</option></select>   Mils:  <input type='number' name='mils' min='1' max='100' required> "; 
  }
    document.getElementById("tmp").focus();
}

function menuHandler() {
  //purpose: Receive input from pull-down menus and save as a coating spec, in the form of two arrays, one for products and one for thicknesses. 
console.log("menu-handler is activated");
middleBox.style.display = "none";
bottomBox.style.display = "block";
paint.x = document.getElementById("c").value;
paint.temp = document.getElementById("tmp").value;
   for (i=0; i<paint.x; i+=1)   {
      console.log("menuhandler counter: " + i);
      paint.customerProduct[i] = eval("b"+i ).firstElementChild.value;
      paint.customerThickness[i] = eval("b"+i ).lastElementChild.value;
    }
reportBack(); //calls the report-back function so the paint spec array can be used. 
} 

paint.getDFT = function (theCoating, kay) {
//Purpose: Calculate wet-film thickness, using the thicknesses in the array (created by menuHandler) and product data retreived from the paint data script
//Returns in the form of a string that will be inserted in the DOM.
    console.log("get dft function is activated")
paint.minDFT = eval(paint.customerThickness[paint.kay]);
paint.maxDFT = 1.0 + paint.minDFT;
paint.minWFT = paint.minDFT/(theCoating.volumeSolids);
paint.maxWFT= paint.maxDFT/theCoating.volumeSolids;
paint.WFTstring =  "" + Math.round(paint.minWFT) + "</td><td>" + Math.round(paint.maxWFT) + "</td><td>" + paint.minDFT + "</td><td>" + paint.maxDFT ;
return paint.WFTstring;
};

paint.closest = function closest (coating) {
//Purpose: Go to the coating schedules array in the product's JSON object and decide which of the available temperatures is closest to the current temperature.
//Returns that temperature to be used by other functions that retrieve drying times. 
    paint.bestDiff = 199;
    console.log("closest function is activated")
for (j=0; j<coating.curingSchedules.length; j+=1) {

paint.tempToTry = coating.curingSchedules[j];
    console.log("temp to try = " +paint.tempToTry);
paint.difference = Math.abs(paint.tempToTry-paint.temp);
if (paint.difference < paint.bestDiff) {
    paint.bestTemp = paint.tempToTry;
     paint.bestDiff = paint.difference;
   }
    console.log(j + " The best-temp equals: " + paint.bestTemp + ". And coating equals: " + coating.name + ".");
}
return paint.bestTemp; 
};

paint.tempRange = function tempRange (coat) {
  //Purpose: Grab first and last entries from the coatins schedule array of the product's JSON object, to report the temperature range at which the product can be applied. 
// Returns two values--the minimum and the maximum--formatted as a string to be inserted in the DOM.
paint.minTemp = coat.curingSchedules[0];
paint.maxTemp = coat.curingSchedules[coat.curingSchedules.length-1];
paint.goodTemps = "" +paint.minTemp + "</td><td>" + paint.maxTemp;
return paint.goodTemps;
};


paint.getSchedule = function getSchedule (coat, nextcoat) {
//Retreives the proper drying times for the present coat of paint, based on the present temperature and the product used for the following coat. 
//Assembles the address for that stored data, based on input variables; retreives the data;
//Returns the answer as a text string for insertion in the DOM.
   
paint.dtA=coat.objectName;
paint.dtB=nextcoat.name; 
paint.finalTemp = paint.closest(coat);

paint.dryTimesAddress = paint.dtA + ".h.t" + paint.finalTemp + "." + paint.dtB;
paint.dryStrung = eval(paint.dryTimesAddress);
    console.log("drystrung is equal to: " + paint.dryStrung); 
    
paint.dryRay = paint.dryStrung.split(',');

paint.dryTimes = paint.dryRay[0] + "</td><td>" + paint.dryRay[1];
return paint.dryTimes; 

};
function reportBack () {
//Purpose: Assembles the full string of data, one coat of paint at a time, calling some of the functions above for sub-assemblies of the main string. 
//Returns info that appears in the table after the "calculate" button is pushed. 
paint.x = document.getElementById("c").value;

    for (k=0; k<paint.x+1; k++) {
    
     paint.kay=k;
     paint.output = "d"+k;
    // console.log("output= " + paint.output);
   paint.currentProduct = eval(paint.customerProduct[paint.kay]);
   paint.nextProduct = eval(paint.customerProduct[paint.kay + 1]);
   

   if (k<paint.x-1) {console.log("getschedule "+paint.kay);}
  else if (k==paint.x-1) {
   paint.nextProduct = eval(paint.customerProduct[paint.kay]);
    console.log('get schedule last coat');
//This function allows the final coat to execute, without needing info for the "next coat"
  }
        
paint.validCoat();
        
        console.log("the reportback function has successfully reached the last stage");
        console.log("user-error setting equals: " + paint.userError);
        
    
if (paint.canCoat === false) {console.log("valid coat variable was undefined");
    document.getElementById(paint.output).innerHTML = "<tr><td>#</td><td> # </td><td>#</td><td>#</td><td>#</td><td>#</td><td>#</td><td class='userError'>" + paint.userErrorMessage+"</td><td>#</td><td>#</td><td>#</td><td>#</td><td>#</td><td>#</td><td>#</td><td>#</td></tr>";
                             
                      } else if (paint.canCoat === true)  { 
                          
                           paint.info = "<tr><td>---</td><td>" +(paint.kay+1) + "</td><td>"+ paint.currentProduct.ACAF +"</td><td>"+paint.getDFT(paint.currentProduct, paint.kay)+"</td><td>"+paint.currentProduct.manufacturer+"</td><td>"+paint.currentProduct.objectName+"</td><td>"+ paint.currentProduct.ratio + "</td><td>---</td><td>" + paint.currentProduct.induction+"</td><td>"+paint.tempRange(paint.currentProduct) +"</td><td>"+paint.getSchedule(paint.currentProduct, paint.nextProduct)+"</td></tr>";
                        
                         document.getElementById(paint.output).innerHTML = paint.info;
                      } else {return;}
        
}
}




   paint.validCoat = function (){
     
     paint.coatCheck = paint.currentProduct.objectName + ".h.t" + paint.closest(paint.currentProduct) + "." + paint.nextProduct.name;
        console.log("valid coat address value: " + paint.coatCheck);
       paint.checkValid =  eval(paint.coatCheck);
  //      console.log("checkvalid value equals: " + paint.checkValid);
        if (paint.checkValid) {
         paint.canCoat = true;   
        } else {paint.canCoat = false;
               }
        
                           };


   