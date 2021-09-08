function result() {

var dateOfBirth=parseInt(document.getElementById("date").value);
var months=parseInt(document.getElementById("month").value);
var years=parseInt(document.getElementById("year").value);
var genders=(document.getElementById("gender").checked);
var genderses=(document.getElementById("gender1").checked);
var daysOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday" ,"Thursday", "Friday", "Saturday"];
var femaleName=["Akoko","Adwoa","Abena","Akua","Yaa","Afua","Ama"];
var maleName=["Kwasi","Kwadwo","Kwabera","Kwaku","Yaw","Kofi","Kwame"];
var cc=(parseInt(years.toString().slice(0,2))+1);
var yy=(parseInt(years.toString().slice(2,4));
var d=((parseInt(cc)/4-2*parseInt(cc)-1)+((5*parseInt(yy)/4))+((26*months+1)/10)+dateOfBirth)%7;
    
    if(document.getElementById("gender").checked){
        document.getElementById("display").innerHTML=
        document.getElementById("gender").value;

    }else{
        document.getElementById("display").innerHTML=
        "no one select";var
    }    


}
/*var j=1949;
 var b=j.toString();

console.log(b.slice(2,4));




