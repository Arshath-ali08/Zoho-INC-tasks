let snakeContainer = document.querySelector('.snakeContainer');
let snakeElement;
let interval;
let isKeyPress = false;
let snake = [{x:20,y:20}];
let previousKeyPress;
let snakeDirection = null;
let foodPosition = {x:20,y:25};
let yFoodPosition = {x:12,y:12};
let food;
let score = 0;
let redFruit = 10;
let yellowFruit = 20;
let countFoodEaten = 0;
let space =0;
let enter =1;
let countTime = 0;
let intervalTime = 110;
let scoreDisplay = document.querySelector('#scoreBoard')
let timeYellow;
let snakeEatPower = false;
let yFoodEat = false;
let powerUpStage = false;
let snakeEatYellowFood = false;
let timersOn = false;
let timerOn = 0;
let timerOnDF = 0;
let moveSpeedTimer = 0;
let gamePower = 0;
let ywFood = false;
let isPowerEaten = false;
let doubleFoodEat = false;
let snakeReduce = false;
let powerUpFood;
let randomMethod;
let randomPowerCount = false;
let randomPowerSelection = false;
let val4 = 0;
let a;
let mainMenu = document.querySelector('.main-menu');
let gameContainer = document.querySelector('.gameContainer');
let startBtn = document.querySelector('#start');
let playerNameSection = document.querySelector('.playerNameSection')
let startPlayBtn = document.querySelector('.startPlayBtn');
let aboutBtn = document.querySelector('#about');
let aboutMe = document.querySelector('.aboutMe');
let inputPlayerName = document.querySelector('.player-name');
let powerSelection = document.querySelector('.powerSelection');

startBtn.addEventListener('click',()=>{
    mainMenu.style.display = 'none';
    playerNameSection.style.display = 'block';
})

aboutBtn.addEventListener('click',()=>{
    aboutMe.classList.toggle('activeAbout');
})
startPlayBtn.addEventListener('click',()=>{
    if(inputPlayerName.value == ""){
        console.log('enter name');
    }
    else if(inputPlayerName.value != ''){
        playerNameSection.style.display = 'none';
        gameContainer.style.display = 'block';
        mainInterval(intervalTime);
        mainTimer();
    }
})

document.addEventListener('keydown',(e)=>{
    switch(true){
        case e.key == 'ArrowUp' && previousKeyPress != 'up' && previousKeyPress != 'down':
            previousKeyPress= 'up';
            snakeDirection = {x:0,y:-1}
            break;
        case e.key == 'ArrowDown' && previousKeyPress != 'up' && previousKeyPress != 'down':
            previousKeyPress = 'down'
            snakeDirection = {x:0,y:1}
            break;
        case e.key == 'ArrowLeft' && previousKeyPress != 'left' && previousKeyPress != 'right':
            previousKeyPress = 'left'
            snakeDirection = {x:-1,y:0}
            break;
        case e.key == 'ArrowRight' && previousKeyPress != 'left' && previousKeyPress != 'right':
            previousKeyPress = 'right'
            snakeDirection = {x:1,y:0}
            break;
        case e.code =='Space'&& space == 0:
            space = 1;
            enter = 0;
            mainClearInterval();
            clearTimer();
            break;
        case e.code == 'Enter' && enter == 0:
            enter = 1;
            space = 0;
            mainInterval(intervalTime);
            mainTimer();
            break;  
    }
})

function drawSnake(){
    snakeContainer.innerHTML ='';
    snake.forEach(element => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.classList.add('snakeElement')
        snakeContainer.appendChild(snakeElement);
    });
    if(snake[0].x > 40 || snake[0].x < 1 || snake[0].y > 40 || snake[0].y < 1){
        gameOver();
    }
}

function snakeMove(){
    let element = JSON.parse(JSON.stringify(snake))
    for(let i = 1; i < snake.length; i++){
        snake[i] = JSON.parse(JSON.stringify(element[i-1]));
    }
    if(snakeDirection == null){
        snakeDirection = {x:1,y:0};
    }
    snake[0].x = snake[0].x + snakeDirection.x;
    snake[0].y = snake[0].y + snakeDirection.y;
    // snake biting on their body
    for(let i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            console.log('GAme over')
            gameOver();
        }
    }
}

