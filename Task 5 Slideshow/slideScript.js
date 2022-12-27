let prev;
let next;
let index = 0;

function display(e){
    let images = document.querySelectorAll('.image');
    let prevDisplay = document.querySelector('.prev');
    let nextDisplay = document.querySelector('.next')
    prev = index-1;
    next = index+1;
    if(e.button == 0){
        images[index].style.display = 'none';
        images[next].style.display = 'block';
        nextDisplay.style.backgroundColor = '#aabdac'
        prevDisplay.style.backgroundColor = '#fff'
        index++;
    }
    else if(e.button == 2){
        images[prev].style.display = 'block';
        prevDisplay.style.backgroundColor = '#aabdac'
        nextDisplay.style.backgroundColor = '#fff'
        index--;
    }
}

document.addEventListener('keydown', (e)=>{
    let images = document.querySelectorAll('.image');
    let prevDisplay = document.querySelector('.prev');
    let nextDisplay = document.querySelector('.next')
    prev = index-1;
    next = index+1;
    if(e.code == 'ArrowUp' || e.code == 'ArrowRight'){
        images[index].style.display = "none";
        images[next].style.display = 'block';
        nextDisplay.style.backgroundColor = '#aabdac'
        prevDisplay.style.backgroundColor = '#fff'
        index++;
    }
    else if(e.code == 'ArrowDown' || e.code == 'ArrowLeft'){
        images[prev].style.display = 'block';
        prevDisplay.style.backgroundColor = '#aabdac'
        nextDisplay.style.backgroundColor = '#fff'
        index--;
    }
});
