var content = "●" + "\"기다리고 기다리던 OT!!!! 와 사람 진~~짜 많다...\"§\"역시 고등학교랑은 달라! 스케일이 크구나... 대박이다.. 아 너무 설레!!! ㅜ 으악!\"§§10분 후※.※.※.※.§§§§§§§※zzz..드르렁 크르렁 쿨쿨...§§§§(밴드 음악 소리가 들려온다)§§※비비적.. 비비적..§§\"엏! 우리 학교에도 밴드부가 있구나. 모르는 노래지만 너무 멋있다.. 다들...나도 악기 같은거라도 해볼 걸 그랬낭...? ㅎ\"§\"멋진 기타 연주 한 번 쯤은 해보고 싶을지도?!\"§\"다음은 춤 동아린가 ??\"§\"와!! 이거슨..!!!!!!!!!!!!!!!! 내가 제일 좋아하는 노래!!!!\"§\"나도 춤은 방구석에서 너튜브 보고 날라댕겼는데 ㅎ 간만에 몸이 근질거리네..ㅎㅎㅎㅎ\"■";
var text = document.querySelector(".text");
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
		text.innerHTML += '<img src="ot.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	text.innerHTML = "<img src=\"ot.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>\"기다리고 기다리던 OT!!!! 와 사람 진~~짜 많다...\"<br/>\"역시 고등학교랑은 달라! 스케일이 크구나... 대박이다.. 아 너무 설레!!! ㅜ 으악!\"<br/><br/>10분 후....<br/><br/><br/><br/><br/><br/><br/>zzz..드르렁 크르렁 쿨쿨...<br/><br/><br/><br/>(밴드 음악 소리가 들려온다)<br/><br/>비비적.. 비비적..<br/><br/>\"엏! 우리 학교에도 밴드부가 있구나. 모르는 노래지만 너무 멋있다.. 다들...나도 악기 같은거라도 해볼 걸 그랬낭...? ㅎ\"<br/>\"멋진 기타 연주 한 번 쯤은 해보고 싶을지도?!\"<br/>\"다음은 춤 동아린가 ??\"<br/>\"와!! 이거슨..!!!!!!!!!!!!!!!! 내가 제일 좋아하는 노래!!!!\"<br/>\"나도 춤은 방구석에서 너튜브 보고 날라댕겼는데 ㅎ 간만에 몸이 근질거리네..ㅎㅎㅎㅎ\"<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);