"use strict"
function onloadpage(){
    document.getElementById("btn").value = "Register";
}
function btnfun(){
   var x = prompt("Enter any word.");
   if(x == ""){
    document.querySelector("p").innerHTML = "Please Enter Any Input !";
   }
   else if(x == null){
    document.querySelector("p").innerHTML = "You Cancel!"
   }
   else{
    document.querySelector("p")
   }
}