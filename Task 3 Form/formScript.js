let err1 = err2 = err3 = err4 = 0;
let val1, val2, val3, val4;

function inputCheck(){
    let names = document.querySelector('#inputName');
    let dob = document.querySelector('#inputDob');
    let sex = document.querySelector('#inputSex');
    let num = document.querySelector('#inputNum');

    const nameEl = names.value.trim();
    const dobEl = dob.value.trim();
    const numEl = num.value.trim();

    if(nameEl === ''){
        err1 = 1;
        error(names,'Name cannot be empty');    
    }
    else if(!(isName(nameEl))){
        err1 = 1;
        error(names,'Enter a proper name');
    }
    else{
        err1 = 2;
        success(names);
    }

    if(dobEl === ''){
        err2 =1;
        error(dob,'Date cannot be empty');
    }
    else if(!(isDate(dobEl))){
        err2 = 1;
        error(dob,'Enter a valid date'); 
    }
    else{
        err2 = 2;
        success(dob); 
    }

    if(sex.value == 'none'){
        err3 = 1;
        error(sex,'Please select your gender');
    }
    else{
        err3 = 2;
        success(sex);  
    }

    if(numEl === ''){
        err4 = 1;
        error(num,'Number cannot be empty');
    }
    else if(!(isNum(numEl))){
        err4 =1;
        error(num,'Enter a valid number');
    }
    else{
        err4 = 2;
        success(num);    
    }
}

function error(input,msg){
    let element = input.parentElement;
    let small = element.querySelector('small');
    small.style.display = 'block';
    small.innerText = msg;
}

function success(input){
    let element = input.parentElement;
    let visible = document.querySelector('#display');
    let small = element.querySelector('small');
    small.innerText = '';
    if(err1 == 2){
        val1 = input.value;
        err1 = 3;
    }
    else if(err2 == 2){
        val2 = input.value;
        err2 = 3;
    }
    else if(err3 == 2){
        val3 = input.value;
        err3 = 3;
    }
    else if(err4 == 2){
        val4 = input.value;
        err4 = 3;
    }
    else{
        console.log("error");
    }

    if(err1 == 3 && err2 == 3 && err3 == 3 && err4 == 3){
        visible.style.visibility = 'visible';
        let div1= document.querySelector('#dis1');
        div1.innerText = val1; 
        let div2= document.querySelector('#dis2');
        div2.innerText = val2;
        let div3= document.querySelector('#dis3');
        div3.innerText = val3;
        let div4= document.querySelector('#dis4');
        div4.innerText = val4;
    }
}

function isName(name){
    const re = /^[a-zA-Z0-9]*$/;
    return re.test(name);
}

function isDate(dob){
    const re = /^(0[1-9]|1[012])[-]([012][1-9]|3[0|1])[-](19[0-9]{2}|20[01][0-9])$/;
    return re.test(dob);
}

function isNum(num){
    const re = /^[6-9]{1}[0-9]{9}$/;
	return re.test(num  );
}

function resets(){
    let smalls = document.querySelectorAll('small');
    for(let i = 0; i < smalls.length; i++){
        smalls[i].style.display = 'none';
    }
}