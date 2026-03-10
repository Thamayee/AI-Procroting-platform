/* store user data */
let storedUsername="";
let storedPassword="";
let savedUser = localStorage.getItem("username");
let savedPass = localStorage.getItem("password");
let storedStudentName="";


/* splash screen */

document.addEventListener("DOMContentLoaded", function(){

const video = document.getElementById("introVideo");

video.onended = function(){

document.getElementById("splash").style.display="none";
document.getElementById("rolePage").classList.remove("hidden");

};

});


/* show student page */

function showStudent(){

document.getElementById("rolePage").classList.add("hidden");
document.getElementById("studentPage").classList.remove("hidden");

}


/* back to role */

function goRole(){

clearForms();
clearProForms();

document.getElementById("studentPage").classList.add("hidden");
document.getElementById("professionalPage").classList.add("hidden");

document.getElementById("rolePage").classList.remove("hidden");

}


/* toggle login */

function showLogin(){

clearForms();

document.getElementById("loginForm").classList.remove("hidden");
document.getElementById("registerForm").classList.add("hidden");

document.getElementById("loginBtn").classList.add("active");
document.getElementById("registerBtn").classList.remove("active");

}


/* toggle register */

function showRegister(){



document.getElementById("loginForm").classList.add("hidden");
document.getElementById("registerForm").classList.remove("hidden");

document.getElementById("registerBtn").classList.add("active");
document.getElementById("loginBtn").classList.remove("active");

}


/* register */

function register(){

let studentName=document.getElementById("studentName").value.trim();
let collegeName=document.getElementById("collegeName").value.trim();
let mobile=document.getElementById("mobileNumber").value.trim();
let email=document.getElementById("email").value.trim();
let user=document.getElementById("username").value.trim();
let pass=document.getElementById("password").value.trim();
let confirm=document.getElementById("confirmPassword").value.trim();
let stream=document.getElementById("stream").value;

let missing=[];

if(studentName==="") missing.push("Student Name");
if(collegeName==="") missing.push("College Name");
if(mobile==="") missing.push("Mobile Number");
if(email==="") missing.push("Mail ID");
if(user==="") missing.push("Username");
if(pass==="") missing.push("Password");
if(confirm==="") missing.push("Confirm Password");
if(stream==="") missing.push("Stream");

if(missing.length>0){
alert("Fill the " + missing.join(", ") + " field(s) which are mandatory.");
return;
}

if(pass!==confirm){
alert("Password and Confirm Password must match!");
return;
}

storedUsername=user;
storedPassword=pass;
storedStudentName = studentName;

alert("Registration successful! Please login.");
showLogin();
}


/* login */

function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

if(user===storedUsername && pass===storedPassword){

/* close dropdowns when entering dashboard */

document.getElementById("profileMenu").classList.add("hidden");

let testsMenu=document.getElementById("testsMenu");
if(testsMenu){
testsMenu.classList.add("hidden");
}

document.getElementById("studentPage").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");
document.getElementById("welcomeUser").innerText = "Welcome " + storedStudentName;

let firstLetter=user.charAt(0).toUpperCase();
document.getElementById("profileCircle").innerText=firstLetter;

}else{

alert("Invalid Username or Password");

}

}


/* dashboard back */

function goStudent(){

document.getElementById("dashboard").classList.add("hidden");
document.getElementById("studentPage").classList.remove("hidden");

}


/* clear student forms */

function clearForms(){

document.getElementById("loginUser").value="";
document.getElementById("loginPass").value="";

document.getElementById("email").value="";
document.getElementById("username").value="";
document.getElementById("password").value="";
document.getElementById("confirmPassword").value="";
document.getElementById("studentName").value="";
document.getElementById("collegeName").value="";
document.getElementById("mobileNumber").value="";
document.getElementById("stream").value="";

}


/* clear professional forms */

