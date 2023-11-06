var timer =60;
var score=0;
var hit=0;

function s(){
    score += 10;
    document.querySelector(".upcontent #score").textContent=score;
}
function clock(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".upcontent #Timer").textContent=timer;
        }else{
            clearInterval(timer);
            document.querySelector("#dowpanel").innerHTML=`<h1 id="center">Score :-> ${score}`;
        }
    },1000);
}
function makebubble(){
    var ball="";

for(var i=1;i<=102;i++){
    var rn=Math.floor(Math.random()*10)
     ball+=`<div class="ball">${rn}</div>`;
}
document.querySelector("#dowpanel").innerHTML=ball;
}
function getnewhit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector(".upcontent #hit").textContent=hit;
    makebubble();
}
document.querySelector("#dowpanel").addEventListener("click",function(details){
    var num=Number(details.target.textContent);
    if(num===hit){
        s();
        getnewhit();
    }else{
        getnewhit();
    }
})
makebubble();
clock();
getnewhit();
document.querySelector("#main button").addEventListener("click",function(){
    score=0;
    makebubble();
    getnewhit();
    timer=60;
})







