let productName = ['Nestle Products', 'Coco-cola', 'Brittania', 'Gillette', 'Parle Products', 'Procter & Gramble', 'Dabur', 'LOréal', 'Pepsi', 'Godrej'];
let ceoName = ['Ulf Mark Sch', 'Indra Naavui', 'Varun Berry', 'Gary Coombe', 'Vijay Chauhan', 'Jon R. Moeller', 'Mohit Malhotra', 'Nicholas Hieraonimus', 'Raman Laguarta', 'Adi Godrej'];
let year = ['1866','1892','1892','1901','1929','1837','1844','1909','1965','1897'];

let tool = document.getElementsByClassName('tool');
let image = document.getElementsByClassName('img');

for(let i = 0; i < image.length; i++){
    let toolClose = document.createElement('div');
    tool[i].appendChild(toolClose);
    toolClose.setAttribute('id','tool-close');
    toolClose.innerHTML = "<img src = './images/cancel.png' alt = 'cl' height = '20px' width = '20px'>";
    toolClose.addEventListener('click', ()=>{
        tool[i].style.visibility = 'hidden';
    })
    let line1 = document.createElement('h4');
    tool[i].appendChild(line1);
    line1.innerText = productName[i];
    let line2 = document.createElement('h4');
    tool[i].appendChild(line2);
    line2.innerText = ceoName[i];
    let line3 = document.createElement('h4');
    tool[i].appendChild(line3);
    line3.innerText = year[i];
    let line4 = document.createElement('h4');
    tool[i].appendChild(line4);
    let line5 = document.createElement('h4');
    tool[i].appendChild(line5);
    image[i].addEventListener('click',(e)=>{
        tool[i].style.visibility = 'visible';
        line4.innerText = e.screenX;
        line5.innerText = e.screenY;
    })
}
