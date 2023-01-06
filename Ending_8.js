var name = localStorage.getItem('name');

var content = "(마지막 남은 영어 시험도 드디어 끝이 났다)§§※\"※드※... ※드※디※어※.... 종강이다~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\"§§※???: " + name + "!!!§§※\"어!! 선배 안녕하세요!!!\"§§ ● 19학번 임채연: 종강했나보네!!! 축하해§§\"네? 종강했는지 어떻게 아셨어요???,,\"§§19학번 임채연: 너 방금 소리지른거 저~기서부터 들리던데?§§\"앜.... 너무 좋은 나머지.. 하하\"§§19학번 임채연: 방학 때 뭐해? 계획있어??§§\"음.. 딱히 없어요.. 헤헤\"§§19학번 임채연: 그럼 나랑 같이 스터디 하자!!! 놀땐 놀고! 공부할땐 공부하고!!§§\"헐 너무 좋아요~!~!\"§§19학번 임채연: 그래그래 한 학기 너무 고생 많았고 담에 보자!!!!§§§※폭풍같던 한 학기였다..§성적이 꽤 잘나와 장학금을 받았다.§방학에는 은혜언니랑 일본여행도 가고 전보다 훨씬 가까워 졌다.§언니는 헤어진 남자친구과 재결합해 다시 잘 사귀는 것 같다.§종강 이후로 채연 선배와 스터디를 하며 더욱 친해지고§코딩 능력도 향상되는것 같았다. 그리고 다음 학기에는 학생회를 하게 되었다.§다음 학기에는 무슨 일이 생길지 ※기※대※가 ※된※다※.■";
const text = document.querySelector(".text");
var index = 0;

function typing(){
	if (content[index] == '§') //강제 개행
	{
		text.innerHTML += '<br/>';
		index++;
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '<img src="caeyeonlast.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '※') 
	{
		index++;
		text.innerHTML += content[index++];	
		sleep(900);
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
	
	text.innerHTML = "(마지막 남은 영어 시험도 드디어 끝이 났다)<br/><br/>\"드... 드디어.... 종강이다~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\"<br/><br/>???: " + name + "!!!<br/><br/>\"어!! 선배 안녕하세요!!!\"<br/><br/><img src=\"caeyeonlast.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>19학번 임채연: 종강했나보네!!! 축하해<br/><br/>\"네? 종강했는지 어떻게 아셨어요???,,\"<br/><br/>19학번 임채연: 너 방금 소리지른거 저~기서부터 들리던데?<br/><br/>\"앜.... 너무 좋은 나머지.. 하하\"<br/><br/>19학번 임채연: 방학 때 뭐해? 계획있어??<br/><br/>\"음.. 딱히 없어요.. 헤헤\"<br/><br/>19학번 임채연: 그럼 나랑 같이 스터디 하자!!! 놀땐 놀고! 공부할땐 공부하고!!<br/><br/>\"헐 너무 좋아요~!~!\"<br/><br/>19학번 임채연: 그래그래 한 학기 너무 고생 많았고 담에 보자!!!!<br/><br/><br/>폭풍같던 한 학기였다..<br/>성적이 꽤 잘나와 장학금을 받았다.<br/>방학에는 은혜언니랑 일본여행도 가고 전보다 훨씬 가까워 졌다.<br/>언니는 헤어진 남자친구과 재결합해 다시 잘 사귀는 것 같다.<br/>종강 이후로 채연 선배와 스터디를 하며 더욱 친해지고<br/>코딩 능력도 향상되는것 같았다. 그리고 다음 학기에는 학생회를 하게 되었다.<br/>다음 학기에는 무슨 일이 생길지 기대가 된다.<br/><br/><br/><br/><br/><a href=\"result.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);