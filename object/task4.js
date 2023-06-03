let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

var heading=document.getElementById("heading");
heading.textContent=recipeObj.title;
heading.style.color="red";

var img=document.getElementById("imgid");
img.src=recipeObj.imgSrc;
img.style.width="30%";


var ul=document.getElementById("ulid");
ul.style.backgroundColor="RGB(35, 41, 82)";
ul.style.color="white";
ul.style.width="27%";
ul.style.padding="20px";
let store=recipeObj.ingredients;

for(let i of store)
{
    var list=document.createElement("li");
    list.textContent=i;
    ul.appendChild(list);

}