let interval;
let sliderClick = 0;
let awardClick = 0;
let articleClick = 0;
let intervals = 3000;
function sliderRight(){
    let slider1 = document.querySelector('#slider1');
    let slider2 = document.querySelector('#slider2');
    let slider3 = document.querySelector('#slider3');
    for(let i=1; i<=3; i++){
        document.getElementById('slider'+i).classList.remove('active');
    }
    sliderClick++;
    if(sliderClick == 3){
        slider1.classList.add('active');
        sliderClick = 0;
    }
    if(sliderClick == 1){
        slider2.classList.add('active');
    }    
    else if(sliderClick == 2){
        slider3.classList.add('active');
    }
}

function sliderLeft(){
    let slider1 = document.querySelector('#slider1');
    let slider2 = document.querySelector('#slider2');
    let slider3 = document.querySelector('#slider3');
    for(let i=1; i<=3; i++){
        document.getElementById('slider'+i).classList.remove('active');
    }
    if(sliderClick == 0){
        sliderClick = 3;
    }
    if(sliderClick == 2){
        slider2.classList.add('active');
        sliderClick--;
    }
    else if(sliderClick == 1){
        slider1.classList.add('active');
        sliderClick--;
    }
    else if(sliderClick == 3){
        slider3.classList.add('active');
        sliderClick = 2;
    }
}
 
function leftSlide(){
    let movingContainer1 = document.querySelector('#moving-container1');
    let movingContainer2 = document.querySelector('#moving-container2');
    let movingContainer3 = document.querySelector('#moving-container3');
    for(let i=1; i<=3;i++){
        document.getElementById('moving-container'+i).classList.remove('active-left');
        document.getElementById('moving-container'+i).classList.remove('active-award');
        document.getElementById('moving-container'+i).classList.remove('active-right');
    }
    if(awardClick == 0){
        awardClick = 3;
    }
    if(awardClick == 1){
        movingContainer1.classList.add('active-left');
        movingContainer2.classList.add('active-award');
        movingContainer3.classList.add('active-right');
        awardClick--;
    }
    else if(awardClick == 2){
        movingContainer2.classList.add('active-left');
        movingContainer3.classList.add('active-award');
        movingContainer1.classList.add('active-right');
        awardClick--;
    }
    else if(awardClick == 3){
        movingContainer3.classList.add('active-left');
        movingContainer2.classList.add('active-right');
        movingContainer1.classList.add('active-award');
        awardClick = 2;
    }
}

function rightSlide(){
    let movingContainer1 = document.querySelector('#moving-container1');
    let movingContainer2 = document.querySelector('#moving-container2');
    let movingContainer3 = document.querySelector('#moving-container3');
    for(let i=1; i<=3;i++){
        document.getElementById('moving-container'+i).classList.remove('active-left');
        document.getElementById('moving-container'+i).classList.remove('active-award');
        document.getElementById('moving-container'+i).classList.remove('active-right');
    }
    awardClick++;
    if(awardClick == 1){
        movingContainer1.classList.add('active-right');
        movingContainer2.classList.add('active-left');
        movingContainer3.classList.add('active-award');
    }
    else if(awardClick == 2){
        movingContainer2.classList.add('active-right');
        movingContainer3.classList.add('active-left');
        movingContainer1.classList.add('active-award');
    }
    else if(awardClick == 3){
        movingContainer3.classList.add('active-right');
        movingContainer1.classList.add('active-left');
        movingContainer2.classList.add('active-award');
        awardClick = 0;
    }
}

setInterval(rightSlide,3000);

function optionClick(element){
    let allSegment = document.querySelectorAll('.square-segment');
    for(let i = 0; i < allSegment.length; i++){
        allSegment[i].classList.remove('clicked');
    }
    element.classList.add('clicked');
}

function removeClick(e){
    let allSegment = document.querySelectorAll('.square-segment');
    for(let i = 0; i < allSegment.length; i++){
        if(!(e.target.classList.contains('selected') || e.target.classList.contains('after-div'))){
            allSegment[i].classList.remove('clicked');
        }
    }
}

