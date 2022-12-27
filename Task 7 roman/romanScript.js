let input1 = document.querySelector('#num');
let alt1 = document.querySelector('#number1');
let input2 = document.querySelector('#rom');
let alt2 = document.querySelector('#number2');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let display1 = document.querySelector('#display1');
let display2 = document.querySelector('#display2');

let regexRoman = /^[ivxlcdmIVXLCDM]*$/;

let alerts1 = document.createElement('h6');
alt1.appendChild(alerts1);
alerts1.innerText = "Enter only a number";

let alerts2 = document.createElement('h6');
alerts2.setAttribute('id','alt');
alt2.appendChild(alerts2);
alerts2.innerText = "Enter a valid roman letter";

button1.addEventListener('click', ()=>{
    let numberInput = input1.value;
    let regexNum = /^[0-9]*$/;
    let check = regexNum.test(numberInput);
    if(check){
        display1.innerText = convertToRoman(numberInput);
        alerts1.style.visibility = 'hidden';
    }
    else
        alerts1.style.visibility= 'visible';
})

button2.addEventListener('click', ()=>{
    let romans = input2.value;
    let check = regexRoman.test(romans);
    if(check){
        display2.innerText = convertToNum(romans);
        alerts2.style.visibility = 'hidden';
    }
    else
    alerts2.style.visibility = 'visible';
})

function convertToRoman(num){
    let result = "";
    if(num < 0){
        return result = "";
    }
    else if(num >= 1000){
        result+='M';
        return result + convertToRoman(num-1000);
    }
    else if(num >= 900){
        result+='CM';
        return result + convertToRoman(num-900);
    }
    else if(num >= 500){
        result+='D';
        return result + convertToRoman(num-500);
    }
    else if(num >= 400){
        result+='CD';
        return result + convertToRoman(num-400);
    }
    else if(num >= 100){
        result+='C';
        return result + convertToRoman(num-100);
    }
    else if(num >= 90){
        result+='XC';
        return result + convertToRoman(num-90);
    }
    else if(num >= 50){
        result+='L';
        return result + convertToRoman(num-50);
    }
    else if(num >= 40){
        result+='XL';
        return result + convertToRoman(num-40);
    }
    else if(num >= 10){
        result+='X';
        return result + convertToRoman(num-10);
    }
    else if(num >= 9){
        result+='IX'
        return result + convertToRoman(num-9);
    }
    else if(num >= 5){
        result+='V';
        return result + convertToRoman(num-5);
    }
    else if(num >= 4){
        result+='IV';
        return result + convertToRoman(num - 4);
    }
    else if(num >= 1){
        result+='I';
        return result + convertToRoman(num-1);
    }
    return result;
}

function convertToNum(roman){
    let nums = 0;
    let r = roman.split("");
    console.log(r);
    for(let i = 0; i < r.length; i++){
        if(r[i] == 'M' || r[i] == 'm'){
            nums+=1000;
        }
        else if(r[i] == 'D' || r[i] == 'd'){
            nums+=500;
        }
        else if(r[i] == 'C' || r[i] == 'c'){
            if(r[i+1] == 'M' || r[i+1] == 'm'){
                nums+=900;
                i++;
            }
            else if(r[i+1] == 'D' || r[i+1] == 'd'){
                nums+=400;
                i++;
            }
            else
                nums+=100;
        }
        else if(r[i] == 'L' || r[i] == 'l'){
            nums+=50;
        }
        else if(r[i] == 'X' || r[i] == 'x'){
            if(r[i+1] == 'C' || r[i+1] == 'c'){
                nums+=90;
                i++;
            }
            else if(r[i+1] == 'L' || r[i+1] == 'l'){
                nums+=40;
                i++;
            }
            else
                nums+=10;
        }
        else if(r[i] == 'V' || r[i] == 'v'){
            nums+=5;
        }
        else if(r[i] == 'I' || r[i] == 'i'){
            if(r[i+1] == 'V' || r[i+1] == 'v'){
                nums+=4;
                i++;
                if(r[i+1] == 'I' || r[i+1] == 'i'){
                    alerts2.style.visibility= 'visible';
                    console.log('err')
                    nums = 0;
                    break;
                }
                else if(r[i+1] == 'X' || r[i+1] == 'x'){
                    alerts2.style.visibility = 'visible';
                    nums = 0;
                    break;
                }

            }
            else if(r[i+i] == 'X' || r[i+1] == 'x'){
                nums+=9;
                i++;
            }
            else
                nums+=1;
        }
    }
    console.log(nums);
    return nums;
}