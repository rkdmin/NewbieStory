var content = "기초 프로그래밍 교수님: 다음은 실습 시험입니다. 종이 나눠줄테니 코딩 하시면 됩니다!! 다 끝난 사람은 홈페이지에 업로드 하고 집에 가시면 됩니다~ ● §§※(※열※심※히※ 코※딩※을 ※한※다※.※)§§※(시간이 지나자 몇몇 학생이 짐싸들고 집에 가기 시작한다.)§§※뭐야.. 난 아직 반도 안했는데..§§※기초 프로그래밍 교수님: 10분 남았습니다!!!§§\'엥?!!?!??!?! 거짓말.. 미치겠다...\'§§※(시험이 끝났다.※)§§\'아 씨 망했어 ㅜㅜㅜ 내 학점.. 장학금 꼭 받아야하는데\'§'그래도 너무 홀가분하다.'§§※\'어후 이 무거운걸 어떻게 학기내내 들고 다녔지 후... 이거 어떻게하지?\'";
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
	else if (content[index] == '■') {
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>';
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '</br></br><img src="coding.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else text.innerHTML += content[index++];
	
	if(index >= content.length){
		clearInterval(Id);
	}
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "기초 프로그래밍 교수님: 다음은 실습 시험입니다. 종이 나눠줄테니 코딩 하시면 됩니다!! 다 끝난 사람은 홈페이지에 업로드 하고 집에 가시면 됩니다~<br/><br/><img src=\"coding.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>(열심히 코딩을 한다.)<br/><br/>(시간이 지나자 몇몇 학생이 짐싸들고 집에 가기 시작한다.)<br/><br/>뭐야.. 난 아직 반도 안했는데..<br/><br/>기초 프로그래밍 교수님: 10분 남았습니다!!!<br/><br/>\'엥?!!?!??!?! 거짓말.. 미치겠다...\'<br/><br/>(시험이 끝났다.)<br/><br/>\'아 씨 망했어 ㅜㅜㅜ 내 학점.. 장학금 꼭 받아야하는데\'<br/>'그래도 너무 홀가분하다.'<br/><br/>\'어후 이 무거운걸 어떻게 학기내내 들고 다녔지 후... 이거 어떻게하지?\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);