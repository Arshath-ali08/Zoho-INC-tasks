let button = document.querySelectorAll('input[type = button]');
let input = document.querySelector('#inputbar');

let values = "";
let solution;

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click',()=>{
        values += button[i].value;
        input.value = values;
    })
}

function percentage(){
    let pValues = parseInt(values);
    input.value = pValues/100;
    values = input.value;
}

function result(){
    if(values.includes("sin") || values.includes("cos") || values.includes("tan")){
        trig();
    }
    else if(values.includes("ln")){
        lnLog();
    }
    else if(values.includes("π")){
        piFn();
    }
    else if(values.includes("x^")){
        powerFn();
    }
    else if(values.includes("√")){
        rootFn();
    }
    else if(values.includes("x2")){
        squareFn();
    }
    else{
        console.log(values)
        let str = values;
        solution = eval(str);
        input.value = solution;
        values = solution;
    }
}

function trig(){
    let trigNum = values.slice(3,values.length);
    let trigVal = values.slice(0,3);
    trigNum = parseInt(trigNum);
    if(trigVal == "sin"){
        input.value = Math.sin(trigNum);
        values = input.value;
    }
    else if(trigVal == "cos"){
        input.value = Math.cos(trigNum);
        values = input.value;
    }
    else if(trigVal == "tan"){
        input.value = Math.tan(trigNum);
        values = input.value;
    }
    else{
        console.log(values);
    }    
}

function lnLog(){
    let logNum = values.slice(2,values.length);
    logNum = parseInt(logNum);
    input.value = Math.log(logNum);
    values = input.value;
}

function piFn(){
    let piVal = values.slice(0,values.length-1);
    piVal = parseInt(piVal);
    pi = Math.PI;
    input.value = pi * piVal;
    values = input.value;
}

function powerFn(){
    let base = values.slice(0,values.indexOf('x'));
    let power = values.slice(values.indexOf('^')+1,values.length);
    input.value = Math.pow(base,power);
    values = input.value;
}

function rootFn(){
    let rootNum = values.slice(1,values.length);
    input.value = Math.sqrt(rootNum);
    values = input.value;
}

function squareFn(){
    let num = values.slice(0,values.indexOf('x2'));
    num = parseInt(num);
    input.value = num*num;
    values = input.value;
}

function reset(){
    input.value = "";
    values = "";
}

function backspace(){
    input.value = input.value.substring(0, input.value.length-1);
    values = input.value;
}
