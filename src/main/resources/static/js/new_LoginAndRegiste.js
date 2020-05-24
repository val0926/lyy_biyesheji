var loginWindow=document.getElementById("loginWindow");
var registeWindow=document.getElementById("registeWindow");
var loginIframe=document.getElementById("loginIframe");
var registeIframe=document.getElementById("registeIframe");
var blackMask=document.getElementById("blackMask");
function closeAll(){
	hideLW();
	hideRW();
	blackMask.style.visibility="hidden";
}

function LWclick(){
	hideLW();
	hideRW();
	showLW();
}

function RWclick(){
	hideLW();
	hideRW();
	showRW();
}

function hideLW(){
	loginWindow.style.transform="scale(0)";
}

function hideRW(){
	registeWindow.style.transform="scale(0)";
}

function showLW(){
	loginWindow.style.transform="scale(1)";
	blackMask.style.visibility="visible";
}

function showRW(){
	registeWindow.style.transform="scale(1)";
	blackMask.style.visibility="visible";
}