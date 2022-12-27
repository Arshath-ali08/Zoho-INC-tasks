let movebtn = document.querySelector('#move');
let pausebtn = document.querySelector('#pause');
let resetbtn = document.querySelector('#reset');
let img = document.querySelector('#img');
let num = 0;
let nums = window.innerWidth-290;
let interval1;

movebtn.addEventListener('click',()=>{
    interval1 = setInterval(loop, 10);
})

function loop(){
    if(num >= 0 && num < window.innerWidth-290){
        num++;
        img.style.marginLeft = num +'px';
        nums--;
        console.log(num,nums)
    }
    else if(nums==0){
        nums--;
        img.style.marginLeft = nums+'px';
    }
}

pausebtn.addEventListener('click', ()=>{
    clearInterval(interval1);
})

resetbtn.addEventListener('click', ()=>{
    clearInterval(interval1);
    interval1 = 0;
    num = 0;
    nums = 0;
    img.style.marginLeft = num + 'px';
})