function drawFood(){
    food = document.createElement('div');
    food.style.gridRowStart = foodPosition.y;
    food.style.gridColumnStart = foodPosition.x;
    food.classList.add('foodElement')
    snakeContainer.appendChild(food);
}

function isSnakeEaten(){
    if(snake[0].x == foodPosition.x && snake[0].y == foodPosition.y){
        score+=redFruit;
        getFoodPosition();
        countFoodEaten++;
        snake.push(snake[0]);
    }
    else if(snake[0].x == yFoodPosition.x && snake[0].y == yFoodPosition.y){
        yFoodEat = true;
        score+=yellowFruit;
        ywFood = false;
        getYFoodPosition();
        countFoodEaten++;
        snake.push(snake[0]);  
    }
    else if(snakeEatYellowFood){
        score+=yellowFruit;
        snake.push(snake[0]);
    }
    if(countFoodEaten!=0 && countFoodEaten%10 == 0 && !isPowerEaten){
        if(!(randomPowerCount)){
            getRandomPowerUpPosition();
            randomPowerCount = true;
            console.log('randomPowerCount' + randomPowerCount);
        }
        powerUP();
    }
}

function getFoodPosition(){
    foodPosition = {x:Math.floor(Math.random()*38 + 1),y:Math.floor(Math.random()*38+1)};
}
function getYFoodPosition(){
    yFoodPosition = {x:Math.floor(Math.random()*38+1),y:Math.floor(Math.random()*38+1)};
}
function getRandomPowerUpPosition(){
    powerUpFood = {x:Math.floor(Math.random()*38+1),y:Math.floor(Math.random()*38+1)};
}
function getRandomPowerSelection(){
    randomMethod = Math.floor(Math.random()*5+1); 
    return randomMethod;
}
function yellowFood(){
    if(ywFood){
        let yFood = document.createElement('div');
        yFood.style.gridRowStart = yFoodPosition.y;
        yFood.style.gridColumnStart = yFoodPosition.x;
        yFood.classList.add('yellowFoodElement')
        snakeContainer.appendChild(yFood);
        console.log(yFoodPosition);
        // yFoodEat = false;
    }
}

function powerUP(){
    let verticalTravel;
    console.log('powerUpsss');
    let power = document.createElement('div');
    verticalTravel = powerUpFood.x++;
    if(verticalTravel>39){
        powerUpFood.x = 1;
    }
    power.style.gridRowStart = powerUpFood.y;
    power.style.gridColumnStart = verticalTravel;
    power.classList.add('powerUp');
    // snakeEatPowerUp
    if((snake[0].y == powerUpFood.y && snake[0].x == verticalTravel) || (snake[1].y == powerUpFood.y && snake[1].x == verticalTravel)){
        snakeEatPower = true;
        randomPowerSelection = true;
        console.log('eatenPower');
    }
    snakeContainer.appendChild(power);
}

function yellowFullFood(){
    let yellowFoodAll;
    if(timerOn){
        for(let i = 1; i <= 40; i++){
            for(let j = 1; j <= 40; j++){
                yellowFoodAll = document.createElement('div');
                yellowFoodAll.classList.add('yellowFull')
                yellowFoodAll.style.gridRowStart = i;
                yellowFoodAll.style.gridColumnStart = j;
                snakeContainer.appendChild(yellowFoodAll);
                if(snake[0].x == i && snake[0].y == j){
                    snakeEatYellowFood = true;
                }
            }
        } 
    }
}

function doubleFood(){
    if(timerOnDF && doubleFoodEat){
        redFruit = 20;
        yellowFruit = 40;
    }
}

function reducedSnakeSize(){
    let reducedSnake = Math.floor(snake.length/100*20);
    console.log(reducedSnake)
    snake.length -= reducedSnake;
    console.log('as')
    console.log(powerSelection.textContent)
    powerSelection.textContent = 'None';
    snakeEatPower = false;
    // isPowerEaten = true;
    console.log(powerSelection.textContent);
}

function decreaseMovingSpeed(){
    if(moveSpeedTimer){
        mainClearInterval();
        intervalTime = 250;
        mainInterval(intervalTime);
        console.log('decrease')
    }
}

