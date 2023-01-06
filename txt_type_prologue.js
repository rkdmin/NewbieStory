	var content = "◇ §§§나는 지금까지 꿈 없이 살아왔다※.※.※.※.※ §§§날 키워주신 부모님은 적어도 대학교는 나와야 한다며 억지로 공부를 하게 되었고, 좋지도 꼭 그렇다고 나쁘지도 않은 대학교에 입학했다. §§§§걱정 반 설렘 반!!! 앞으로 어떤 일이 일어날지 정말 기대된다.■";
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
	else if (content[index] == '○')
	{
		text.innerHTML += '<img src="book.png" height="150" width="150">';
		index++;
	}
	else if (content[index] == '◆')
   	{
        $('.music').html('');
        index++;
    }
	else if (content[index] == '■') {
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="2(OT).html" rel="external" style="float:right">다음..</a>';
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	text.innerHTML = "나는 지금까지 꿈 없이 살아왔다.... <br/><br/><br/>날 키워주신 부모님은 적어도 대학교는 나와야 한다며 억지로 공부를 하게 되었고, 좋지도 꼭 그렇다고 나쁘지도 않은 대학교에 입학했다. <br/><br/><br/><br/>걱정 반 설렘 반!!! 앞으로 어떤 일이 일어날지 정말 기대된다.<br/><br/><br/><br/><br/><a href=\"2(OT).html\" rel=\"external\" style=\"float:right\">다음..</a>";
});

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);

///// mbti initialize

localStorage.setItem('I', 50);
localStorage.setItem('N', 50);
localStorage.setItem('T', 50);
localStorage.setItem('J', 50);