function clearProForms(){

document.getElementById("proLoginUser").value="";
document.getElementById("proLoginPass").value="";

document.getElementById("proName").value="";
document.getElementById("companyID").value="";
document.getElementById("proMobile").value="";
document.getElementById("companyName").value="";
document.getElementById("proEmail").value="";
document.getElementById("proUsername").value="";
document.getElementById("proPassword").value="";
document.getElementById("proConfirmPassword").value="";

}


/* student profile menu */

function toggleMenu(){

document.getElementById("profileMenu").classList.toggle("hidden");

}


function logout(){

/* close dropdowns */

document.getElementById("profileMenu").classList.add("hidden");

let testsMenu=document.getElementById("testsMenu");
if(testsMenu){
testsMenu.classList.add("hidden");
}

/* return to role page */

document.getElementById("dashboard").classList.add("hidden");
document.getElementById("rolePage").classList.remove("hidden");

}


/* professional section */

function showProfessional(){

document.getElementById("rolePage").classList.add("hidden");
document.getElementById("professionalPage").classList.remove("hidden");

}


/* professional toggle login */

function showProLogin(){

clearProForms();

document.getElementById("proLoginForm").classList.remove("hidden");
document.getElementById("proRegisterForm").classList.add("hidden");

document.getElementById("proLoginBtn").classList.add("active");
document.getElementById("proRegisterBtn").classList.remove("active");

}


/* professional toggle register */

function showProRegister(){

document.getElementById("proLoginForm").classList.add("hidden");
document.getElementById("proRegisterForm").classList.remove("hidden");

document.getElementById("proRegisterBtn").classList.add("active");
document.getElementById("proLoginBtn").classList.remove("active");

}


let proStoredUser="";
let proStoredPass="";


/* professional register */

function proRegister(){

let name=document.getElementById("proName").value.trim();
let companyID=document.getElementById("companyID").value.trim();
let mobile=document.getElementById("proMobile").value.trim();
let company=document.getElementById("companyName").value.trim();
let email=document.getElementById("proEmail").value.trim();
let user=document.getElementById("proUsername").value.trim();
let pass=document.getElementById("proPassword").value.trim();
let confirm=document.getElementById("proConfirmPassword").value.trim();

let missing=[];

if(name==="") missing.push("Name");
if(companyID==="") missing.push("Company ID");
if(mobile==="") missing.push("Mobile Number");
if(company==="") missing.push("Company Name");
if(email==="") missing.push("Mail ID");
if(user==="") missing.push("Username");
if(pass==="") missing.push("Password");
if(confirm==="") missing.push("Confirm Password");

if(missing.length>0){
alert("Fill the " + missing.join(", ") + " field(s) which are mandatory.");
return;
}

if(pass!==confirm){
alert("Password and Confirm Password must match!");
return;
}

proStoredUser=user;
proStoredPass=pass;

alert("Registration successful! Please login.");
showProLogin();
}


/* professional login */

function proLogin(){

let user=document.getElementById("proLoginUser").value;
let pass=document.getElementById("proLoginPass").value;

if(user===proStoredUser && pass===proStoredPass){

clearProForms();

document.getElementById("professionalPage").classList.add("hidden");
document.getElementById("proHome").classList.remove("hidden");

let firstLetter=user.charAt(0).toUpperCase();
document.getElementById("proUserCircle").innerText=firstLetter;

}else{

alert("Invalid Username or Password");

}

}


/* professional profile menu */

function toggleProMenu(){

document.getElementById("proProfileMenu").classList.toggle("hidden");

}


/* professional logout */

function proLogout(){

/* close dropdown */

document.getElementById("proProfileMenu").classList.add("hidden");

/* return to role page */

document.getElementById("proHome").classList.add("hidden");
document.getElementById("rolePage").classList.remove("hidden");

}
function toggleTests(){

let menu=document.getElementById("testsMenu");

if(menu){
menu.classList.toggle("hidden");
}


}
