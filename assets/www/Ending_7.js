var name = localStorage.getItem('name');

var content = "\'그래도 종강이니까 기분은 좋네 하하하ㅏ하\'§§※(지나가는 가은이가 보인다.)§§※\"가은아!!!!!!!!!!!!!!!!!!!!!!!!!\"§§※ ● 21학번 이가은: 오 ! " + name + " 시험 잘 봤어??§§※\"그냥 그럭저럭 본거같아\"§§(가은이의 표정이 별로 좋아 보이지 않는다.)§§\"너도 종강하지 않았어?? 기분이 별로 안좋아 보이네 ㅜㅜ\"§§21학번 이가은: 하하.. 티났어..?? 사실 오늘 정확히 깨달았거든 컴공은 나랑 하나도 안맞는거 같아.§취업 잘 된다 해서 오긴 왔는데.. 무엇보다 코딩이 재미가 없어 나 수능 다시보려고 결심했어.§§\"헐... 그래도 아직 한 학기 밖에 안지났는데 너가 하고싶은거 바로 정하고 정말 대단하다.\"§§21학번 이가은: 헤헤 .. 그렇게 말해주니 기운이 나네 바로 집가서 공부하러간다 !!!!§§(쏜살같이 가은이가 집으로 떠난다.)§§'다들 벌써부터 미래에 대한 고민이 많구나...'§§\'뭔가 가은이 한테 많이 배우게 되네... 나도 동아리 활동 조금 줄이고, 공부해야겠다!!!! 아자아자!!!!!!\'§§§※폭풍같던 한 학기였다.§성적은 꽤 잘나와 장학금을 받을 수 있었고 걱정과 달리 꽤나 많은 친구들을 사귀어 기분이 좋다.§채연언니는 나보고 계속 학생회에 들어오라고 하는데 고민을 좀 더 해봐야 할 것 같다.§그리고 걱정 됐던 가은이도 엄청 열심히 수능 준비 하는 것 같아 보인다.§다음 학기에는 일이 생길지 정말 ※기※대※가 ※된※다※.■";
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
		sleep(900);
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '</br></br><img src="leega02.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '■') {
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="result.html" rel="external" style="float:right">다음..</a>';
	}
	else text.innerHTML += content[index++];
	
	if(index >= content.length){
		clearInterval(Id);
	}
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\'그래도 종강이니까 기분은 좋네 하하하ㅏ하\'<br/><br/>(지나가는 가은이가 보인다.)<br/><br/>\"가은아!!!!!!!!!!!!!!!!!!!!!!!!!\"<br/><br/><img src=\"leega02.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>21학번 이가은: 오 ! " + name + " 시험 잘 봤어??<br/><br/>\"그냥 그럭저럭 본거같아\"<br/><br/>(가은이의 표정이 별로 좋아 보이지 않는다.)<br/><br/>\"너도 종강하지 않았어?? 기분이 별로 안좋아 보이네 ㅜㅜ\"<br/><br/>21학번 이가은: 하하.. 티났어..?? 사실 오늘 정확히 깨달았거든 컴공은 나랑 하나도 안맞는거 같아.<br/>취업 잘 된다 해서 오긴 왔는데.. 무엇보다 코딩이 재미가 없어 나 수능 다시보려고 결심했어.<br/><br/>\"헐... 그래도 아직 한 학기 밖에 안지났는데 너가 하고싶은거 바로 정하고 정말 대단하다.\"<br/><br/>21학번 이가은: 헤헤 .. 그렇게 말해주니 기운이 나네 바로 집가서 공부하러간다 !!!!<br/><br/>(쏜살같이 가은이가 집으로 떠난다.)<br/><br/>'다들 벌써부터 미래에 대한 고민이 많구나...'<br/><br/>\'뭔가 가은이 한테 많이 배우게 되네... 나도 동아리 활동 조금 줄이고, 공부해야겠다!!!! 아자아자!!!!!!\'<br/><br/><br/>폭풍같던 한 학기였다.<br/>성적은 꽤 잘나와 장학금을 받을 수 있었고 걱정과 달리 꽤나 많은 친구들을 사귀어 기분이 좋다.<br/>채연언니는 나보고 계속 학생회에 들어오라고 하는데 고민을 좀 더 해봐야 할 것 같다.<br/>그리고 걱정 됐던 가은이도 엄청 열심히 수능 준비 하는 것 같아 보인다.<br/>다음 학기에는 일이 생길지 정말 기대가 된다.<br/><br/><br/><br/><br/><a href=\"result.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);