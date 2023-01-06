var name = localStorage.getItem('name');
localStorage.setItem('name', name);

var f = localStorage.getItem('face');

//localStorage.clear();
var s = location.pathname;
localStorage.setItem('path_save', s);


$(document).ready(function(){
	$('#char_name').html('<div>&nbsp;&nbsp;&nbsp;이름 : '+ name + '</div>');
	$('#money').html('<div>&nbsp;&nbsp;&nbsp;나이 : '+ 20 + '</div>');
	
	if (f == 1) {
		$('.face_setting').html('<img src="1.jpg" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	else if (f == 2) {
		$('.face_setting').html('<img src="2.jpg" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	else if (f == 3) {
		$('.face_setting').html('<img src="3.jpg" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	else {
		$('.face_setting').html('<img src="4.jpg" alt="주인공" height="80" width="80" style="float:left"/>');
	}
});

 function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    
 function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
    	var ok = confirm("게임을 종료합니다.");
    	if (ok == true) {
    		navigator.app.exitApp();
    	}
    }
    
function I() {
				var I = localStorage.getItem('I');
				I += 10;
				localStorage.setItem('I', I);
			}
			
function E() {
				var I = localStorage.getItem('I');
				I -= 10;
				localStorage.setItem('I', I);
			}
			
function N() {
				var N = localStorage.getItem('N');
				N += 10;
				localStorage.setItem('N', N);
			}
			
function S() {
				var N = localStorage.getItem('N');
				N -= 10;
				localStorage.setItem('N', N);
			}
			
function T() {
				var T = localStorage.getItem('T');
				T += 10;
				localStorage.setItem('T', T);
			}
			
function F() {
				var T = localStorage.getItem('T');
				T -= 10;
				localStorage.setItem('T', T);
			}
			
function J() {
				var J = localStorage.getItem('J');
				J += 10;
				localStorage.setItem('J', J);
			}
			
function P() {
				var J = localStorage.getItem('J');
				J -= 10;
				localStorage.setItem('J', J);
			}