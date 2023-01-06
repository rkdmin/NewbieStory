var content = "(개강한지 2주가 지났다.)§§※기초프로그래밍 교수님: 네 여러분 오늘 과제는 @!#@#%%&~~~~§※독서와글쓰기 교수님: 네 여러분 독서일~기 다 써오시는거 아시죠 ~ 오늘은 !!@#!@!$@!$@!$§§※영화의이해 교수님: 여러분 선배들이 말하는 \"1학년땐 놀아도돼~~!\" 이런거 믿지 마시고 공부하세요!!! 그 선배들 지금 다 학점 재공사 하느라 5학년도 하는 사람도 있답니다~.. 지금 에이 ~~ 대학교에 5학년이 어딨어라고 생각했죠? 여러분의 미래가 될 수 있답니다!! 그리고 중간고사도 한달밖에 안남았어요!!§§※\'아.. 제발... 1주일에 한개씩 과제를 내주네... 물론 버겁지 않지 그 수업 하나만 들으면 말이야ㅡㅡ 하..\'§※\'교수님들!!!! 저 수업 하나만 듣는거 아니에요~~!!\'§※\'그리고 중간고사가 벌써 한달...이라니.. 시간 빠르다ㅜㅜ\'§※\'지금부터 매일 조금씩 공부할까? 아 근데 강의평들 보니까 1학년 수업은 시험기간 쯤에 조금씩 정리해주시는 것 같긴 한데..\'■";

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
	else text.innerHTML += content[index++];
	
	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	text.innerHTML =  "(개강한지 2주가 지났다.)<br/><br/>기초프로그래밍 교수님: 네 여러분 오늘 과제는 @!#@#%%&~~~~<br/>독서와글쓰기 교수님: 네 여러분 독서일~기 다 써오시는거 아시죠 ~ 오늘은 !!@#!@!$@!$@!$<br/><br/>영화의이해 교수님: 여러분 선배들이 말하는 \"1학년땐 놀아도돼~~!\" 이런거 믿지 마시고 공부하세요!!! 그 선배들 지금 다 학점 재공사 하느라 5학년도 하는 사람도 있답니다~.. 지금 에이 ~~ 대학교에 5학년이 어딨어라고 생각했죠? 여러분의 미래가 될 수 있답니다!! 그리고 중간고사도 한달밖에 안남았어요!!<br/><br/>\'아.. 제발... 1주일에 한개씩 과제를 내주네... 물론 버겁지 않지 그 수업 하나만 들으면 말이야ㅡㅡ 하..\'<br/>\'교수님들!!!! 저 수업 하나만 듣는거 아니에요~~!!\'<br/>\'그리고 중간고사가 벌써 한달...이라니.. 시간 빠르다ㅜㅜ\'<br/>\'지금부터 매일 조금씩 공부할까? 아 근데 강의평들 보니까 1학년 수업은 시험기간 쯤에 조금씩 정리해주시는 것 같긴 한데..\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a><br/>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);