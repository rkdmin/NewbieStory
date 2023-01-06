var content = "\'큰일이네 기대하고 기대하고 기대했던 첫 MT가...  동아리MT랑 과MT가 겹칠줄이야..... 둘 다 너무 가고싶은데 어쩌지ㅜㅜ\'§§※\'음.. 과에는 가은이가 제일 친하고.. 동아리에는 도현이가 제일 친한데... ㅜㅜ\'§\'아 고민된다 진짜ㅜㅜㅜㅜ 사람들이 과 친구는 많을 수록 좋다하고 근데 또 재미는 동아리가 더 재밌긴한데..\'■";

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
	
	text.innerHTML = "\'큰일이네 기대하고 기대하고 기대했던 첫 MT가...  동아리MT랑 과MT가 겹칠줄이야..... 둘 다 너무 가고싶은데 어쩌지ㅜㅜ\'<br/><br/>\'음.. 과에는 가은이가 제일 친하고.. 동아리에는 도현이가 제일 친한데... ㅜㅜ\'<br/>\'아 고민된다 진짜ㅜㅜㅜㅜ 사람들이 과 친구는 많을 수록 좋다하고 근데 또 재미는 동아리가 더 재밌긴한데..\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);