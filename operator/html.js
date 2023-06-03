function data()
{
    var user=document.getElementById("user").value;
    var sp=document.getElementById("spn");
    sp.innerHTML=("Required*");
    sp.style.color="red";

    var eml=document.getElementById("eml").value;
    var sp1=document.getElementById("spn1");
     sp1.innerHTML=("Required*");
     sp1.style.color="red";
    var but=document.getElementById("buttn");
    but.style.color="white";
    but.style.backgroundColor="blue";
    but.style.border="1px solid blue";
    
}