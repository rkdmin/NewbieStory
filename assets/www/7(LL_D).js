var content = "\"도현아 ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ\"§§21학번 이도현: 응응??! 무슨일이야!!!!§§\"나 큰일났어 ㅜㅜㅜ 난 당연히 과엠티 동아리엠티 둘 다 가려했는데 날짜가 겹쳐버렸어ㅜㅜㅜ 아\"§§21학번 이도현: 헐 .... 나 동아리에 친한사람 너밖에 없는데 어카지ㅜㅜㅜ 당연히 너 가는줄 알았어§§\"사실 나 과에 친한사람이 없거든 .. 가면 재미 없을지도..?\"§§21학번 이도현: 그럼 나랑 같이가서 재밌게 놀자 내가 재밌게 놀아줄겡§§\"그게 맞겠지?? 히히 우리 집 거리도 가까운데 그럼 같이 출발하까???\"§§21학번 이도현: 그래그래!! 나 차 있으니까 편하게 태워다 드리겠습니다 사모님§§\"헐? 멋있다... 벌써?? 부러워 ㅜㅜㅜ\"§§21학번 이도현: 에이~ 아냐 엄마가 차 안쓴다고 빌려준거야 ㅎㅎ§§\"그래도.. 난 무서워서 면허도 못따겠던데 짱이다..\"§§21학번 이도현: 나만 믿으숑!§§§§※(※M※T ※당※일※)§§※21학번 이도현: MT 처음인데 너무 재밌지 않아??§§\"웅웅!! 오늘 오기 너무 잘했어\"§§21학번 이도현: 그.. 너 기타는 잘 돼가??§§\"어렵긴한데 열심히 하고있어!!\"§§§21학번 이도현: 사실 고민이 있어서※.※.※. ※내가 하고 있는 합주팀이 있는데 나는 발라드를 하고 싶은데§사람들은 다 락을 좋아해서 말못하고 그냥 하고 있어.. 잘 어울리는지도 모르겠고 요즘 그래서 좀 우울해..ㅜㅜ■";
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
	
	text.innerHTML = "\"도현아 ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ\"<br/><br/>21학번 이도현: 응응??! 무슨일이야!!!!<br/><br/>\"나 큰일났어 ㅜㅜㅜ 난 당연히 과엠티 동아리엠티 둘 다 가려했는데 날짜가 겹쳐버렸어ㅜㅜㅜ 아\"<br/><br/>21학번 이도현: 헐 .... 나 동아리에 친한사람 너밖에 없는데 어카지ㅜㅜㅜ 당연히 너 가는줄 알았어<br/><br/>\"사실 나 과에 친한사람이 없거든 .. 가면 재미 없을지도..?\"<br/><br/>21학번 이도현: 그럼 나랑 같이가서 재밌게 놀자 내가 재밌게 놀아줄겡<br/><br/>\"그게 맞겠지?? 히히 우리 집 거리도 가까운데 그럼 같이 출발하까???\"<br/><br/>21학번 이도현: 그래그래!! 나 차 있으니까 편하게 태워다 드리겠습니다 사모님<br/><br/>\"헐? 멋있다... 벌써?? 부러워 ㅜㅜㅜ\"<br/><br/>21학번 이도현: 에이~ 아냐 엄마가 차 안쓴다고 빌려준거야 ㅎㅎ<br/><br/>\"그래도.. 난 무서워서 면허도 못따겠던데 짱이다..\"<br/><br/>21학번 이도현: 나만 믿으숑!<br/><br/><br/><br/>(MT 당일)<br/><br/>21학번 이도현: MT 처음인데 너무 재밌지 않아??<br/><br/>\"웅웅!! 오늘 오기 너무 잘했어\"<br/><br/>21학번 이도현: 그.. 너 기타는 잘 돼가??<br/><br/>\"어렵긴한데 열심히 하고있어!!\"<br/><br/><br/>21학번 이도현: 사실 고민이 있어서... 내가 하고 있는 합주팀이 있는데 나는 발라드를 하고 싶은데<br/>사람들은 다 락을 좋아해서 말못하고 그냥 하고 있어.. 잘 어울리는지도 모르겠고 요즘 그래서 좀 우울해..ㅜㅜ<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);