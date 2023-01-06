var OT = localStorage.getItem('OT_Liqure');
if (OT != 2) {
	localStorage.setItem('ImChaeYeon3', 2);
}
else localStorage.setItem('ImChaeYeon2', 2);

localStorage.setItem('LeeGaEun2', 2);

var content = "19학번 임채연: 앧들아~~!!!!!!!! 나도 같이 놀ㅈ자 ㄱ끼워줘~!~§§\"헐 선배 취하신거 아니에요?? 계속 돌아다니면서 술마신거 봤어요 ㅜㅜ\"§§21학번 이가은: 진짜 과대 힘드네요..ㅜ 사람들 신경쓰느라 술도 잘 마셔야하고 레크레이션도 해야하고 수고 많으셨어요 선배ㅜㅜ§§\"그니까... 선배 진짜 대단해요\"§§19학번 임채연: 나도 스무살땐 어>?! 소주 원샷때려도 아무렇지도 않았다 이말이야!!§아무튼 MT 준비 많이 했는데 어땠어???§§\"그냥 술만 먹겠구나 생각했는데 준비된게 엄청 많아서 놀랐어요!!!\"§§19학번 임채연: 히히 고마워 너희들이 재밌게 놀아줘서 너무 기분이 좋다 오늘 먹고죽자!~!!~!!~~~!~§§\'MT 너무 재밌다!! 사람들이랑도 더 친해지고 오길 잘했어!!\'§§※(컴공 21학번 이가은의 주소록이 업데이트 되었다!※)§※(컴공 19학번 임채연의 주소록이 업데이트 되었다!※)■";
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
	else text.innerHTML += content[index++];
	
	if(index >= content.length){
		clearInterval(Id);
	}
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "19학번 임채연: 앧들아~~!!!!!!!! 나도 같이 놀ㅈ자 ㄱ끼워줘~!~<br/><br/>\"헐 선배 취하신거 아니에요?? 계속 돌아다니면서 술마신거 봤어요 ㅜㅜ\"<br/><br/>21학번 이가은: 진짜 과대 힘드네요..ㅜ 사람들 신경쓰느라 술도 잘 마셔야하고 레크레이션도 해야하고 수고 많으셨어요 선배ㅜㅜ<br/><br/>\"그니까... 선배 진짜 대단해요\"<br/><br/>19학번 임채연: 나도 스무살땐 어>?! 소주 원샷때려도 아무렇지도 않았다 이말이야!!<br/>아무튼 MT 준비 많이 했는데 어땠어???<br/><br/>\"그냥 술만 먹겠구나 생각했는데 준비된게 엄청 많아서 놀랐어요!!!\"<br/><br/>19학번 임채연: 히히 고마워 너희들이 재밌게 놀아줘서 너무 기분이 좋다 오늘 먹고죽자!~!!~!!~~~!~<br/><br/>\'MT 너무 재밌다!! 사람들이랑도 더 친해지고 오길 잘했어!!\'<br/><br/>(컴공 21학번 이가은의 주소록이 업데이트 되었다!)<br/>(컴공 19학번 임채연의 주소록이 업데이트 되었다!)<br/><br/><br/><br/><br/><a href=\"8.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);