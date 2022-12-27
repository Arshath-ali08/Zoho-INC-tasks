let usernamevar = document.querySelector('#username');
let phonevar = document.querySelector('#phone');
let emailvar = document.querySelector('#email');
let passwordvar = document.querySelector('#password');
let cpasswordvar = document.querySelector('#cpassword');
let btn = document.querySelector('#button');

btn.addEventListener("click", (e) => {
	e.preventDefault();
	checkInput();
});

usernamevar.addEventListener('blur',()=>{
	const blurName = document.getElementById('div1');
	const small = blurName.querySelector('small');
	small.innerHTML= '';
	checkInput();
});

phonevar.addEventListener('blur',()=>{
	const blurName = document.getElementById('div2');
	const small = blurName.querySelector('small');
	small.innerHTML= '';
	checkInput();
});

emailvar.addEventListener('blur',()=>{
	const blurName = document.getElementById('div3');
	const small = blurName.querySelector('small');
	small.innerHTML= '';
	checkInput();
});

passwordvar.addEventListener('blur',()=>{
	const blurName = document.getElementById('div4');
	const small = blurName.querySelector('small');
	small.innerHTML= '';
	checkInput();
});

cpasswordvar.addEventListener('blur',()=>{
	const blurName = document.getElementById('div5');
	const small = blurName.querySelector('small');
	small.innerHTML= '';
	checkInput();
});

function checkInput(){
	const usernamev = usernamevar.value.trim();
	const phonev = phonevar.value.trim();
	const emailv = emailvar.value.trim();
	const passwordv = passwordvar.value.trim();
	const cpasswordv = cpasswordvar.value.trim();
	if(usernamev === ''){
		errorMsg(usernamevar, 'Name cannot be empty');
	}
	else if(!isText(usernamev)){
		errorMsg(usernamevar, 'Name contains only text')
	}
	else{
		successMsg(usernamevar);
	}
	if(phonev === ''){
		errorMsg(phonevar,'mobile number cannot be empty');
	}
	else if(!isPhone(phonev)){
		errorMsg(phonevar,'enter a valid mobile number');
	}
	else{
		successMsg(phonevar);
	}
	if(emailv === ''){
		errorMsg(emailvar,'email cannot be empty');
	}
	else if(!isEmail(emailv)){
		errorMsg(emailvar,'enter a valid mail id');
	}
	else{
		successMsg(emailvar);
	}
	if(passwordv === ''){
		errorMsg(passwordvar, 'password cannot be empty');
	}
	else if(!isPass(passwordv)){
		errorMsg(passwordvar, 'enter a valid password');
	}
	else{
		successMsg(passwordvar);
	}
	if(cpasswordv === ''){
		errorMsg(cpasswordvar,'password cannot be empty');
	}
	else if(!isConfirmPass(cpasswordv)){
		errorMsg(cpasswordvar, 'enter a valid password');
	}
	else if(!isConfirm(passwordv,cpasswordv)){
		errorMsg(cpasswordvar, 'not same as above password');
	}
	else{
		successMsg(cpasswordvar);
	}
}

const isEmail = (email)=>{
	const re = /^[a-zA-Z0-9._-]+(@[a-zA-Z]{3,})+(\.[a-z]{2,3})+$/;
	return re.test(email);
};

const isText = (usernamev)=>{
	const re = /^[a-zA-Z ]*$/;
	return re.test(usernamev);
};

const isPhone = (phonev)=>{
	const re = /^[6-9]{1}[0-9]{9}$/;
	return re.test(phonev);
};

const isPass = (passwordv)=>{
	const re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;
	return re.test(passwordv);
};

const isConfirmPass = (cpasswordv)=>{
	const re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;
	return re.test(cpasswordv);
};

const isConfirm = (passwordv,cpasswordv)=>{
	const confirm = ((passwordv==cpasswordv)?true:false);	
	return confirm;
};

const errorMsg = (input, message)=>{
	const formElement = input.parentElement;
	const small = formElement.querySelector('small');
	small.innerText = message;	
};

const successMsg = (input)=>{
	const formElement = input.parentElement;
	const small = formElement.querySelector('small');
	small.innerText = '';
};


let passIcon = document.getElementById('eye1');

passIcon.addEventListener('click',()=>{
	const pass = document.getElementById('password');
	pass.getAttribute('type')=='text' ? pass.setAttribute('type','password') : pass.setAttribute('type','text');
});

let passIcons = document.getElementById('eye2');

passIcons.addEventListener('click',()=>{
	const pass = document.getElementById('cpassword');
	pass.getAttribute('type')=='text' ? pass.setAttribute('type','password') : pass.setAttribute('type','text');
});

function validate(){
	let element = document.createElement('div');
	element.innerText = 'Be the best';
	console.log(element);
};

btn.addEventListener('submit', ()=>{
	let tables = document.querySelector('table');
	let tableRow = document.createElement('tr');
	tables.appendChild(tableRow);
	let tableData1 = document.createElement('td');
	let tableData2 = document.createElement('td');
	tableRow.appendChild(tableData1);
	tableRow.appendChild(tableData2);
	console.log(tables);
});