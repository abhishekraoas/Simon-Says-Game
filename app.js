let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("Game Started");
    started = true;
    
    levelUp();
  }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250); 
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250); 
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    
    console.log(randIdx);
    console.log(randColor);
    console.log(randomBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randomBtn);

}

function checkAns (idx){
    // console.log("Current Level : ", level);

    if(userSeq[idx]===gameSeq[idx]){
        // console.log("Same Value.");
        if(userSeq.length===gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b>. <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        
        reset();
    }
}

function buttonPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1); 
}

let allBtns  = document.querySelectorAll( ".btn" );
for(btn of allBtns){
    btn.addEventListener('click',buttonPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}