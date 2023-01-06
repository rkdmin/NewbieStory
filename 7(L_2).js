var name = localStorage.getItem('name');

var content = "(그 후로도 술김에 도현이와 많은 진지한 얘기들을 나눴다.)§(심아 21학번 이도현의 주소록이 업데이트 되었다!)§§\'조금 많이 먹었나.. 어지럽네ㅜ\'§§19학번 김강재: " + name + "!! 괜찮아?? 저번처럼 픽 쓰러지는거 아니지?!!§§\"아 선배...ㅜㅜ 그만놀려주세요ㅜㅜ\"§§19학번 김강재: MT 머 별거 없지?? 그냥 술먹고 또 술먹고 하하..§혹시 좋아하는 노래있어?§§ ●(김강재 선배가 기타를 치며 노래를 부르자 다른사람들도 따라 부르기 시작한다.)§§\'밤하늘에 술마시며 다같이 노래부르다니... 너무 좋다..\'§\'역시 MT오길 잘했어 !!\'§§※(컴공 19학번 김강재의 주소록이 업데이트 되었다!※)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="8.html" rel="external" style="float:right">다음..</a>';
	}
	else if (content[index] == '●')
	{
		text.innerHTML += '<img src="camp.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else text.innerHTML += content[index++];
	
	if(index >= content.length){
		clearInterval(Id);
	}
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "(그 후로도 술김에 도현이와 많은 진지한 얘기들을 나눴다.)<br/>(심아 21학번 이도현의 주소록이 업데이트 되었다!)<br/><br/>\'조금 많이 먹었나.. 어지럽네ㅜ\'<br/><br/>19학번 김강재: " + name + "!! 괜찮아?? 저번처럼 픽 쓰러지는거 아니지?!!<br/><br/>\"아 선배...ㅜㅜ 그만놀려주세요ㅜㅜ\"<br/><br/>19학번 김강재: MT 머 별거 없지?? 그냥 술먹고 또 술먹고 하하..<br/>혹시 좋아하는 노래있어?<br/><br/><img src=\"camp.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>(김강재 선배가 기타를 치며 노래를 부르자 다른사람들도 따라 부르기 시작한다.)<br/><br/>\'밤하늘에 술마시며 다같이 노래부르다니... 너무 좋다..\'<br/>\'역시 MT오길 잘했어 !!\'<br/><br/>(컴공 19학번 김강재의 주소록이 업데이트 되었다!)<br/><br/><br/><br/><br/><a href=\"8.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);