function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function ValidateForm(){
    var Fname=document.login.Fname.value;
    var Lname=document.login.Lname.value;
    var Email=document.login.Email.value;
    var Cname=document.login.Cname.value;
    var Desg=document.login.Desg.value;
    var Ddetail=document.login.Ddetail.value;
    var Pno=document.login.Pno.value;
    var Wno=document.login.Wno.value;
    var pcode=document.login.pcode.value;
    var checkbox=document.getElementById("tandc");


    var fnameerr=lnameerr=emailerr=cnameerr=desgerr=domerr=pnoerr=wnoerr=pcodeerr=checkboxerr=true;

    if(Fname == "")
   {
       printError("fnameerr", "Please enter first name");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(Fname) === false) {
       printError("fnameerr", "Please enter a valid name");
   } else {
       printError("fnameerr", "");
       fnameerr = false;
   }
   }

   if(Lname == "")
   {
       printError("lnameerr", "Please enter last name");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(Lname) === false) {
       printError("lnameerr", "Please enter a valid name");
   } else {
       printError("lnameerr", "");
       lnameerr = false;
   }
   }

   if(Email == "") {
    printError("emailerr", "Please enter your email address");
 } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(Email) === false) {
        printError("emailerr", "Please enter a valid email address");
    } else{
        printError("emailerr", "");
        emailerr = false;
    }
 }

 if(Cname == "")
   {
       printError("cnameerr", "Please enter company name");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(Cname) === false) {
       printError("cnameerr", "Please enter a valid name");
   } else {
       printError("cnameerr", "");
       cnameerr = false;
   }
   }

   if(Desg == "")
   {
       printError("desgerr", "Please enter your designation");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(Desg) === false) {
       printError("desgerr", "Please enter a valid job designation");
   } else {
       printError("desgerr", "");
       desgerr = false;
   }
   }

   if(Ddetail == "")
   {
       printError("domerr", "Please enter your domain");
   } else {
   var regex = /^[a-zA-Z\s]+$/;                
   if(regex.test(Ddetail) === false) {
       printError("domerr", "Please enter a valid domain");
   } else {
       printError("domerr", "");
       domerr = false;
   }
   }

   if(Pno == "") {
    printError("pnoerr", "Please enter your mobile number");
 } else {
    var regex = /([6789]{1})[0-9]{9}/;
    if(regex.test(Pno) === false) {
        printError("pnoerr", "Please enter a valid 10 digit mobile number");
    } else{
        printError("pnoerr", "");
        pnoerr = false;
    }
 }

 if(Wno == "") {
    printError("wnoerr", "Please enter your whatsapp number");
 } else {
    var regex = /([6789]{1})[0-9]{9}/;
    if(regex.test(Wno) === false) {
        printError("wnoerr", "Please enter a valid 10 digit whatsapp number");
    } else{
        printError("wnoerr", "");
        wnoerr = false;
    }
 }

 if(pcode == "") {
    printError("pcodeerr", "Please enter your pincode");
 } else {
    var regex = /^[1-9][0-9]{5}$/;
    if(regex.test(pcode) === false) {
        printError("pcodeerr", "Please enter a valid 6 digit pincode");
    } else{
        printError("pcodeerr", "");
        pcodeerr = false;
    }
 }

 if(checkbox.checked){
    printError("checkboxerr","");
    checkboxerr=false;
}
else{
    printError("checkboxerr","</br>Please accept the terms and conditions");
}

 if((fnameerr || lnameerr || emailerr || cnameerr || desgerr || domerr || pnoerr || wnoerr || checkboxerr) == true){
    return false;
    }
    
    else {
       var DataPreview = "You've entered the following detail: \n"+
                         "First Name: " + Fname + "\n" +
                         "Last Name: " + Lname + "\n" +
                         "Email Address: " + Email + "\n" +
                         "Company Name: " + Cname + "\n" +
                         "Designation: " + Desg + "\n" +
                         "Domain: " + Ddetail + "\n"
                         "Phone Number: " + Pno + "\n"
                         "Whatsapp Number: " + Wno;
                         
       alert(DataPreview);
    }
}