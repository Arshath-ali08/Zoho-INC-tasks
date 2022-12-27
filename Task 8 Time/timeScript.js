let interval = setInterval(timing,1000);
let str = "";
function timing(){
    str = new Date().toLocaleTimeString();
    let s = str.split("");
    console.log(s)
    calling(s);
}
function calling(s){
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case s[0]:
                switch(s[0]){
                    case '1':
                        let par1 = document.querySelector('.h1');
                        one(par1);
                        break;
                    case '2':
                        let par2 = document.querySelector('.h1');
                        two(par2);
                        break;
                    case '0':
                        let par3 =document.querySelector('.h1');
                        zero(par3);
                        break;
                    default:
                        console.log('h1');
                }
                break;
            case s[1]:
                switch(s[1]){
                    case '1':
                        let pa1 = document.querySelector('.h2');
                        one(pa1);
                        break;
                    case '2':
                        let pa2 = document.querySelector('.h2');
                        two(pa2);
                        console.log(2);
                        break;
                    case '3':
                        let pa3 = document.querySelector('.h2');
                        three(pa3);
                        console.log(3);
                        break;
                    case '4':
                        let pa4 = document.querySelector('.h2');
                        four(pa4);
                        console.log(4);
                        break;
                    case '5':
                        let pa5 = document.querySelector('.h2');
                        five(pa5);
                        console.log(5);
                        break;
                    case '6':
                        let pa6 = document.querySelector('.h2');
                        six(pa6);
                        break;
                    default:
                        console.log('not h2')
                }
                break;
            case s[2]:
                console.log('colon');
            case s[3]:
                switch(s[3]){
                    case '1':
                        let parm1 = document.querySelector('.m1');
                        one(parm1);
                        break;
                    case '2':
                        let parm2 = document.querySelector('.m1');
                        two(parm2);
                        console.log(2);
                        break;
                    case '3':
                        let parm3 = document.querySelector('.m1');
                        three(parm3);
                        console.log(3);
                        break;
                    case '4':
                        let parm4 = document.querySelector('.m1');
                        four(parm4);
                        console.log(4);
                        break;
                    case '5':
                        let parm5 = document.querySelector('.m1');
                        five(parm5);
                        console.log(5);
                        break;
                    case '6':
                        let parm6 = document.querySelector('.m1');
                        six(parm6);
                        break;
                    default:
                        console.log('m1 isnot');
                }
            case s[4]:
                switch(s[4]){
                    case '1':
                        let part1 = document.querySelector('.m2');
                        one(part1);
                        break;
                    case '2':
                        let part2 = document.querySelector('.m2');
                        two(part2);
                        console.log(2);
                        break;
                    case '3':
                        let part3 = document.querySelector('.m2');
                        three(part3);
                        console.log(3);
                        break;
                    case '4':
                        let part4 = document.querySelector('.m2');
                        four(part4);
                        console.log(4);
                        break;
                    case '5':
                        let part5 = document.querySelector('.m2');
                        five(part5);
                        console.log(5);
                        break;
                    case '6':
                        let part6 = document.querySelector('.m2');
                        six(part6);
                        break;
                    case '7':
                        let part7 = document.querySelector('.m2');
                        seven(part7);
                        console.log(7);
                        break;
                    case '8':
                        let part8 = document.querySelector('.m2');
                        eight(part8);
                        console.log(8);
                        break;
                    case '9':
                        let part9 = document.querySelector('.m2');
                        nine(part9);
                        break;
                    case '0':
                        let part0 = document.querySelector('.m2');
                        zero(part0);
                        break;
                    default:
                        console.log('not m2')
                }
                console.log(s[4]);
                break;
            case s[5]:
                console.log('colon2');
                break;
            case s[6]:
                switch(s[6]){
                    case '1':
                        let s11 = document.querySelector('.s1');
                        one(s11);
                        break;
                    case '2':
                        let s12 = document.querySelector('.s1');
                        two(s12);
                        break;
                    case '3':
                        let s13 = document.querySelector('.s1');
                        three(s13);
                        console.log(3);
                        break;
                    case '4':
                        let s14 = document.querySelector('.s1');
                        four(s14);
                        console.log(4);
                        break;
                    case '5':
                        let s15 = document.querySelector('.s1');
                        five(s15);
                        console.log(5);
                        break;
                    case '6':
                        let s16 = document.querySelector('.s1');
                        six(s16);
                        break;
                    case '0':
                        let s10 = document.querySelector('.s1');
                        zero(s10);
                        break;
                    default:
                        console.log('not s1')
                }
                console.log(s[6]);
                break;
            case s[7]:
                switch(s[7]){
                    case '1':
                        let partss1 = document.querySelector('.s2');
                        one(partss1);
                        break;
                    case '2':
                        let partss2 = document.querySelector('.s2');
                        two(partss2);
                        break;
                    case '3':
                        let partss3 = document.querySelector('.s2');
                        three(partss3);
                        break;
                    case '4':
                        let partss4 = document.querySelector('.s2');
                        four(partss4);
                        break;
                    case '5':
                        let partss5 = document.querySelector('.s2');
                        five(partss5);
                        break;
                    case '6':
                        let partss6 = document.querySelector('.s2');
                        six(partss6);
                        break;
                    case '7':
                        let partss7 = document.querySelector('.s2');
                        seven(partss7);
                        console.log(7);
                        break;
                    case '8':
                        let partss8 = document.querySelector('.s2');
                        eight(partss8);
                        break;
                    case '9':
                        let partss9 = document.querySelector('.s2');
                        nine(partss9);
                        break;
                    case '0':
                        let partss0 = document.querySelector('.s2');
                        zero(partss0);
                        break;
                    default:
                        console.log('not m2')
                }
                console.log(s[7]);
                break;
            default:
                console.log('end');
        }
    }
}

function one(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'hidden';
    c2.style.visibility = 'hidden';
    c4.style.visibility = 'hidden';
    c5.style.visibility = 'hidden';
    c6.style.visibility = 'hidden';
    c3.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function two(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'hidden';
    c7.style.visibility = 'hidden';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c5.style.visibility = 'visible';
    c6.style.visibility = 'visible';
}

function three(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'hidden';
    c5.style.visibility = 'hidden';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c6.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function four(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c2.style.visibility = 'hidden';
    c5.style.visibility = 'hidden';
    c6.style.visibility = 'hidden';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c1.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function five(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c3.style.visibility = 'hidden';
    c5.style.visibility = 'hidden';
    c1.style.visibility = 'visible';
    c2.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c6.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function six(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c3.style.visibility = 'hidden';
    c1.style.visibility = 'visible';
    c2.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c5.style.visibility = 'visible';
    c6.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function seven(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'hidden';
    c4.style.visibility = 'hidden';
    c5.style.visibility = 'hidden';
    c6.style.visibility = 'hidden';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function eight(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'visible';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c5.style.visibility = 'visible';
    c6.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function nine(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'visible';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'visible';
    c5.style.visibility = 'hidden';
    c6.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

function zero(par){
    let c1 = par.firstElementChild;
    let c2 = c1.nextElementSibling;
    let c3 = c2.nextElementSibling;
    let c4 = c3.nextElementSibling;
    let c5 = c4.nextElementSibling;
    let c6 = c5.nextElementSibling;
    let c7 = par.lastElementChild;
    c1.style.visibility = 'visible';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'hidden';
    c5.style.visibility = 'visible';
    c6.style.visibility = 'visible';
    c7.style.visibility = 'visible';
}