function powerUpSelection(){
    isPowerEaten = true;
    if(randomPowerSelection){
        a = getRandomPowerSelection();
        randomPowerSelection = false;
    }
    console.log(a)
    switch(a){
        case 1:
            timerOn = 1;
            yellowFullFood();
            powerSelection.textContent = 'Yellow Full Food';
            console.log('yellowFullFood');
            break;
        case 2:
            timerOnDF = 1;
            doubleFoodEat = true;
            doubleFood();
            powerSelection.textContent = 'Double Food';
            console.log("doubleFood")
            break;
        case 3:
            snakeReduce = true;
            powerSelection.textContent = 'Reduced Snake Size'; 
            isPowerEaten = true; 
            reducedSnakeSize();
            snakeEatPower = false;
            console.log('reducedsnake');
            break;
        case 4:
            moveSpeedTimer = 1;
            powerSelection.textContent = 'Reduced Snake Speed';
            console.log('reduce speed');
            decreaseMovingSpeed();
            break;
        case 5:
            gamePower = 1;
            powerSelection.textContent = 'Game Over Power';
            console.log('gamePOwer')
            break;
        default:
            console.log('powerUpSelection')
    }
}

function gameOver(){
    if(!(gamePower)){
        alert('game');
        clearTimer();
        mainClearInterval();
    }
}

function main(){
    drawSnake();
    snakeMove();
    drawFood();
    isSnakeEaten();
    yellowFood();
    if(snakeEatPower){
        powerUpSelection(); 
    }
    console.log(score);
    scoreBoard.textContent = 'Score : ' + score;
}

let timeDisplay = document.querySelector('#timer')
let mins = document.querySelector('#minutes');
let secs = document.querySelector('#seconds');
let min = 0, sec = 0, val = 0,val1 = 0, val2 = 0, val3 = 0,yval = 0;

function setTimer(){
    let secStr = sec, minStr = min;
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }
    minStr = (min < 10) ? '0' + min: min;
    secStr = (sec < 10) ? '0' + sec: sec;
    if(parseInt(minStr)%2 == 0 && parseInt(minStr)!=0){
        ywFood = true;
    }
    else{
        ywFood = false;
    }
    mins.textContent = minStr;
    secs.textContent= secStr;
    if(timerOn!=0){
        val++;
        if(val > 5){
            timerOn = 0;
            snakeEatYellowFood = false;
            snakeEatPower = false;
            isPowerEaten = false;
            randomPowerCount = false;
            powerSelection.textContent = 'None';
            val = 0;
        }
        console.log(val)
    }
    else if(timerOnDF){
        val1++;
        if(val1 > 10){
            timerOnDF = 0;
            doubleFoodEat = false;
            snakeEatPower = false;
            randomPowerCount = false;
            redFruit = 10;
            yellowFruit = 20;
            isPowerEaten = false;
            powerSelection.textContent = 'None';
            val1 = 0;
        }
        console.log(val1)
    }
    else if(moveSpeedTimer){
        val2++;
        if(val2 > 30){
            moveSpeedTimer = 0;
            snakeEatPower = false;
            randomPowerCount = false;
            mainClearInterval();
            intervalTime = 130;
            mainInterval(intervalTime);
            isPowerEaten = false;
            powerSelection.textContent = 'None';
            val2 = 0;
        }
        console.log(val2);
    }
    else if(gamePower){
        val3++;
        if(val3 > 30){
            gamePower = 0;
            snakeEatPower = false;
            isPowerEaten = false;
            randomPowerCount = false;
            powerSelection.textContent = 'None';
            val3 = 0;
        }
    }
    else if(snakeReduce){
        val4++;
        if(val4 > 15){
            snakeReduce = false;
            isPowerEaten = false;
            randomPowerCount = false;
            val4 = 0;
        }
    }
}
let timerInt;
function mainInterval(intervalTime){
    interval = setInterval(main,intervalTime);
}
function mainClearInterval(){
    clearInterval(interval);
}
function mainTimer(){
    timerInt = setInterval(setTimer,1000);
}
function clearTimer(){
    clearInterval(timerInt)
}