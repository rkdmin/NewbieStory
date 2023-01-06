var name = localStorage.getItem('name');

var content = "\'그래도 종강이다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 야호!!!!!!!!!!!!\'§\'근데 종강은 했는데 딱히 만날 사람이 없네 도현이한테 술이나 먹자할까\'§§※21학번 이도현: 여보세요??§§※\"도현아 ~~~ 나 종강했어 술먹자!!!!\"§§21학번 이도현: 나 담주에 종강이야 ㅜㅜ 아니 교수님이 기말 대체 과제를 내주셨는데 맨 마지막 조여서 안끝나...§어후 너는 진짜 팀플 절대 하지마 한 학기 내내 스트레스 받았어§§\"아이고... 고생이 많네 그럼 머 어쩔 수 없지... 종강하고 꼭 술먹자!!!\"§§21학번 이도현: 그래그래 아라썽 담에보자!!!§\'종강인데.... 다른 사람 찾아봐야겠....\'§§※???: " + name + "!!!!!※!§§(김강재 선배가 허겁지겁 뛰어온다.)§§ ● 19학번 김강재: 헉헉.. " + name + "아 혹시 종강했니??§§\"네!!! 안그래도 종강했는데.. 놀사람이 없어서 찾아보고 있었어요\"§§19학번 김강재: 그럼 마침 잘됐다!! 사실 내가 친구랑 락페스티벌에 오늘 가기로 했는데..§그 친구가 갑자기 아파서 못가게됐거든 혹시 같이갈래??§§§※폭풍같던 한 학기였다.§정말 좋은 사람들을 많이 만났고, 밴드 동아리에 들어서 배우고 싶었던 기타도 배우게 되었다.§종강 이후, 도현이와 취미로 2인 밴드를 하고 있다.§그리고 강재선배가 락페스티벌에서 갑작스레 고백을 하였고, 2주간 고민하다 결국은 만나게 되었다.§나중엔 Metro에 동아리 회장 역할을 맡게되어 책임감도 기를 수 있는 계기가 되었다.§강재 선배, 도현이와 계속 연락하고 정말 좋은 친구가 되어 너무 만족스러웠다.§앞으로 남은 학교생활이 정말 ※두※근※거※린※다※.■";
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
		sleep(1100);
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '<img src="kimkang02.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
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
	
	text.innerHTML = "\'그래도 종강이다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 야호!!!!!!!!!!!!\'<br/>\'근데 종강은 했는데 딱히 만날 사람이 없네 도현이한테 술이나 먹자할까\'<br/><br/>21학번 이도현: 여보세요??<br/><br/>\"도현아 ~~~ 나 종강했어 술먹자!!!!\"<br/><br/>21학번 이도현: 나 담주에 종강이야 ㅜㅜ 아니 교수님이 기말 대체 과제를 내주셨는데 맨 마지막 조여서 안끝나...<br/>어후 너는 진짜 팀플 절대 하지마 한 학기 내내 스트레스 받았어<br/><br/>\"아이고... 고생이 많네 그럼 머 어쩔 수 없지... 종강하고 꼭 술먹자!!!\"<br/><br/>21학번 이도현: 그래그래 아라썽 담에보자!!!<br/>\'종강인데.... 다른 사람 찾아봐야겠....\'<br/><br/>??: " + name + "!!!!!!<br/><br/>(김강재 선배가 허겁지겁 뛰어온다.)<br/><br/><img src=\"kimkang02.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>19학번 김강재: 헉헉.. " + name + "아 혹시 종강했니??<br/><br/>\"네!!! 안그래도 종강했는데.. 놀사람이 없어서 찾아보고 있었어요\"<br/><br/>19학번 김강재: 그럼 마침 잘됐다!! 사실 내가 친구랑 락페스티벌에 오늘 가기로 했는데..<br/>그 친구가 갑자기 아파서 못가게됐거든 혹시 같이갈래??<br/><br/><br/>폭풍같던 한 학기였다.<br/>정말 좋은 사람들을 많이 만났고, 밴드 동아리에 들어서 배우고 싶었던 기타도 배우게 되었다.<br/>종강 이후, 도현이와 취미로 2인 밴드를 하고 있다.<br/>그리고 강재선배가 락페스티벌에서 갑작스레 고백을 하였고, 2주간 고민하다 결국은 만나게 되었다.<br/>나중엔 Metro에 동아리 회장 역할을 맡게되어 책임감도 기를 수 있는 계기가 되었다.<br/>강재 선배, 도현이와 계속 연락하고 정말 좋은 친구가 되어 너무 만족스러웠다.<br/>앞으로 남은 학교생활이 정말 두근거린다.<br/><br/><br/><br/><br/><a href=\"result.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);