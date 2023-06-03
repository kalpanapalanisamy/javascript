function user_name()
{
    var userName=document.getElementById("input").value;
    var password=document.getElementById("psw").value;

    if((userName=="kalpana") || (password.length>6))
    {
      alert("Your password & username correct");
    }
    else
    {
        alert ("mismatch");
    }

}