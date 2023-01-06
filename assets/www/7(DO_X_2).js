var name = localStorage.getItem('name');

var content = "(그 후로, 해훈이랑 많은 얘기를 나눴고 좋은 사람인 것을 알았다.)§§(주소록에 컴공 21 김해훈이 추가되었다!)§§ ● 20학번 이은혁: 역시 MT는 바베큐에 소주지!!! " + name + "! 너 은근 술 잘마신다??§§\"아 아니에요.. 선배 저 사실 오티 때... 아 아니다...\"§§20학번 이은혁: 뭔데뭔데 아ㅏ아ㅏㅏ 나 말하다 끊는거 진짜 싫어§§\"아.. 술먹다가 정신 잃고 쓰려져서... 난리도 아니였어요\"§§20학번 이은혁: 아이고.. 그래도 내가 제일 친한 선배니까 오늘은 내가 꼭 챙겨줄게§§(MT는 계속 진행되었고, 오길 정말 잘했다는 생각이 들었다)§§(영상 20학번 이은혁의 주소록이 업데이트 되었다!)■";
const text = document.querySelector(".text");
var index = 0;

localStorage.setItem('KimHaeHun', 2);
localStorage.setItem('KimHaeHun1', 2);
localStorage.setItem('LeeEunhyeok3', 2);

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
		text.innerHTML += '<img src="bbq.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '■') {
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="8.html" rel="external" style="float:right">다음..</a>';
	}
	else text.innerHTML += content[index++];
	
	if(index >= content.length){
		clearInterval(Id);
	}
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "(그 후로, 해훈이랑 많은 얘기를 나눴고 좋은 사람인 것을 알았다.)<br/><br/>(주소록에 컴공 21 김해훈이 추가되었다!)<br/><br/><img src=\"bbq.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>20학번 이은혁: 역시 MT는 바베큐에 소주지!!! " + name + "! 너 은근 술 잘마신다??<br/><br/>\"아 아니에요.. 선배 저 사실 오티 때... 아 아니다...\"<br/><br/>20학번 이은혁: 뭔데뭔데 아ㅏ아ㅏㅏ 나 말하다 끊는거 진짜 싫어<br/><br/>\"아.. 술먹다가 정신 잃고 쓰려져서... 난리도 아니였어요\"<br/><br/>20학번 이은혁: 아이고.. 그래도 내가 제일 친한 선배니까 오늘은 내가 꼭 챙겨줄게<br/><br/>(MT는 계속 진행되었고, 오길 정말 잘했다는 생각이 들었다)<br/><br/>(영상 20학번 이은혁의 주소록이 업데이트 되었다!)<br/><br/><br/><br/><br/><a href=\"8.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);