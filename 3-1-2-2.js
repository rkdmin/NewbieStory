var name = localStorage.getItem('name'); 
var two = localStorage.getItem('two');

if (two == 1) {
	var content = "●" + "21학번 이가은: 앗!!! 나도 사실 아까부터 인사하고 싶었는데 안녕ㅎㅎ§§사실 나 과에 친구 어떻게 사귀어야 할지 고민하고 있었거든..  먼저 말 걸어줘서 고마워ㅎ..§§\"웅 난" + name + "(이)야!! 이렇게 된 김에 번호..?? 앞으로도 친하게 지내자 나도 아싸라ㅜㅜㅜ\§§21학번 이가은: 너무좋지!!!!!§§※(주소록에 이가은이 추가되었다!)§§※(자리에 돌아온 후, 술자리가 계속된다.)§§\'으 몇 시간째 먹는거지 대학교 쉽지않........   ★\'§§사람들: 야야야야야!!!!!! 쟤 쓰러진다!!!!■";
	localStorage.setItem('LeeGaEun', 2);
	localStorage.setItem('LeeGaEun1', 2);
}
else if (two == 2) {
	var content = "(자리1에 돌아온 후, 술자리가 계속된다.)§§\'으 몇 시간째 먹는거지 대학교 쉽지않........★\'§§사람들: 야야야야야!!!!!! 쟤 쓰러진다!!!!■";
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
	else if (content[index] == '●')
	{
		text.innerHTML += '<img src="leega01.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '★')
	{
		text.innerHTML += '<br/><br/><img src="fade-out.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '■') {
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="5.html" rel="external" style="float:right">다음..</a>';
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	if (two == 1) {
		text.innerHTML = "<img src=\"leega01.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>21학번 이가은: 앗!!! 나도 사실 아까부터 인사하고 싶었는데 안녕ㅎㅎ<br/><br/>사실 나 과에 친구 어떻게 사귀어야 할지 고민하고 있었거든..  먼저 말 걸어줘서 고마워ㅎ..<br/><br/>\"웅 난" + name + "이야!! 이렇게 된 김에 번호..?? 앞으로도 친하게 지내자 나도 아싸라ㅜㅜㅜ\<br/><br/>21학번 이가은: 너무좋지!!!!!<br/><br/>(주소록에 이가은이 추가되었다!)<br/><br/>(자리에 돌아온 후, 술자리가 계속된다.)<br/><br/>\'으 몇 시간째 먹는거지 대학교 쉽지않........<br/><br/><img src=\"fade-out.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>\'<br/><br/>사람들: 야야야야야!!!!!! 쟤 쓰러진다!!!!<br/><br/><br/><br/><br/><a href=\"5.html\" rel=\"external\" style=\"float:right\">다음..</a>";
	}
	else if (two == 2) {
		text.innerHTML = "(자리에 돌아온 후, 술자리가 계속된다.)<br/><br/>\'으 몇 시간째 먹는거지 대학교 쉽지않........<br/><br/><img src=\"fade-out.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>\'<br/><br/>사람들: 야야야야야!!!!!! 쟤 쓰러진다!!!!<br/><br/><br/><br/><br/><a href=\"5.html\" rel=\"external\" style=\"float:right\">다음..</a>";
	}
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);