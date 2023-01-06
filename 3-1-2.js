var name = localStorage.getItem('name'); 
var one = localStorage.getItem('one'); 

if (one == 2) {
	var content = "○" + "\"와 사람 진짜 많다.. 사람들이랑 친해질 수 있을까?.... 걱정되네\"§§\"우와아아아아 마셔마셔~~~~~!\"§§§§(한창 술 마시던 와중 누가 들어온다.)●§???: 애들아 미안 공연 정리 하느라 늦었다. 쏴리~~~§사람들: 입장샷~ 입장샷~ 마셔~~~~~ §§\"어?? 오늘 밴드 공연 하셨던 분 ! !\"§§19학번 김강재: 아 네.. 저요???..§§\'아 나도 모르게.. 크게 말해서 들렸나보네..\'§\"안녕하세요 21학번 " + name + " 입니다!\"§\"그 오늘 오리엔테이션 공연 잘 봤어요 그 동아리 이름이...\"§19학번 김강재: 아 감사합니다... 동아리 이름 Metro에요!!§그런데 그.. 혹시 말 놔도 될까??.. §§\"아 물론이죠 !! 제가 사실은 밴드 들어가고 싶은데 할 수 있는게 없어서요.. 노래도 못하고 악기도 못다루고..\"§19학번 김강재: 오 그래? 우리 동아리 초심자도 다 받고 있거든 혹시 내가 기타 가르쳐줄까??§\"헐 너무 좋아요 선배.. 진짜 기타 배우고 싶었는데 감사해요\"§※(김강재가 폰을 내민다)§※\"번호 줘 내가 면접 날짜 정해지면 알려줄게\"§§§(주소록에 김강재가 추가되었다!)§§\'아 처음 먹어서 그런지 조금 취하는 느낌이네 신기하다.. 얼굴 좀 많이 빨개진거 같은데.. 얼굴 상태 보고 와야겠다.\'§§(거울을 보는 와중 신입생으로 보이는 여자애 한명이 화장실로 들어온다.)§§\'엏 어쩌지 먼저 인사해야하나??!!!\'■";	
	localStorage.setItem('KimGangJae', 2);
	localStorage.setItem('KimGangJae1', 2);
	localStorage.setItem('band', 2);
}
else if (one == 3) {
	var content = "○" + "\"와 사람 진짜 많다.. 사람들이랑 친해질 수 있을까?.... 걱정되네\"§§\"우와아아아아 마셔마셔~~~~~!\"§§§§\(과대 언니가 내 어깨에 손을 대며 말한다\)§19학번 임채연: " + name + "아 저 테이블 봐봐 저기 있는 사람들이 우리 학교에서 제일 인싸인 사람들이야!§오늘 오티 봤지 ? DIO라고 댄스 동아리야 §§\"오 맞아요 저 봤어요 ! 제가 좋아하는 노래들만 하더라고요 ! 안그래도 들어갈까 고민했었는데 ㅜㅜ 인싸라니 저 같은 아싸한텐..\"§§19학번 임채연: 아 그래 ? 나 저기에 친구 있는데 얘기 해줄게 !! §§\"아.. 안돼요 부끄러워요\"§§\(무시하고 과대언니가 테이블로 돌진한다.\)§§19학번 임채연: 야 !! 이은혁 우리과 후배가 니네동아리 들어가고 싶다는데 ??★§§이은혁 : 아 진짜? 안그래도 신입생 안들어올까봐 걱정했는데 다행이다. 누구야 어딨어?!?! 당장말해§§19학번 임채연: " + name + "아 빨리와 인사해!!§§\"아... 안녕하세요 21학번 " + name + "입니다.. 하하\"§§(아 갑자기 너무 부끄러운데)§§이은혁: 오오 안녕 나 20학번 영상과 이은혁이야!! 우리 동아리 들어오고 싶다며 ! 면접보러 와§§\"헐 넵 너무좋아요 혹시 언제 면접가면 좋을까요??\"§§20학번 이은혁: 번호 줘! 내가 나중에 알려줄게 기대할게 ^^§§※\(주소록에 이은혁이 추가되었다!\)§§\'아 처음 먹어서 그런지 조금 취하는 느낌이네 신기하다.. 얼굴 좀 많이 빨개진거 같은데.. 얼굴 상태 보고 와야겠다.\'§§(거울을 보는 와중 신입생으로 보이는 여자애 한명이 화장실로 들어온다.)§§\'엏 어쩌지 먼저 인사해야하나??!!!\'■";	
	localStorage.setItem('LeeEunhyeok', 2);
	localStorage.setItem('LeeEunhyeok1', 2);
	localStorage.setItem('dance', 2);
}
else {
	var content = "§§§§" + "\'아 처음 먹어서 그런지 조금 취하는 느낌이네 신기하다.. 얼굴 좀 많이 빨개진거 같은데.. 얼굴 상태 보고 와야겠다.\'§§\(거울을 보는 와중 신입생으로 보이는 여자애 한명이 화장실로 들어온다.\)§§\'엏 어쩌지 먼저 인사해야하나??!!!\'■";
}


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
	else if (content[index] == '○')
	{
		text.innerHTML += '<img src="alcohol.webp" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		sleep(1000);
		index++;
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '</br></br><img src="kimkang01.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '★')
	{
		text.innerHTML += '</br></br><img src="leeeun01.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
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
	
	if (one == 2) {
		text.innerHTML = "<img src=\"alcohol.webp\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>\"와 사람 진짜 많다.. 사람들이랑 친해질 수 있을까?.... 걱정되네\"<br/><br/>\"우와아아아아 마셔마셔~~~~~!\"<br/><br/><br/><br/>(한창 술 마시던 와중 누가 들어온다.)<br/><br/><img src=\"kimkang01.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>???: 애들아 미안 공연 정리 하느라 늦었다. 쏴리~~~<br/>사람들: 입장샷~ 입장샷~ 마셔~~~~~ <br/><br/>\"어?? 오늘 밴드 공연 하셨던 분 ! !\"<br/><br/>19학번 김강재: 아 네.. 저요???..<br/><br/>\'아 나도 모르게.. 크게 말해서 들렸나보네..\'<br/>\"안녕하세요 21학번 " + name + " 입니다!\"<br/>\"그 오늘 오리엔테이션 공연 잘 봤어요 그 동아리 이름이...\"<br/>19학번 김강재: 아 감사합니다... 동아리 이름 Metro에요!!<br/>그런데 그.. 혹시 말 놔도 될까??.. <br/><br/>\"아 물론이죠 !! 제가 사실은 밴드 들어가고 싶은데 할 수 있는게 없어서요.. 노래도 못하고 악기도 못다루고..\"<br/>19학번 김강재: 오 그래? 우리 동아리 초심자도 다 받고 있거든 혹시 내가 기타 가르쳐줄까??<br/>\"헐 너무 좋아요 선배.. 진짜 기타 배우고 싶었는데 감사해요\"<br/>(김강재가 폰을 내민다)<br/>\"번호 줘 내가 면접 날짜 정해지면 알려줄게\"<br/><br/><br/>(주소록에 김강재가 추가되었다!)<br/><br/><br/>\'아 처음 먹어서 그런지 조금 취하는 느낌이네 신기하다.. 얼굴 좀 많이 빨개진거 같은데.. 얼굴 상태 보고 와야겠다.\'<br/><br/>(거울을 보는 와중 신입생으로 보이는 여자애 한명이 화장실로 들어온다.)<br/><br/>\'엏 어쩌지 먼저 인사해야하나??!!!\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a><br/>";		
	}
	else if (one == 3) {
		text.innerHTML = "<img src=\"alcohol.webp\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>\"와 사람 진짜 많다.. 사람들이랑 친해질 수 있을까?.... 걱정되네\"<br/><br/>\"우와아아아아 마셔마셔~~~~~!\"<br/><br/><br/><br/>\(과대 언니가 내 어깨에 손을 대며 말한다\)<br/>19학번 임채연: " + name + "아 저 테이블 봐봐 저기 있는 사람들이 우리 학교에서 제일 인싸인 사람들이야!§오늘 오티 봤지 ? DIO라고 댄스 동아리야 <br/><br/>\"오 맞아요 저 봤어요 ! 제가 좋아하는 노래들만 하더라고요 ! 안그래도 들어갈까 고민했었는데 ㅜㅜ 인싸라니 저 같은 아싸한텐..\"<br/><br/>19학번 임채연: 아 그래 ? 나 저기에 친구 있는데 얘기 해줄게 !! <br/><br/>\"아.. 안돼요 부끄러워요\"<br/><br/>\(무시하고 과대언니가 테이블로 돌진한다.\)<br/><br/>19학번 임채연: 야 !! 이은혁 우리과 후배가 니네동아리 들어가고 싶다는데 ??<br/><br/><img src=\"leeeun01.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>이은혁 : 아 진짜? 안그래도 신입생 안들어올까봐 걱정했는데 다행이다. 누구야 어딨어?!?! 당장말해<br/><br/>19학번 임채연: " + name + "아 빨리와 인사해!!<br/><br/>\"아... 안녕하세요 21학번 " + name + "입니다.. 하하\"<br/><br/>(아 갑자기 너무 부끄러운데)<br/><br/>이은혁: 오오 안녕 나 20학번 영상과 이은혁이야!! 우리 동아리 들어오고 싶다며 ! 면접보러 와<br/><br/>\"헐 넵 너무좋아요 혹시 언제 면접가면 좋을까요??\"<br/><br/>20학번 이은혁: 번호 줘! 내가 나중에 알려줄게 기대할게 ^^<br/><br/>\(주소록에 이은혁이 추가되었다!\)<br/><br/>\'아 처음 먹어서 그런지 조금 취하는 느낌이네 신기하다.. 얼굴 좀 많이 빨개진거 같은데.. 얼굴 상태 보고 와야겠다.\'<br/><br/>(거울을 보는 와중 신입생으로 보이는 여자애 한명이 화장실로 들어온다.)<br/><br/>\'엏 어쩌지 먼저 인사해야하나??!!!\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a><br/>";	
	}
	else {
		text.innerHTML = "<br/><br/><br/><br/>\'아 처음 먹어서 그런지 조금 취하는 느낌이네 신기하다.. 얼굴 좀 많이 빨개진거 같은데.. 얼굴 상태 보고 와야겠다.\'<br/><br/>(거울을 보는 와중 신입생으로 보이는 여자애 한명이 화장실로 들어온다.)<br/><br/>\'엏 어쩌지 먼저 인사해야하나??!!!\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a><br/>";
	}
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);