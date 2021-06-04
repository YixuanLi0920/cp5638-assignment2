
   function check() {
     if(document.getElementById("username").value==""){
         alert("Pleae enter your name!");
         return false;}
       else if(document.getElementById("email").value=="") {
         alert("E-mail cannot be empty！");
         return false;}
       else if(document.getElementById("productinterests").value=="") {
         alert("Address cannot be empty！");
         return false;}
       else if(document.getElementById("birthday").value=="") {
         alert("Phone number cannot be empty！");
         return false;}
       else {
         alert("Thank you for signing up for the Petite Treats Weekly newsletter"+"\n"+
"We have added the following information to our files regarding your interests:"+"\n"+
"Name:"+document.getElementById("username").value+"\n"+"E-mail:"+document.getElementById("email").value+"\n"+"Product interests:"+document.getElementById("productinterests").value+"\n"+"Birthday:"+document.getElementById("birthday").value)
     }
}
