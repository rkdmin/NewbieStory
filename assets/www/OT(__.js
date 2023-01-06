const content = "●" + "과대표 : \"여러분 OT 어떠셨나요 ??? 다들 지루했죠?? 라떼도 신입생땐 다 퍼 잤답니다~~ 허허..\"§\"저는 19학번 임채연이고, 우리 컴공과 과대를 맡고 있어요 다들 모르는거 있으면 저한테 물어보세요~~~\"§§§※아 그리고 제일 중요한거!!!!§§이제 신입생 환영회를 하려고 해요 지금 바로 술집에 가려하는데 술 못먹는 분들도 와서 재밌게 놀았으면 좋겠어요 ~~!■";
const text = document.querySelector(".text");
var index = 0;

function typing(){
	if (content[index] == '§') //강제 개행
	{
		text.innerHTML += '<br/>';
		index++;
	}
	
	else if (content[index] == '※') 
	{
		index++;
		text.innerHTML += content[index++];	
		sleep(700);
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '<img src="chaeyeon_background.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '■') {
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>';
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
	
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	text.innerHTML = "<img src=\"chaeyeon_background.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>\"과대표 : \"여러분 OT 어떠셨나요 ??? 다들 지루했죠?? 라떼도 신입생땐 다 퍼 잤답니다~~ 허허..\"<br/>\"저는 19학번 임채연이고, 우리 컴공과 과대를 맡고 있어요 다들 모르는거 있으면 저한테 물어보세요~~~\"<br/><br/><br/>아 그리고 제일 중요한거!!!!<br/><br/>이제 신입생 환영회를 하려고 해요 지금 바로 술집에 가려하는데 술 못먹는 분들도 와서 재밌게 놀았으면 좋겠어요 ~~!<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);