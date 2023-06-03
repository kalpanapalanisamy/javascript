var bulboff=document.getElementById("bulboff");
var drkcat=document.getElementById("darkcat");
var swit=document.getElementById("swtch");
var onbtn=document.getElementById("on-button");
var offbtn=document.getElementById("off-button");

function on()
{
    bulboff.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    drkcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    swit.textContent="Switch on";
    onbtn.style.backgroundColor="green";
    offbtn.style.backgroundColor="grey";
    onbtn.style.color="white";
    offbtn.style.color="white";
}

function off()
{
    bulboff.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    drkcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    swit.textContent="Switch off";
    onbtn.style.backgroundColor="grey";
    offbtn.style.backgroundColor="red";
    onbtn.style.color="white";
    offbtn.style.color="white";

}