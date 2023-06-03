var firstValue=document.getElementById("spn1");
var secondValue=document.getElementById("spn3");
var result=document.getElementById("inp");
var output=document.getElementById("show");

function restart()
{
    let firstValRand=Math.random()*100;
    let secondValRand=Math.random()*10;

    firstValue.textContent=Math.ceil(firstValRand);
    secondValue.textContent=Math.ceil(secondValRand);
    result.value="";
    output.innerHTML="";
    
}
restart();

function check()
{
    let firstValInt=parseInt(firstValue.textContent);
    let secondValInt=parseInt(secondValue.textContent);
    let userInput=parseInt(result.value);
    let sumOfInt=firstValInt + secondValInt;
    if(userInput === sumOfInt)
    {
        output.innerHTML="Congratulation! you got it";
        output.className="bg-success text-light text-center";
        output.style="width: 300px"
    }
    else
    {
        output.innerHTML="Please Try again!";
        output.className="bg-danger text-white text-center";
        output.style="width: 300px"
    }
   
}