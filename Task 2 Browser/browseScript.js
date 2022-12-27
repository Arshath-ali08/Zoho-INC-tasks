let div = document.getElementById('container');

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let browserName = navigator.userAgent;
let nameOfBrowser;
let versionOfBrowser;

if(browserName.includes("Edg/")){
    nameOfBrowser = "Microsoft Edge";
    versionOfBrowser = browserName.split("Edg/")[1].slice(0,5);
}
else if(browserName.includes("Chrome/")){
    nameOfBrowser = "Chrome";
    versionOfBrowser = browserName.split("Chrome/")[1].slice(0,5);
}
else if(browserName.includes("Firefox/")){
	nameOfBrowser = "Firefox";
	versionOfBrowser = browserName.split("Firefox/")[1].slice(0,4);
}
else if(browserName.includes("Safari/")){
	nameOfBrowser = "Safari";
	versionOfBrowser = browserName.split("Safari/")[1].slice(0,5);
}

console.log(browserName);

var datas = ["Browser Name", "Browser version", "Screen Width", "Screen Height"];
var info = [nameOfBrowser, versionOfBrowser, window.innerWidth, screenHeight];

let table = document.createElement('table');
table.setAttribute('id','table');
div.appendChild(table);
for(let i = 0; i < 4; i++){
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    let tableData1 = document.createElement('td');
    tableRow.appendChild(tableData1);
    let tableData2 = document.createElement('td');
    tableRow.appendChild(tableData2);
    tableData1.innerText = datas[i];
    tableData2.innerText = info[i];
    window.addEventListener('resize', ()=>{
        if(i == 2){
            tableData1.innerText = datas[i];
            tableData2.innerText = window.innerWidth;
        }
        else if(i ==3){
            tableData1.innerText = datas[i];
            tableData2.innerText = window.innerHeight;
        }
    })
}


