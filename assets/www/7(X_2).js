var content = "19학번 임채연: 응응 그래도 좋은점도 많아 여러 사람들이랑 친해지기 쉬워지고 일을 할 때마다 힘들지만 보람을 느껴 너도 학생회 관심있으면 얘기해 ^^§§(채연 선배와 많은 얘기를 나누다 잠들었다.)■";
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
	
	text.innerHTML = "19학번 임채연: 응응 그래도 좋은점도 많아 여러 사람들이랑 친해지기 쉬워지고 일을 할 때마다 힘들지만 보람을 느껴 너도 학생회 관심있으면 얘기해 ^^<br/><br/>(채연 선배와 많은 얘기를 나누다 잠들었다.)<br/><br/><br/><br/><br/><a href=\"8.html\" rel=\"external\" style=\"float:right\">다음..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);