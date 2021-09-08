function result() {

var dateOfBirth=parseInt(document.getElementById("date"));
var months=(document.getElementById("month"));
var years=(document.getElementById("year"));
var genders=(document.getElementById("gender"));

var result=parseInt(dateOfBirth);
document.getElementById("display").innerHTML= "Im trying result function" + result;

//console.log(result);
}