function login_page()
{
    window.open("login.html", "_self");
}


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function ValidateForm(){

   var fname=document.login.fname.value;
   var lname=document.login.lname.value;
   var email=document.login.email.value;
   var pno=document.login.pno.value;
   var pass=document.login.pass.value;
   var cpass=document.login.cpass.value;
   var checkbox=document.getElementById("checkbox");

   var fnameerr=lnameerr=emailerr=pnoerr=passerr=cpasserr=checkboxerr=true;

   if(fname == "")
   {
       printError("fnameerr", "Please enter first name");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(fname) === false) {
       printError("fnameerr", "Please enter a valid name");
   } else {
       printError("fnameerr", "");
       fnameerr = false;
   }
   }

   if(lname == "")
   {
       printError("lnameerr", "Please enter last name");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(lname) === false) {
       printError("lnameerr", "Please enter a valid name");
   } else {
       printError("lnameerr", "");
       lnameerr = false;
   }
   }

   if(email == "") {
   printError("emailerr", "Please enter your email address");
} else {
   // Regular expression for basic email validation
   var regex = /^\S+@\S+\.\S+$/;
   if(regex.test(email) === false) {
       printError("emailerr", "Please enter a valid email address");
   } else{
       printError("emailerr", "");
       emailerr = false;
   }
}

if(pno == "") {
   printError("pnoerr", "Please enter your mobile number");
} else {
   var regex = /([6789]{1})[0-9]{9}/;
   if(regex.test(pno) === false) {
       printError("pnoerr", "Please enter a valid 10 digit mobile number");
   } else{
       printError("pnoerr", "");
       pnoerr = false;
   }
}

if(pass == "") {
   printError("passerr", "Passwords must have at least 8 characters");
}

else 
   {
       //Regular expression for basic password validation
       var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/;
       if(regex.test(pass) === false) {
           printError("passerr", "Passwords must have at least 8 characters </br> and contain at least one of the following: upper case </br> letters, lower case letters, numbers and symbols.");
       }
       else {
           printError("passerr", "");
           passerr = false;
       }
   }

if(cpass=="") 
   printError("cpasserr", "The passwords do not match.");
else if(pass==cpass)
   {
       printError("cpasserr","");
       cpasserr = false;
   }
else
   printError("cpasserr", "The passwords do not match.");

if(checkbox.checked){
    printError("checkboxerr","");
    checkboxerr=false;
}
else{
    printError("checkboxerr","Please accept the terms and conditions");
}


   

if((fnameerr || lnameerr || emailerr || pnoerr || passerr || cpasserr || checkboxerr) == true){
return false;
}

else {
   var DataPreview = "You've entered the following detail: \n"+
                     "First Name: " + fname + "\n" +
                     "Last Name: " + lname + "\n" +
                     "Email Address: " + email + "\n" +
                     "Password: " + pass + "\n" +
                     "Mobile Number: " + pno + "\n";
   alert(DataPreview);
}


}

