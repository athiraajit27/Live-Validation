var nam = document.signup.names;
var validname=document.getElementById("nameval");
var mailid=document.signup.mail;
var validmail=document.getElementById("mailval");
var phn=document.signup.phon;
var validphn=document.getElementById("phnval");
var pass1=document.signup.pwd1;
var validp1=document.getElementById("p1val");
var pass2=document.signup.pwd2;
var validp2=document.getElementById("p2val");
var addr=document.signup.addrs;
var validaddr=document.getElementById("addrval");
var age= document.signup.old;
var validage=document.getElementById("ageval");
var rad=document.signup.optradio;
var validrad=document.getElementById("radval");




function namevalid(){
    var boxname=document.getElementById("username");
  if(nam.value.trim().length<5)
  {
    validname.innerHTML="Too short";
    validname.style.color="Red";
    boxname.style.border= "3px solid red"
    
    return false;
  }
  else 
  {
    validname.innerHTML="Valid username";
    boxname.style.border= "3px solid green";
    validname.style.color="green";
    return true;
  }
}

function mailvalid(){ 
var boxmail=document.getElementById("semail")  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mailid.value.trim().match(mailformat))
    {boxmail.style.border= "3px solid green"
    validmail.style.color="green";
    validmail.innerHTML="Valid Email Id";
    return true;
    }

    else
    {boxmail.style.border= "3px solid red"
    validmail.style.color="red";
    validmail.innerHTML="Enter a Valid Email Id";
    return false;
    }

}

function phnvalid(){
    var boxphn=document.getElementById("phone")
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phn.value.trim().match(phoneno))
        {boxphn.style.border= "3px solid green"
        validphn.style.color="green";
        validphn.innerHTML="Valid Phone Number"
      return true;
        }
      else
        {
        boxphn.style.border= "3px solid red"
        validphn.style.color="red";
        validphn.innerHTML="Enter a Valid Phone Number"
        return false;
        }
}




function agevalid(){
boxage=document.getElementById("age")
year = parseInt(age.value, 10);
if(isNaN(year) || year < 15 || year > 100){
    boxage.style.border= "3px solid red"
    validage.style.color="red";
    validage.innerHTML="Enter a Valid Age between 15 to 100";
  return false;
 }
 else{
    boxage.style.border= "3px solid green"
    validage.style.color="green";
    validage.innerHTML="Valid Age"
    return true;
 }
}

function addrvalid(){
    boxaddr=document.getElementById("address")
if(addr.value.length<=0)
{
boxaddr.style.border= "3px solid red"
validaddr.style.color="red";
validaddr.innerHTML="Field cannot be empty"
return false;
}
else{
boxaddr.style.border= "3px solid green"
validaddr.style.color="green";
validaddr.innerHTML="Valid Address"
return true;
}
}

function passwordmatch(){
    boxpass=document.getElementById("password2")
    if(pass1.value===pass2.value){
boxpass.style.border= "3px solid green"
validp2.style.color="green";
validp2.innerHTML="Passwords match"
return true;
    }

else{boxpass.style.border= "3px solid red"
validp2.style.color="red";
validp2.innerHTML="Passwords mismatch"
return false;

}
}




function validateSignup()
{

    if (namevalid()&&mailvalid()&&phnvalid()&&pwd()&&passwordmatch()&&addrvalid&&agevalid)
    {
        alert("Account Created Successfully");
        return true;
    }
    else
    {
        alert("Please fill the required details");
        return false
    }



}





