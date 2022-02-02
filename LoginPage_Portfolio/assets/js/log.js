function myFunction() {
  

   if(document.getElementById("username-field").value == "yash@yash" && document.getElementById("password-field").value == "yashk")
   {
    window.open("MyPortfolio.html")
   }
  else 
  {
     // document.getElementById("user_error").textContent= 'hide'
     document.write("error 404")
  }
}
