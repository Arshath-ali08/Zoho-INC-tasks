let ball = document.getElementById('ball');
let paddle = document.getElementById('paddle');
let scorer = document.querySelector('#score');
let life = document.querySelector('#life');
let levels = document.querySelector('#level');
let dx = 1;
let dy = 1;
let interval;
let intervalTimer;
let rightPress = false;
let leftPress = false;

let score = 0;
let paddleHitting = 1;
let countHit = 1;
let countBricks = 0;
let sco = 0;
let lives = 3;
let totalBricks = 60;
let intervalTime = 60;
let level = 1;
let userName;

let brickContainer = document.querySelector('#brickContainer');
for(let i = 0; i < totalBricks; i++){
    let div = document.createElement('div');
    div.setAttribute('class','brick')
    brickContainer.appendChild(div)
}

let start = document.querySelector('#start');
let mainMenu = document.querySelector('#main-menu');
let container = document.querySelector('.container-game')
let playerNameDiv = document.querySelector('#playerNameDiv');
let playBtn = document.querySelector('#playBtn');
let player = document.querySelector('#player')

start.addEventListener('click',()=>{
    mainMenu.style.display = 'none';
    playerNameDiv.style.display = 'block';
})

playBtn.addEventListener('click',()=>{
    let mouseControl = document.querySelector('#mouseControl');
    let keyboardControl = document.querySelector('#keyboardControl');
    let inputText = document.querySelector('#playerNameInput')
    userName = inputText.value
    console.log(inputText.value);
    if(inputText.value ==''){
        console.log('name cannot be empty')
    }
    else if(inputText.value =!'' && (mouseControl.checked || keyboardControl.checked)){
        playerNameDiv.style.display = 'none';
        container.style.display = 'block';
        if(mouseControl.checked){
            mouseOption();
        }
        else if(keyboardControl.checked){
            keyboardOption();
        }
        player.textContent = 'Player : ' + userName;
        timeRun();
        mainIntervalRun(intervalTime);
    }
})

let about = document.querySelector('#about');
about.addEventListener('click',()=>{
    let aboutDisplay = document.querySelector('#aboutMe');
    aboutDisplay.style.display = 'block';
})

function keyboardOption(){
    document.addEventListener('keydown',(e)=>{
        if(e.key == 'ArrowRight' || e.key == 'd'){
            rightPress = true;
        }
        else if(e.key == 'ArrowLeft' || e.key == 'a'){
            leftPress = true;
        }
    })
    document.addEventListener('keyup',(e)=>{
        if(e.key == 'ArrowRight' || e.key == 'd'){
            rightPress = false;
        }
        else if(e.key == 'ArrowLeft' || e.key == 'a'){
            leftPress = false;
        }
    })
}

function mouseOption(){
    document.addEventListener('mousemove',(e)=>{
        let mouseX = e.clientX;
        if(mouseX > 6 && mouseX < innerWidth -136){
            paddle.style.left = mouseX + 'px';
        }
    })
}

function ballMove(){
    let ballPosition = ball.getBoundingClientRect();
    ball.style.left = (ballPosition.left+(10*dx)) + 'px';
    ball.style.top = (ballPosition.top-(10*dy)) + 'px';
}

function changeDirection(){
    let ballPosition = ball.getBoundingClientRect();
    if(ballPosition.left < 20 || ballPosition.right > innerWidth - 20){
        dx = -dx;
    }
    if(ballPosition.top < 50){
        dy = -dy;
    }
    else if(ballPosition.bottom > innerHeight-5){
        lives--;
        if(!lives){
            gameOver();
        }
        else{
            paddleHitting = 1;
            ball.style.left = 700 + 'px';
            ball.style.top = 680 + 'px';
            dy = -dy;
        }
    }
}

