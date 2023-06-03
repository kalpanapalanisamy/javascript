function box()
{
    var pass=document.getElementById("inp1").value;
    var rpass=document.getElementById("repass").value;
    document.getElementById("inp1").value="";
    document.getElementById("repass").value="";

    if(pass==rpass)
    {
        alert("password must be same!");
    }
    else
    {
        alert("password mismatched");
    }
}