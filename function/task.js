//     let num1=300;
//     let num2=250;
//     let num3=220; 
// function findLargest()
// {
//     if(num1>num2 && num1>num3)
//     {
//         console.log(num1 +"is largest");
//     }
//     else if(num2>num3)
//     {
//         console.log(num2+ "is largest")
//     }
//     else{
//         console.log(num3);
//     }
// }
// findLargest();

// let side1= 35;
// let side2= 35;
// let side3= 35;
// function findTriangleType()
// {
//     if(side1===side2&&side1===side3)
//     {
//         console.log("Equilateral triangle");
//     }
//     else if(side1==side2||side2==side3)
//     {
//         console.log("Isosceles triangle");
//     }
//     else{
//         console.log("Scalene triangle.");
//     }
// }
// findTriangleType();

// function checkInRange(num1, num2, num3)
// {
//   if((num1<=num2)&&(num2<=num3))
//   {
//     console.log("Between the range");
//   }else{
//     console.log("Outside the range");
//   }
// }
// checkInRange(11,15,30);
// checkInRange(20,51,34);

// var num1=45 ;
// var num2=10;
// var ch="A";
// switch(ch)
// {
//     case "A":
//     var c=num1+num2;
//     console.log("add "+c);
//     case "B":
//     var c=num1-num2;
//     console.log("subtract "+c);
//     case "C":
//     var c=num1*num2;
//     console.log("multiply "+c);
//     case "D":
//     var c=num1/num2;
//     console.log("divide "+c);
//     case "E":
//     var c=num1%num2;
//     console.log("modulus "+c);
//     default:
//         console.log("Invalid operation");
//     break;
// } 

// function checkLeapYear(year)
// {
//     if((year%4==0)&&(year%100!==0)||(year%400==0))
//     {
//         console.log("leap year");
//     }
//     else{
//         console.log("Not a Leap year");
//     }
// }
// checkLeapYear(2023);
// checkLeapYear(2024);

// function finalGrade(mark)
// {
//     if(mark>=90 && mark<=100){
//         console.log("S grade");
//     }
//     else if(mark>=80 && mark<=90){
//         console.log("A grade");
//     }
//     else if(mark>=70 && mark<=80){
//         console.log("B grade");
//     }
//     else if(mark>=60 && mark<=70){
//         console.log("C grade");
//     }
//     else if(mark>=50 && mark<=60){
//         console.log("D grade");
//     }
//     else if(mark>=40 && mark<=50){
//         console.log("E grade");
//     }
//     else if(mark>=0 && mark<=40){
//         console.log("Student has failed")
//     }
// }
// finalGrade(95);
// finalGrade(80);
// finalGrade(70);
// finalGrade(60);
// finalGrade(50);
// finalGrade(40);
// finalGrade(30);

function LeapYear(year){
    return((year%4==0)&&(year%100!=0)||(year%400==0));
}
function findMonth(month,year){
    if(month==2){
        if(LeapYear(year)){
            console.log("The Month has 29 Days")
        }
        else{
            console.log("The Month has 28 Days")
        }
    }
}
findMonth(2,2002);


