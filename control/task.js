// for(var i=1;i<=100;i++)
// {
//     if(i%3==0 && i%5==0)
//     {
//         console.log(i+ "FizzBuzz"); 
//     }
//     else if(i%3==0)
//     {
//         console.log(i+ "Fizz");
//     }
//     else if(i%5==0)
//     {
//         console.log(i+ "Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


 var a = 112;
 b = 68; 
 var gcd; 
 while (a!=b) 
 { 
    if (a>b) 
    {
         a = a -b; 
        } 
    else 
    { 
        b = b - a;
     } 
} 
gcd = a;
console.log(gcd);