function colorCheck(element){
    let firstbox = document.querySelector('.first-box');
    let secondbox = document.querySelector('.second-box');
    if(element.classList.contains('color')){
        if(element.classList.contains('first-box')){
            secondbox.classList.remove('color');
        }
        else if(element.classList.contains('second-box')){
            firstbox.classList.remove('color')
        }
    }
    else if(!(element.classList.contains('color'))){
        if(element.classList.contains('first-box')){
            firstbox.classList.add('color');
            secondbox.classList.remove('color');
        }
        else if(element.classList.contains('second-box')){
            secondbox.classList.add('color');
            firstbox.classList.remove('color')
        }
    }
}

function selectedOption(element,selection){
    document.getElementById(selection).innerText = element.innerText;
}

function articlesSlider(){
    let slider1 = document.querySelector('#s1');
    let slider2 = document.querySelector('#s2');
    let slider3 = document.querySelector('#s3');
    let slider4 = document.querySelector('#s4');
    let slider5 = document.querySelector('#s5');
    for(let i=1; i<=5; i++){
        for(let j=1; j<=5; j++){
            document.getElementById('s'+i).classList.remove('article-slider'+j);
        }
        document.getElementById('td'+i).classList.remove('black-active')
    }
    articleClick++;
    if(articleClick == 1){
        td2.classList.add('black-active');
        slider1.classList.add('article-slider5');
        slider2.classList.add('article-slider1');
        slider3.classList.add('article-slider2');
        slider4.classList.add('article-slider3');
        slider5.classList.add('article-slider4');
    }
    else if(articleClick == 2){
        td3.classList.add('black-active');
        slider1.classList.add('article-slider4');
        slider2.classList.add('article-slider5');
        slider3.classList.add('article-slider1');
        slider4.classList.add('article-slider2');
        slider5.classList.add('article-slider3');
    }
    else if(articleClick == 3){
        td4.classList.add('black-active');
        slider1.classList.add('article-slider3');
        slider2.classList.add('article-slider4');
        slider3.classList.add('article-slider5');
        slider4.classList.add('article-slider1');
        slider5.classList.add('article-slider2');
    }
    else if(articleClick == 4){
        td5.classList.add('black-active');
        slider1.classList.add('article-slider2');
        slider2.classList.add('article-slider3');
        slider3.classList.add('article-slider4');
        slider4.classList.add('article-slider5');
        slider5.classList.add('article-slider1');
    }
    else if(articleClick == 5 || articleClick == 0){
        td1.classList.add('black-active');
        slider1.classList.add('article-slider1');
        slider2.classList.add('article-slider2');
        slider3.classList.add('article-slider3');
        slider4.classList.add('article-slider4');
        slider5.classList.add('article-slider5');
        articleClick = 0;
    }
    if(intervals == 100){
        clear();
        intervals = 3000;
        mainInterval(intervals);
    }
}

function getArticle(element){
    clear();
    intervals = 100;
    if(element.classList.contains('td1')){
        articleClick = 4;
    }
    else if(element.classList.contains('td2')){
        articleClick = 0;
    }
    else if(element.classList.contains('td3')){
        articleClick = 1;
    }
    else if(element.classList.contains('td4')){
        articleClick = 2;
    }
    else if(element.classList.contains('td5')){
        articleClick = 3;
    }
    mainInterval(intervals);
}
function clear(){
    clearInterval(interval);
}
function mainInterval(intervals){
    console.log(intervals)
    interval = setInterval(articlesSlider,intervals);
}

mainInterval(intervals);
function callCard(num,profile){
    let element = document.getElementById(num);
    let profiles = document.getElementById(profile);
    let allCards = document.querySelectorAll('.cards');
    let allProfiles = document.querySelectorAll('.profile');
    for(let i = 0; i < allCards.length; i++){
        allCards[i].classList.remove('active-card');
        allProfiles[i].classList.remove('active-profile');
    }
    element.classList.add('active-card');
    profile.classList.add('active-profile');
}