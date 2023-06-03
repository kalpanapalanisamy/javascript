function sample(){
     
    var user=document.getElementById("user").value;
    var pswd=document.getElementById("pswd").value;
    var name=document.getElementById("myname").value;
    var mobile=document.getElementById("mob").value;
    var mail=document.getElementById("mail").value;
    var faname=document.getElementById("fname").value;
    var moname=document.getElementById("mname").value;
    var dob=document.getElementById("dob").value;
    var gender=document.getElementById("gen").value;
    var education=document.getElementById("edu").value;
    var langknwn=document.getElementById("lanknwn").value;
    var address=document.getElementById("adrs").value; 
   
   
   var t=document.getElementById("tid");
   t.innerHTML="<tr><td>UserName</td>"+"<td>"+user+"</td></tr>"+"<tr><td>Password</td>"+"<td>"+pswd+"</td></tr>"+"<tr><td>Name</td>"+"<td>"+name+"</td></tr>"+"<tr><td>Mobile</td>"+"<td>"+mobile+"</td></tr>"+"<tr><td>Mail</td>"+"<td>"+mail+"</td></tr>"+"<tr><td>Father's Name</td>"+"<td>"+faname+"</td></tr>"+"<tr><td>Mother's Name</td>"+"<td>"+moname+"</td></tr>"+"<tr><td>Date of Birth</td>"+"<td>"+dob+"</td></tr>"+"<tr><td>Gender</td>"+"<td>"+gender+"</td></tr>"+"<tr><td>Qualification</td>"+"<td>"+education+"</td></tr>"+"<tr><td>Languages Known</td>"+"<td>"+langknwn+"</td></tr>"+"<tr><td>Address</td>"+"<td>"+address+"</td></tr>"
   
   
   
   }