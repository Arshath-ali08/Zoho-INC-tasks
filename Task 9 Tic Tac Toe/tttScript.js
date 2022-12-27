let element = document.getElementsByClassName('rowElement');
let reset = document.getElementById('reset');
let display = document.getElementById('display');

let r00 = document.getElementById('row00');
let r01 = document.getElementById('row01');
let r02 = document.getElementById('row02');

let r10 = document.getElementById('row10');
let r11 = document.getElementById('row11');
let r12 = document.getElementById('row12');

let r20 = document.getElementById('row20');
let r21 = document.getElementById('row21');
let r22 = document.getElementById('row22');

let click = 1;

for(let i = 0; i < element.length; i++){
    element[i].addEventListener('click',()=>{
        if(click % 2 == 0){
            element[i].innerHTML = "X";
        }
        else{
            element[i].innerHTML = "O";
        }
        console.log(click)
        if(click == 9){
            result();
            if(display.innerText == '' || display.innerText == 'Waiting for the winner...'){
                display.innerText = 'No winners';
            }
        }
        else if(click >= 5){
            result();
        }
        click++;
    })
}

reset.addEventListener('click', ()=>{
    for(let i = 0; i < element.length; i++){
        element[i].innerHTML = '';
        display.innerHTML = '';
        click = 1;
    }
})

function result(){
    if(r00.innerHTML == 'X' && r01.innerHTML == 'X' && r02.innerHTML == 'X'
    || r10.innerHTML == 'X' && r11.innerHTML == 'X' && r12.innerHTML == 'X'
    || r20.innerHTML == 'X' && r21.innerHTML == 'X' && r22.innerHTML == 'X'
    || r00.innerHTML == 'X' && r10.innerHTML == 'X' && r20.innerHTML == 'X'
    || r01.innerHTML == 'X' && r11.innerHTML == 'X' && r21.innerHTML == 'X'
    || r02.innerHTML == 'X' && r12.innerHTML == 'X' && r22.innerHTML == 'X'
    || r00.innerHTML == 'X' && r11.innerHTML == 'X' && r22.innerHTML == 'X'
    || r02.innerHTML == 'X' && r11.innerHTML == 'X' && r20.innerHTML == 'X'){
        display.innerHTML = 'X is the winner';
    }
    else if(r00.innerHTML == 'O' && r01.innerHTML == 'O' && r02.innerHTML == 'O'
    || r10.innerHTML == 'O' && r11.innerHTML == 'O' && r12.innerHTML == 'O'
    || r20.innerHTML == 'O' && r21.innerHTML == 'O' && r22.innerHTML == 'O'
    || r00.innerHTML == 'O' && r10.innerHTML == 'O' && r20.innerHTML == 'O'
    || r01.innerHTML == 'O' && r11.innerHTML == 'O' && r21.innerHTML == 'O'
    || r02.innerHTML == 'O' && r12.innerHTML == 'O' && r22.innerHTML == 'O'
    || r00.innerHTML == 'O' && r11.innerHTML == 'O' && r22.innerHTML == 'O'
    || r02.innerHTML == 'O' && r11.innerHTML == 'O' && r20.innerHTML == 'O'){
        display.innerHTML = 'O is the winner';
    }
    else{
        display.innerHTML = 'Waiting for the winner...';
    }
}
