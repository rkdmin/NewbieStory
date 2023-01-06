var name = localStorage.getItem('name');

var content = "\'뭔가 종강했는데 시원 섭섭하네 후...\'§§※(마침 지나가는 김해훈이 보인다..)§※ ● \"해훈아!!! 김해훈!!\"§§21학번 김해훈: 어 ??? 아.. 안녕!?!§§\"아까 프밍 시험볼때 너 제일 빨리 나가는거 같던데 너 공부도 잘했었구나..\"§§21학번 김해훈: 맞아 하하.. 겨우 금메달 땄어§§\"금메달이뭐야 ?\"§§21학번 김해훈: 제일 빨리 나갔다고 ㅋㅋ 뭐라는지 하나도 모르겠어서 그냥 빨리 나왔어§§\"아 뭐야 난 또 공부 잘하는줄 알았네\"§§21학번 김해훈: 방금 종강했지? 은혁이형이 마침 술먹자 하는데 같이 갈래??§§\"헐 너무좋지 재밌겠다.\"§§§※폭풍같던 한 학기였다.§성적은 그럭저럭 이지만 많은 사람과 사귀게 되고, 춤실력도 늘었다.§종강 이후로 은혁선배, 해훈이랑 크루를 만들게 되었고, 홍대에서도 공연을 했다.§첫인상이 별로였던 해훈이가 여러가지 반전 모습을 계속 보여주어§나는 해훈이에게 관심이 생겨갔고, 결국 cc를 하게 되었다.§다음 학기에는 어떤 일이 생길지 ※정※말 ※기※대※된※다※.■";
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
		text.innerHTML += '<img src="kimhae02.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
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
	
	text.innerHTML = "\'뭔가 종강했는데 시원 섭섭하네 후...\'<br/><br/>(마침 지나가는 김해훈이 보인다..)<br/>\"해훈아!!! 김해훈!!\"<br/><br/><img src=\"kimhae02.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>21학번 김해훈: 어 ??? 아.. 안녕!?!<br/><br/>\"아까 프밍 시험볼때 너 제일 빨리 나가는거 같던데 너 공부도 잘했었구나..\"<br/><br/>21학번 김해훈: 맞아 하하.. 겨우 금메달 땄어<br/><br/>\"금메달이뭐야 ?\"<br/><br/>21학번 김해훈: 제일 빨리 나갔다고 ㅋㅋ 뭐라는지 하나도 모르겠어서 그냥 빨리 나왔어<br/><br/>\"아 뭐야 난 또 공부 잘하는줄 알았네\"<br/><br/>21학번 김해훈: 방금 종강했지? 은혁이형이 마침 술먹자 하는데 같이 갈래??<br/><br/>\"헐 너무좋지 재밌겠다.\"<br/><br/><br/>폭풍같던 한 학기였다.<br/>성적은 그럭저럭 이지만 많은 사람과 사귀게 되고, 춤실력도 늘었다.<br/>종강 이후로 은혁선배, 해훈이랑 크루를 만들게 되었고, 홍대에서도 공연을 했다.<br/>첫인상이 별로였던 해훈이가 여러가지 반전 모습을 계속 보여주어<br/>나는 해훈이에게 관심이 생겨갔고, 결국 cc를 하게 되었다.<br/>다음 학기에는 어떤 일이 생길지 정말 기대된다.<br/><br/><br/><br/><br/><a href=\"result.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);