//your code here 
 function GenerateRandom(){ 
         let x=Math.floor((Math.random() * 20) + 1); 
         document.getElementById("num").innerHTML=x; 
         let generatedValue=document.getElementById("num").innerHTML; 
         let guessedValue=document.getElementById("guess").value; 
         if(Math.abs(generatedValue-guessedValue)==0) 
         { 
                 document.getElementById("respond").innerHTML="Hot"; 
         } 
         else{ 
                 document.getElementById("respond").innerHTML="Cold"; 
         } 
 }

