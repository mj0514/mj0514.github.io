console.log("javascript")

const theLeye = document.getElementById("l_eye");
const theReye = document.getElementById("r_eye");
const theBody = document.getElementById("main_body");
const theTV = document.getElementById("l_tv");
const theBook = document.getElementById("r_book");
const theSbody = document.getElementById("s_body");
const theButton = document.getElementById("theButton");
const theLeg = document.getElementById("leg")
const theWheel1 = document.getElementById("wheel1")
const theWheel2 = document.getElementById("wheel2")


theTV.style.visibility = "hidden"
theBook.style.visibility = "hidden"
theSbody.style.visibility = "hidden"
theWheel1.style.visibility = "hidden"
theWheel2.style.visibility = "hidden"


theLeye.addEventListener('mouseenter', myFunction1)
theReye.addEventListener('mouseenter', myFunction2)
theBody.addEventListener('mouseenter', myFunction3)
theLeg.addEventListener('mouseenter', myFunction4)
theButton.addEventListener('click', myFunction5)

function myFunction1(){
	theLeye.style.visibility = "hidden";
	theTV.style.visibility = "visible"
}

function myFunction2(){
	theReye.style.visibility = "hidden";
	theBook.style.visibility = "visible"
}

function myFunction3(){
	theBody.style.visibility = "hidden";
	theSbody.style.visibility = "visible"
}

function myFunction3(){
	theBody.style.visibility = "hidden";
	theSbody.style.visibility = "visible"
}

function myFunction4(){
	theLeg.style.visibility = "hidden"
	theWheel1.style.visibility = "visible"
	theWheel2.style.visibility = "visible"
}

function myFunction5(){
	theLeye.style.visibility = "visible"
	theReye.style.visibility = "visible"
	theBody.style.visibility = "visible"
	theLeg.style.visibility = "visible"
	theTV.style.visibility = "hidden"
	theBook.style.visibility = "hidden"
	theSbody.style.visibility = "hidden"
	theWheel1.style.visibility = "hidden"
	theWheel2.style.visibility = "hidden"
}