/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Button}", "dblclick", function(sym, e) {
         
         // Hide an element 
         sym.$("SettingsDisplay5").hide();
         
         // Hide an element 
         sym.$("ToggleOff2Copy").hide();
         
         // Hide an element 
         sym.$("ToggleOff2").hide();
         
         // Hide an element 
         sym.$("ToggleOn2").hide();
         
         // Hide an element 
         sym.$("ToggleOn2Copy").hide();
         
         // Show an element 
         sym.$("Slider").show();
         
         // Show an element 
         sym.$("plainscreen").show();
         
         // Hide an element 
         sym.$("Bluetooth2").hide();
         
         // Show an element 
         
         // Hide an element 
         sym.$("Message").hide();
         
         // Hide an element 
         sym.$("clr").hide();
         
         // Hide an element 
         sym.$("Call").hide();
         
         // Hide an element 
         sym.$("Dialpad2").hide();
         
         // Hide an element 
         sym.$("Phone").hide();
         
         // Hide an element 
         sym.$("num0").hide();
         sym.$("num1").hide();
         sym.$("num2").hide();
         sym.$("num3").hide();
         sym.$("num4").hide();
         sym.$("num5").hide();
         sym.$("num6").hide();
         sym.$("num7").hide();
         sym.$("num8").hide();
         sym.$("num9").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Slider}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "dblclick", function(sym, e) {
         
         // Hide an element 
         sym.$("SettingsDisplay5").hide();
         
         // Hide an element 
         sym.$("Slider").hide();
         
         // Hide an element 
         sym.$("Message").hide();
         
         // Show an element 
         sym.$("Dialpad2").show();
         
         // Show an element 
         sym.$("clr").show();
         
         // Show an element 
         sym.$("Call").show();
         
         // Show an element 
         sym.$("num0").show();
         sym.$("num1").show();
         sym.$("num2").show();
         sym.$("num3").show();
         sym.$("num4").show();
         sym.$("num5").show();
         sym.$("num6").show();
         sym.$("num7").show();
         sym.$("num8").show();
         sym.$("num9").show();
         
         
         
         // Hide an element 
         // Show an element 
         sym.$("Phone").show();
         sym.$("plainscreen").hide();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${SettingsIcon}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         
         // Show an element 
         // Hide an element 
         sym.$("Slider").hide();
         
         // Hide an element 
         sym.$("Screen").hide();
         
         // Hide an element 
         sym.$("plainscreen").hide();
         
         // Show an element 
         sym.$("SettingsDisplay5").show();
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOff2Copy").is(":visible")) {
         	sym.$("ToggleOff2Copy").hide();
         } else {
         	sym.$("ToggleOff2Copy").show();
         }
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOff2").is(":visible")) {
         	sym.$("ToggleOff2").hide();
         } else {
         	sym.$("ToggleOff2").show();
         }
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOn2").is(":visible")) {
         	sym.$("ToggleOn2").hide();
         } else {
         	sym.$("ToggleOn2").show();
         }
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOn2Copy").is(":visible")) {
         	sym.$("ToggleOn2Copy").hide();
         } else {
         	sym.$("ToggleOn2Copy").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ToggleOff2}", "click", function(sym, e) {
         
         // Show an element 
         sym.$("ToggleOn2Copy").show();
         
         // Hide an element 
         sym.$("ToggleOff2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ToggleOn2}", "click", function(sym, e) {
         
         // Show an element 
         sym.$("ToggleOff2Copy").show();
         
         // Hide an element 
         sym.$("ToggleOn2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ToggleOn2Copy}", "click", function(sym, e) {
         
         // Show an element 
         sym.$("ToggleOff2").show();
         
         // Hide an element 
         sym.$("ToggleOn2Copy").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ToggleOff2Copy}", "click", function(sym, e) {
         
         // Hide an element 
         sym.$("ToggleOff2Copy").hide();
         
         // Show an element 
         sym.$("ToggleOn2").show();
         
         // Show an element 
         
         // Show an element 
         sym.$("Bluetooth2").show();
         
         // Show an element 
         //sym.$("Bluetooth2Copy2").show();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Bluetooth2Copy2").play(1000);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Bluetooth2").play(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle13}", "click", function(sym, e) {
         
         // Set a toggle to hide or show an element 
         if (sym.$("Screen").is(":visible")) {
         	sym.$("Screen").hide();
         
         if (varSD) {
         	sym.$("SettingsDisplay5").show();
         }
         
         if (varCl) {
         	sym.$("clr").show();
         }
         
         if (varc3) {
         	sym.$("Calling3").show();
         }
         if (varend) {
         	sym.$("End").show();
         }
         
         
         if (varC) {
         	sym.$("Call").show();
         }
         
         if (varPh) {
         	sym.$("Phone").show();
         }
         
         if (varDl) {
         	sym.$("Dialpad2").show();
         }
         
         if (varn0) {
         	sym.$("num0").show();
         }
         
         if (varn1) {
         	sym.$("num1").show();
         }
         if (varn2) {
         	sym.$("num2").show();
         }
         if (varn3) {
         	sym.$("num3").show();
         }
         if (varn4) {
         	sym.$("num4").show();
         }
         if (varn5) {
         	sym.$("num5").show();
         }
         if (varn6) {
         	sym.$("num6").show();
         }
         if (varn7) {
         	sym.$("num7").show();
         }
         if (varn8) {
         	sym.$("num8").show();
         }
         if (varn9) {
         	sym.$("num9").show();
         }
         
         if(varM){
         	sym.$("Message").show();
         }
         
         // Set a toggle to hide or show an element 
         if (varS) {
         	sym.$("Slider").show();
         }
         
         // Set a toggle to hide or show an element 
         if (varPS) {
         	sym.$("plainscreen").show();
         }
         
         // Set a toggle to hide or show an element 
         if (varTO2) {
         	sym.$("ToggleOff2Copy").show();
         }
         
         // Set a toggle to hide or show an element 
         if (varTO) {
         	sym.$("ToggleOff2").show();
         }
         
         // Set a toggle to hide or show an element 
         if (varTON) {
         	sym.$("ToggleOn2").show();
         }
         
         // Set a toggle to hide or show an element 
         if (varTON2) {
         	sym.$("ToggleOn2Copy").show();
         }
         
         
         
         
         } else {
         	sym.$("Screen").show();		
         // Set a toggle to hide or show an element 
         if (sym.$("SettingsDisplay5").is(":visible")) {
         	varSD = 1;
         } else {
         	varSD = 0;
         }
         	sym.$("SettingsDisplay5").hide();
         
         // Set a toggle to hide or show an element 
         if (sym.$("Slider").is(":visible")) {
         	varS = 1;
         } else {
         	varS = 0;
         }
         	sym.$("Slider").hide();
         
         // Set a toggle to hide or show an element 
         if (sym.$("plainscreen").is(":visible")) {
         	varPS = 1;
         } else {
         	varPS = 0;
         }
         	sym.$("plainscreen").hide();
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOff2Copy").is(":visible")) {
         	varTO2 = 1;
         } else {
         	varTO2 = 0;
         }
         	sym.$("ToggleOff2Copy").hide();
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOff2").is(":visible")) {
         	varTO = 1;
         } else {
         	varTO = 0;
         }
         	sym.$("ToggleOff2").hide();
         
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOn2").is(":visible")) {
         	varTON = 1;
         } else {
         	varTON = 0;
         }
         	sym.$("ToggleOn2").hide();
         
         
         // Set a toggle to hide or show an element 
         if (sym.$("ToggleOn2Copy").is(":visible")) {
         	varTON2 = 1;
         } else {
         	varTON2 = 0;
         }
         	sym.$("ToggleOn2Copy").hide();
         
         // Set a toggle to hide or show an element 
         if (sym.$("Message").is(":visible")) {
         	varM = 1;
         } else {
         	varM = 0;
         }
         	sym.$("Message").hide();
         
         // Set a toggle to hide or show an element 
         if (sym.$("Call").is(":visible")) {
         	varC = 1;
         } else {
         	varC = 0;
         }
         	sym.$("Call").hide();
         
         if (sym.$("clr").is(":visible")) {
         	varCl = 1;
         } else {
         	varCl = 0;
         }
         	sym.$("clr").hide();
         
         if (sym.$("Phone").is(":visible")) {
         	varPh = 1;
         } else {
         	varPh = 0;
         }
         	sym.$("Phone").hide();
         
         if (sym.$("Dialpad2").is(":visible")) {
         	varDl = 1;
         } else {
         	varDl = 0;
         }
         	sym.$("Dialpad2").hide();
         
         if (sym.$("num0").is(":visible")) {
         	varn0 = 1;
         } else {
         	varn0 = 0;
         }
         	sym.$("num0").hide();
         
         
         if (sym.$("num1").is(":visible")) {
         	varn1 = 1;
         } else {
         	varn1 = 0;
         }
         	sym.$("num1").hide();
         
         if (sym.$("num2").is(":visible")) {
         	varn2 = 1;
         } else {
         	varn2 = 0;
         }
         	sym.$("num2").hide();
         
         if (sym.$("num3").is(":visible")) {
         	varn3 = 1;
         } else {
         	varn3 = 0;
         }
         	sym.$("num3").hide();
         
         if (sym.$("num4").is(":visible")) {
         	varn4 = 1;
         } else {
         	varn4 = 0;
         }
         	sym.$("num4").hide();
         
         if (sym.$("num5").is(":visible")) {
         	varn5 = 1;
         } else {
         	varn5 = 0;
         }
         	sym.$("num5").hide();
         
         if (sym.$("num6").is(":visible")) {
         	varn6 = 1;
         } else {
         	varn6 = 0;
         }
         	sym.$("num6").hide();
         
         if (sym.$("num7").is(":visible")) {
         	varn7 = 1;
         } else {
         	varn7 = 0;
         }
         	sym.$("num7").hide();
         
         if (sym.$("num8").is(":visible")) {
         	varn8 = 1;
         } else {
         	varn8 = 0;
         }
         	sym.$("num8").hide();
         
         if (sym.$("num9").is(":visible")) {
         	varn9 = 1;
         } else {
         	varn9 = 0;
         }
         	sym.$("num9").hide();
         
         
         if (sym.$("End").is(":visible")) {
         	varend = 1;
         } else {
         	varend = 0;
         }
         	sym.$("End").hide();
         
         if (sym.$("Calling3").is(":visible")) {
         	varc3 = 1;
         } else {
         	varc3 = 0;
         }
         	sym.$("Calling3").hide();
         
         
         
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 566, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 566, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 566, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 566, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Show an element 
         sym.$("Message").show();
         
         // Hide an element 
         sym.$("Slider").hide();
         
         // Hide an element 
         sym.$("SettingsDisplay5").hide();
         
         // Hide an element 
         sym.$("plainscreen").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=1;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Change the text in an element
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=2;
         sym.$("Phone").html(phstr);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num3}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=3;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num4}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=4;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num5}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=5;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num6}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=6;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num7}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=7;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num8}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=8;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num9}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=9;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num0}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr+=0;
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clr}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         
         // insert code for mouse click here
         
         // Change the text in an element
         var phstr = sym.$("Phone").html();
         phstr = phstr.slice(0,-1);
         sym.$("Phone").html(phstr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Call}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.$("Calling3").show();
         // Show an element 
         sym.$("End").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${End}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("Calling3").hide();
         
         
         
         // Hide an element 
         
         // Hide an element 
         
         // Hide an element 
         
         // Hide an element 
         sym.$("End").hide();
         
         // Hide an element 

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Slider'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Settings}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Show an element 
         sym.getComposition().getStage().$("Screen").show();

      });
      //Edge binding end

   })("Slider");
   //Edge symbol end:'Slider'

   //=========================================================
   
   //Edge symbol: 'Settings'
   (function(symbolName) {   
   
      

   })("Settings");
   //Edge symbol end:'Settings'

   //=========================================================
   
   //Edge symbol: 'Settings1'
   (function(symbolName) {   
   
   })("Settings1");
   //Edge symbol end:'Settings1'

   //=========================================================
   
   //Edge symbol: 'SetitngsIcon'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "dblclick", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Screen").show();
         
         
         // Hide an element 
         sym.$("plainscreen").hide();
         
         // Hide an element 
         sym.$("Slider").hide();
         
         

      });
      //Edge binding end

   })("SetitngsIcon");
   //Edge symbol end:'SetitngsIcon'

   //=========================================================
   
   //Edge symbol: 'SettingsDisplay'
   (function(symbolName) {   
   
   })("SettingsDisplay");
   //Edge symbol end:'SettingsDisplay'

   //=========================================================
   
   //Edge symbol: 'Bluetooth1'
   (function(symbolName) {   
   
   })("Bluetooth1");
   //Edge symbol end:'Bluetooth1'

   //=========================================================
   
   //Edge symbol: 'Bluetooth2'
   (function(symbolName) {   
   
   })("Bluetooth2");
   //Edge symbol end:'Bluetooth2'

   //=========================================================
   
   //Edge symbol: 'Bluetooth3'
   (function(symbolName) {   
   
   })("Bluetooth3");
   //Edge symbol end:'Bluetooth3'

   //=========================================================
   
   //Edge symbol: 'Message'
   (function(symbolName) {   
   
   })("Message");
   //Edge symbol end:'Message'

   //=========================================================
   
   //Edge symbol: 'Dialpad'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Be careful not to block or do too much work!
         
      });
      //Edge binding end

   })("Dialpad");
   //Edge symbol end:'Dialpad'

   //=========================================================
   
   //Edge symbol: 'num1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle17}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("num1");
   //Edge symbol end:'num1'

   //=========================================================
   
   //Edge symbol: 'num2'
   (function(symbolName) {   
   
   })("num2");
   //Edge symbol end:'num2'

   //=========================================================
   
   //Edge symbol: 'num3'
   (function(symbolName) {   
   
   })("num3");
   //Edge symbol end:'num3'

   //=========================================================
   
   //Edge symbol: 'num4'
   (function(symbolName) {   
   
   })("num4");
   //Edge symbol end:'num4'

   //=========================================================
   
   //Edge symbol: 'num5'
   (function(symbolName) {   
   
   })("num5");
   //Edge symbol end:'num5'

   //=========================================================
   
   //Edge symbol: 'num6'
   (function(symbolName) {   
   
   })("num6");
   //Edge symbol end:'num6'

   //=========================================================
   
   //Edge symbol: 'num7'
   (function(symbolName) {   
   
   })("num7");
   //Edge symbol end:'num7'

   //=========================================================
   
   //Edge symbol: 'num8'
   (function(symbolName) {   
   
   })("num8");
   //Edge symbol end:'num8'

   //=========================================================
   
   //Edge symbol: 'num9'
   (function(symbolName) {   
   
   })("num9");
   //Edge symbol end:'num9'

   //=========================================================
   
   //Edge symbol: 'num0'
   (function(symbolName) {   
   
   })("num0");
   //Edge symbol end:'num0'

   //=========================================================
   
   //Edge symbol: 'Call'
   (function(symbolName) {   
   
   })("Call");
   //Edge symbol end:'Call'

   //=========================================================
   
   //Edge symbol: 'clr'
   (function(symbolName) {   
   
   })("clr");
   //Edge symbol end:'clr'

   //=========================================================
   
   //Edge symbol: 'Calling'
   (function(symbolName) {   
   
   })("Calling");
   //Edge symbol end:'Calling'

   //=========================================================
   
   //Edge symbol: 'End'
   (function(symbolName) {   
   
   })("End");
   //Edge symbol end:'End'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-446630401");