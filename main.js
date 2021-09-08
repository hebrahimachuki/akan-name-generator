function result(){
var d=((parseInt(cc)/4-2*parseInt(cc)-1)+((5*parseInt(yy)/4))+((26*months+1)/10)+dateOfBirth)%7;
var dateOfBirth=parseInt(document.getElementById("date").value);
var months=parseInt(document.getElementById("month").value);
var years=parseInt(document.getElementById("year").value);
var genders=(document.getElementById("gender").checked);
var genderses=(document.getElementById("gender1").checked);
var daysOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday" ,"Thursday", "Friday", "Saturday"];
var femaleName=["Akoko","Adwoa","Abena","Akua","Yaa","Afua","Ama"];
var maleName=["Kwasi","Kwadwo","Kwabera","Kwaku","Yaw","Kofi","Kwame"];
var cc=(parseInt(years.toString().slice(0,2))+1);
var yy=(parseInt(years.toString().slice(2,4)));

if(d===0 && genders==true){
    return(document.getElementById("display").innerHTML="You are:"+maleName[0] + "You were born on:"+ daysOfWeek[0])
}else if(d===1 && genders==true) {
    return (document.getElementById("display").innerHTML="You are:"+maleName[1]+"You were born on:"+ daysOfWeek[1]) 
}else if(d===2 && genders==true) {
    return (document.getElementById("display").innerHTML="You are:"+maleName[2]+"You were born on:"+ daysOfWeek[2]) 

}else if(d===3 && genders==true) {
    return (document.getElementById("display").innerHTML="You are:"+maleName[3]+"You were born on:"+ daysOfWeek[3]) 

}else if(d===4 && genders==true) {
    return (document.getElementById("display").innerHTML="You are:"+maleName[4]+"You were born on:"+ daysOfWeek[4]) 

}else if(d===5 && genders==true) {
    return (document.getElementById("display").innerHTML="You are:"+maleName[5]+"You were born on:"+ daysOfWeek[5]) 


}else if(d===6 && genders==true) {
    return (document.getElementById("display").innerHTML="You are:"+maleName[6]+"You were born on:"+ daysOfWeek[6]) 





}else if(d===0 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[0]+"You were born on:"+ daysOfWeek[0]) 


}else if(d===1 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[1]+"You were born on:"+ daysOfWeek[1]) 

}else if(d===2 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[2]+"You were born on:"+ daysOfWeek[2]) 


}else if(d===3 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[3]+"You were born on:"+ daysOfWeek[3]) 


}else if(d===4 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[4]+"You were born on:"+ daysOfWeek[4]) 



}else if(d===5 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[5]+"You were born on:"+ daysOfWeek[5]) 


}else if(d===6 && genderses==true) {
    return (document.getElementById("display").innerHTML="You are:"+femaleName[6]+"You were born on:"+ daysOfWeek[6]) 
else{
    return (document.getElementById("display").innerHTML="You are have noname"  
}




/*document.getElementById("display").innerHTML= "get it"+ d;
}   
   /* if(document.getElementById("gender").checked){
        document.getElementById("display").innerHTML=
        document.getElementById("gender").value;

    }else{
        document.getElementById("display").innerHTML=
        "no one select";var
    }  
}





