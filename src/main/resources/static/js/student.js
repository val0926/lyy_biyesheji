<<<<<<< HEAD
function clickToMyClass() {
    window.location.href="myClass"
}

function joinClass(c_id) {
    window.location.href="joinClass/"+c_id;
}

function classInfoClick(c_id) {
    console.log(c_id);
    window.location.href="myClass/classInfo/"+c_id;
}

function classStudentClick(c_id) {
    console.log(c_id);
    window.location.href="myClass/classStudentInfo/"+c_id;
}

function classHomeworkListClick(c_id) {
    window.location.href="myClass/classHomeworkList/"+c_id;
}

function classFileClick(c_id) {
    window.location.href="myClass/classFile/"+c_id;
}

function classMessageClick(c_id) {
    window.location.href="myClass/classMessage/"+c_id;
}



// function classInfoClick() {
//
// }
// function classInfoClick() {
//
// }
=======
/*以下为页面管理*/
var firstPage=document.getElementById("firstPage");
var previousPage=document.getElementById("previousPage");
var nextPage=document.getElementById("nextPage");
var lastPage=document.getElementById("lastPage");
var nowPage=document.getElementById("nowPage");
var allPage=document.getElementById("allPage");
(function initPage(){
	/*切换按钮*/
	if(window.location.href.indexOf("myclass") == -1){
		$('#classTypeSelector').children(".classLine_all").show();
		$('#classTypeSelector').children(".classLine_my").hide();
	}else{		
		$('#classTypeSelector').children(".classLine_my").show();
		$('#classTypeSelector').children(".classLine_all").hide();
	}
	
	/*班级标签*/
	console.log($(".inclassTest"))
	for(var i=0;i<$(".inclassTest").length;i++){
		if(window.location.href.indexOf("myclass") != -1){
			// if($(".inclassTest")[i].innerHTML=="true"){
			$($(".inclassTest")[i]).parent().addClass("classItemInfo_myclass");
			$($(".inclassTest")[i]).siblings(".classHideMessageBox").hide();
		}else{
			$($(".inclassTest")[i]).parent().addClass("classItemInfo_allclass");
			$($(".inclassTest")[i]).siblings(".classHideBtnBox").hide();
		}
	}
	
	/*页码*/
	if(nowPage.innerHTML==allPage.innerHTML){
		nextPage.style.visibility="hidden"
		lastPage.style.visibility="hidden"
	}
	if(nowPage.innerHTML==1){
		firstPage.style.visibility="hidden"
		previousPage.style.visibility="hidden"
	}
	
	
})()

function firstClick(){ 
	window.location.href="../index_student_myclass/1";
}

function lastClick(){
	window.location.href="../index_student_myclass/"+allPage.innerHTML;
}

function previousClick(){
	window.location.href="../index_student_myclass/"+(Number(nowPage.innerHTML)-1);
}

function nextClick(){
	window.location.href="../index_student_myclass/"+(Number(nowPage.innerHTML)+1);
}
>>>>>>> origin/master