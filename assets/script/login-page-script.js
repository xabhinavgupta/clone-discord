function checkUser(){
   var userEmailID= document.getElementById("email").value;
   var userPassword = document.getElementById("password").value;
   console.log(userEmailID.length)
   if(userEmailID.length === 0 || userPassword.length === 0)
   {
    window.alert("Please enter mandatory fields");
   }
   if(userEmailID.length >0 && userPassword.length>0)
   {
    if(userEmailID ==='abhi.mechkiit@gmail.com' && userPassword==='cohort9')
    {
        window.location.href="./user-landing-page.html";
    }  
    else{
        document.getElementById("email-label").style.color="red";
        document.getElementById("pwd-label").style.color="red";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }  
   }
}