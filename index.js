var number=Math.floor(Math.random()*6)+1;
var randomImg="images/dice"+number+".png";
var img=document.querySelectorAll("img")[0];
img.setAttribute("src",randomImg);



var  number2=Math.floor(Math.random()*6)+1;
console.log(number2)
var randomImg2="images/dice"+number2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImg2);


if(number>number2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(number<number2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";

}
else{
    document.querySelector("h1").innerHTML="Draw!"
}