var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","disney");
input.setAttribute("placeholder","ID Number");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);

let nam=document.createElement("div");
nam.setAttribute("id","name");
let films=document.createElement("div");
films.setAttribute("id","films");
let tvshows=document.createElement("div");
tvshows.setAttribute("id","tvshows");
let images=document.createElement("div");
images.setAttribute("id","images");


div.append(input,button,nam,films,tvshows,images);
document.body.append(div);

async function foo(){
    
    let disney=document.getElementById("disney").value;
    var url=`https://api.disneyapi.dev/characters/${disney}`;
    
    let result=await fetch(url);
    let result1=await result.json();

    console.log(result1);
    nam.innerHTML=`Name:${result1.name}`
    films.innerHTML=`Films:${result1.films}`
    tvshows.innerHTML=`TV SHOWS:${result1.tvShows}`
    images.innerHTML=`<div><img src="${result1.imageUrl}"</div>`

   

}