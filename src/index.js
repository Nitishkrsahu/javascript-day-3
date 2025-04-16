"use strict"
function onloadpage(){
    document.getElementById("btn").value = "Register";
}
function btnfun(){
    var x = confirm("Record will Deleted \nAre you sure ?.");
    if(true == x){
        document.querySelector("p").innerHTML = "Record Deleted successfully!!"
    }
    else{
        document.querySelector("p").innerHTML = "You Canceled!!";
    }
}