function data()
{
    var user1=document.getElementById("user");
    var sp1=document.getElementById("sp1");
    sp1.innerHTML="Username must be between 3 and 25 characters.";
    sp1.style.color="red";
    user1.style.outline="none";
    user1.style.border="2px solid red";

    var user1=document.getElementById("user1");
    var sp1=document.getElementById("sp2");
    sp1.innerHTML="";
    sp1.style.color="green";
    user1.style.outline="none";
    user1.style.border="2px solid green";
    
    var user1=document.getElementById("user2");
    var sp1=document.getElementById("sp3");
    sp1.innerHTML="Password must has at least 8 characters that include<br> at least 1 lowercase characters,1 uppercase <br>characters, 1 number, and 1 special character in <br>(!@#$%^&*)";
    sp1.style.color="red";
    user1.style.outline="none";
    user1.style.border="2px solid red";
    
    var user1=document.getElementById("user3");
    var sp1=document.getElementById("sp4");
    sp1.innerHTML="Please enter the password again";
    sp1.style.color="red";
    user1.style.outline="none";
    user1.style.border="2px solid red";
    
}