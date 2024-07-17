//  let gameSeq = [];
//  let userSeq = [];

// let btn = document.querySelector(".btn");

// let btns = ["yellow","red","purple","green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     if(started == false){
//         console.log("game started");
//         started = true;
//     }

//     levelup();
// });

// // function btnFlash (btn) {
// //     btn.classList.add("flash");
// //     setTimeout(function () {
// //         btn.classList.remove("flash");
// //     },250);
// // }

// // function levelup(){
// //     level++;
// //     h2.innerText = "Level "+level;

// //     let randomIdx = Math.floor(Math.random() * 3);
// //     let randColor = btns[randomIdx];
// //     let randBtn = document.querySelector(randColor);
// //     console.log(randomIdx);
// //     console.log(randColor);
// //     console.log(randBtn);

// //     // random btn choose 
// //     btnFlash(randBtn);
// // }

// function levelup(){
//     level++;
//     h2.innerText = "Level " + level;

//     let randomIdx = Math.floor(Math.random() * btns.length);  // Adjusted to btns.length
//     let randColor = btns[randomIdx];
//     let randBtn = document.querySelector(`.${randColor}`);  // Added dot to select class
//     console.log(randomIdx);
//     console.log(randColor);
//     console.log(randBtn);

//     // random btn choose 
//     btnFlash(randBtn);
// }

let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if( userSeq.length == gameSeq.length ){
           setTimeout(levelUp, 1000);
        }

    } else {
        h2.innerHTML=`Game Over! Your score was <b> ${level}</b> 
        <br>Press any key to start the game.`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();

    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns( userSeq.length-1 );
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
} 