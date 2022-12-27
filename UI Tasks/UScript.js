let expandTag = document.querySelector('.expandTag');
let sidebar = document.querySelector('.sidebar');
let navigator = document.querySelector('.navigator');
let navigatorBfore = document.querySelector('.navigator-before');
let navigatorAfter = document.querySelector('.navigator-after');
let blue = document.querySelectorAll('.blueImg');
let white = document.querySelectorAll('.whiteImg');
let icons = document.querySelectorAll('.navigatorIcons');
let wholeContainer = document.querySelector('.wholeContainer');
let navele = document.querySelector('.navigatorElements')
let theme = document.querySelector('.themes');
let body = document.querySelector('body');

theme.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
})
function expanded(){
    if(expandTag.classList.contains('closingTag')){
        closingFn();
    }  
    else{
        expandTag.style.marginLeft = "100px";
        sidebar.classList.add('sideBarNew');
        expandTag.classList.add('closingTag');
        navigator.classList.add('transforms');
        navigatorBfore.classList.add('transforms');
        navigatorAfter.classList.add('transforms');
        wholeContainer.style.marginLeft = '100px';
        for(let i=0; i < 5; i++){
            white[i].style.display = 'none';
            blue[i].style.display = 'block';
            icons[i].addEventListener('click',()=>{
                white[i].style.display = 'block';
                blue[i].style.display = 'none';
                icons[i].classList.add("navigatorExtend");
            })
        }
    }
}

function closingFn(){
    expandTag.style.marginLeft = "0px";
    sidebar.classList.remove('sideBarNew');
    expandTag.classList.remove('closingTag');
    navigator.classList.remove('transforms');
    navigatorBfore.classList.remove('transforms');
    navigatorAfter.classList.remove('transforms');
    wholeContainer.style.marginLeft = '0px'
    for(let i=0; i < 5; i++){
        icons[i].classList.remove('navigatorExtend')
        white[i].style.display = 'block';
        blue[i].style.display = 'none';    
    }
}

let container = document.querySelector('.container');
let mblBtn = document.querySelector('.mobileBtn');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.close');
let OTPbtn = document.querySelector('.sendOTPBtn');
let otpContainer1 = document.querySelector('.popupContainer1');
let otpContainer2 = document.querySelector('.popupContainer2');
let verify = document.querySelector('.verifyBtn');
let changeNum = document.querySelector('.changeNumBtn');
let popupContainers = document.querySelector('.popupContainers')
let mobileNum = document.querySelector('#mobileNum');

mblBtn.addEventListener('click',()=>{
    // popupContainers.style.visibility = 'visible';
    // popupContainers.style.opacity = '1';
    // container.style.overflow = 'hidden';
    mobileNum.value = '';
    popupContainers.style.display ='block'
    otpContainer1.style.opacity = '1';
    otpContainer1.style.top = "220px";
})

closeIcon.addEventListener('click',()=>{
    popupContainers.style.display = 'none';
    otpContainer1.style.opacity = '0';
    otpContainer2.style.opacity = '0';

})

OTPbtn.addEventListener('click',()=>{
    let value = mobileNum.value;
    if(value==''){
        console.log('enter nmbr')
    }
    else if(value !='' &&  value.length == 10){
        otpContainer1.style.opacity = '0'
        otpContainer1.style.top = "700px"
        otpContainer2.style.opacity= '1';
        otpContainer2.style.top = "200px"
    }
})
let digits = document.querySelectorAll('.digits');
changeNum.addEventListener('click',()=>{
    for(let i = 0; i < digits.length; i++){
        digits[i].value = '';
    }
    otpContainer1.style.opacity = '1'
    otpContainer1.style.top = "220px"
    otpContainer2.style.opacity= '0';
    otpContainer2.style.top = "700px"
    // otpContainer2.style.overflow = 'hidden'
    
})
function digital(){
    let activeDigit = document.querySelector('.activeDigit');
    if(activeDigit.value){
        console.log('alhamdulillah')
        let next = activeDigit.nextElementSibling;
        activeDigit.blur();
        activeDigit.classList.remove('activeDigit')
        next.classList.add('activeDigit')
        next.focus();
        console.log(activeDigit,next)
    }
    else{
        console.log(activeDigit)
    }
}

function verifyOTP(){
    let digits = document.querySelectorAll('.digits')
    let btn = document.querySelector('.verifyBtn')
    let activeDigit = document.querySelector('.activeDigit');
    let count = 0;
    for(let i = 0; i < digits.length; i++){
        if(digits[i].value){
            count++;
            console.log(digits[i].value)
        }
    }
    if(count==6){
        otpContainer1.style.opacity = '0'
        otpContainer1.style.top = "700px"
        otpContainer2.style.opacity= '0';
        otpContainer2.style.top = "700px"
        popupContainers.style.display = 'none';
        for(let i = 0; i < digits.length; i++){
            digits[i].value = '';
        }
        console.log('succeed')
    }
}