function paddleHit(){
    let paddlePosition = paddle.getBoundingClientRect();
    let ballPosition = ball.getBoundingClientRect();
    if(ballPosition.bottom > paddlePosition.top && paddlePosition.left < ballPosition.right && paddlePosition.right > ballPosition.left){
        if(paddlePosition.left+25>ballPosition.left+15){
            dx = -2;
            dy = -0.5;
        }
        else if(paddlePosition.left+25 < ballPosition.left+15 && paddlePosition.left+50 > ballPosition.left+15){
            dx = -1;
        }
        else if(paddlePosition.left+50 < ballPosition.left+15 && paddlePosition.left+80 > ballPosition.left+15){
            dx = 0;
        }
        else if(paddlePosition.left+80 < ballPosition.left+15 && paddlePosition.left+105 > ballPosition.left+15){
            dx = 1;
        }
        else if(paddlePosition.left+105 < ballPosition.left+15 && paddlePosition.right > ballPosition.left){
            dx = 2;
            dy = -0.5;
        }
        dy = -dy;
        paddleHitting = 1;
        sco = 0;
        // moving direction angle deflections
    }
}

function collisionDetection(){
    let bricks = Array.from(document.getElementsByClassName('brick'));
    let ballPosition = ball.getBoundingClientRect();

    bricks.forEach(brick => {
        brickPosition = brick.getBoundingClientRect();
        
        removedBrick = brick.classList.contains('removeBrick');
        if(ballPosition.top < brickPosition.bottom && ballPosition.left < brickPosition.right && ballPosition.right > brickPosition.left
            && ballPosition.bottom > brickPosition.top && !removedBrick){
            countBricks++;
            brick.style.visibility = 'hidden';
            brick.classList.add('removeBrick');
            // work on this
            // console.log(brickPosition,x,y,height)
            console.log(brickPosition)
            if(paddleHitting){
                countHit = 1;
                score+=10;
            }
            else if(paddleHitting == 0){
                countHit+=1;
                sco = countHit*10;
            }
            paddleHitting = 0;
            score = score+sco;
            dy = -dy;
        }
        if(countBricks == totalBricks){
            console.log('level up');
            level++;
            levelUp();
        }
    });
}

function levelUp(){
    totalBricks = countBricks;
    countBricks = 0;
    brickContainer.innerHTML='';
    intervalTime = intervalTime -15;
    for(let i = 0; i < totalBricks; i++){
        let div = document.createElement('div');
        div.setAttribute('class','brick')
        brickContainer.appendChild(div)
    }
    ball.style.left = 700 + 'px';
    ball.style.top = 600 + 'px';
    dy = -dy
    if(level > 3){
        let finalScore = document.querySelector('#finalScore');
        container.style.display = 'none';
        let winMsg = document.querySelector('.winningMsg');
        winMsg.style.display = 'block';
        finalScore.textContent = userName + " score is " + score;
        console.log('You won')
    }
    mainIntervalRun(intervalTime);
}

function gameOver(){
    let gameDisplay = document.querySelector('.gameDisplay')
    let gameOverElement = document.querySelector('#gameOverDiv');
    let retryIcon = document.querySelector('#retryIcon');
    gameDisplay.style.display = 'none'
    gameOverElement.style.display = 'block';
    retryIcon.addEventListener('click',()=>{
        location.reload();
    })
}

function main(){
    ballMove();
    changeDirection();
    paddleHit();
    collisionDetection();
    let paddlePosition = paddle.getBoundingClientRect();
    if(rightPress && paddlePosition.right < innerWidth-25){
        paddle.style.left = paddlePosition.left + 25 + 'px';
    }
    if(leftPress && paddlePosition.left > 25){
        paddle.style.left = paddlePosition.left -25 + 'px';
    }
    scorer.textContent = "Score : " + score;
    life.textContent = "Lives : " + lives;
    levels.textContent= "Level : " + level;
}

let mins = document.querySelector('#minutes');
let secs = document.querySelector('#seconds');
let min = 0, sec = 0;
function setTimer(){
    let secStr = sec, minStr = min;
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }
    minStr = (min < 10) ? '0' + min: min;
    secStr = (sec < 10) ? '0' + sec: sec;
    mins.textContent = minStr;
    secs.textContent= secStr;
}
function timeRun(){
    intervalTimer = setInterval(setTimer,1000);
}

function mainIntervalRun(intervalTime){
    console.log(intervalTime);
    interval = setInterval(main,intervalTime);
}
function mainIntervalPause(){
    clearInterval(interval);
}
