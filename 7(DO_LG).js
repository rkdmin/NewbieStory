var name = localStorage.getItem('name');

var content = "(가은이에게 전화를 건다.§§)" + "\"가은아 ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ\"§§21학번 이가은 : 응응??! 무슨일이야!!!!§§\"나 큰일났어 ㅜㅜㅜ 난 당연히 과엠티 동아리엠티 둘 다 가려했는데 날짜가 겹쳐버렸어ㅜㅜㅜ 아\"§§??? : " + name + "!!! 머라고?!!!§§\"누..누구세요??? 혹시.. 채연 선배??\"§§19학번 임채연: 너 안오기만 해봐!!!!!! 내가 너랑 MT가서 놀 생각에 지금 일주일 동안 잠을 못잤다고§§\'거..거짓말\'§§19학번 임채연: 수원역 근처 살지?? 내가 가은이랑 너랑 같이 픽업 할테니까 무조건 와야돼!!!§§\"헐 태워다 주시는 건가요???\"§§19학번 임채연: 당근이지 그럼 MT날 보자 ~~!!!!!!!!!!!§§§§※(※M※T※ 당※일※)§※ ●19학번 임채연: 네!!! 마지막으로 술 먹기전에 처음에 나눠줬던 번호 있죠!!!??? 번호에 당첨되면 무려!!....§§19학번 임채연: 이 비싼 양주를 드립니다..!!!!!!!§당첨 번호는 !!!!!!!!!!!!!§§사람들: 두구두구두구두구두구././.,.,.,.,§§19학번 임채연: 35번!!!!!!!!!§.... 35번 없나요?!!!§§\'헐 뭐야 뭐야무어ㅑ 나였네\'§§\"※저!!※저※저※요※!!!!\"§§21학번 이가은: 와 완전 대박이다... MT와서 양주도 마시고 고맙다 친구를 잘 뒀어 후...§§\"양주 때매..?? 너무해\"§§21학번 이가은: 히히 장난이지 나 이거 옷어때????? MT때 입을라고 샀는데 택배가 안와서 식겁했어 정말 이거! 진짜 비싼거야!!!§§\'솔직히 비싼 옷치곤 별로 안이쁜거같은데.... 머라고하지...\'■";
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
		text.innerHTML += '</br></br><img src="mt.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
	}
	else if (content[index] == '★')
	{
		text.innerHTML += '</br></br><img src="mt.jpg" height="150" width="250" style="margin-left:35px; border: 1px solid #2EE59D"><br/><br/>';
		index++;
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
	
	text.innerHTML = "(가은이에게 전화를 건다.)<br/><br/>\"가은아 ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ\"<br/><br/>21학번 이가은 : 응응??! 무슨일이야!!!!<br/><br/>\"나 큰일났어 ㅜㅜㅜ 난 당연히 과엠티 동아리엠티 둘 다 가려했는데 날짜가 겹쳐버렸어ㅜㅜㅜ 아\"<br/><br/>??? : " + name + "!!! 머라고?!!!<br/><br/>\"누..누구세요??? 혹시.. 채연 선배??\"<br/><br/>19학번 임채연: 너 안오기만 해봐!!!!!! 내가 너랑 MT가서 놀 생각에 지금 일주일 동안 잠을 못잤다고<br/><br/>\'거..거짓말\'<br/><br/>19학번 임채연: 수원역 근처 살지?? 내가 가은이랑 너랑 같이 픽업 할테니까 무조건 와야돼!!!<br/><br/>\"헐 태워다 주시는 건가요???\"<br/><br/>19학번 임채연: 당근이지 그럼 MT날 보자 ~~!!!!!!!!!!!<br/><br/><br/><br/>(MT 당일)<br/><br/><img src=\"mt.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>19학번 임채연: 네!!! 마지막으로 술 먹기전에 처음에 나눠줬던 번호 있죠!!!??? 번호에 당첨되면 무려!!....<br/><br/>19학번 임채연: 이 비싼 양주를 드립니다..!!!!!!!<br/>당첨 번호는 !!!!!!!!!!!!!<br/><br/>사람들: 두구두구두구두구두구././.,.,.,.,<br/><br/>19학번 임채연: 35번!!!!!!!!!<br/>.... 35번 없나요?!!!<br/><br/>\'헐 뭐야 뭐야무어ㅑ 나였네\'<br/><br/>\"저!!저저요!!!!\"<br/><br/>21학번 이가은: 와 완전 대박이다... MT와서 양주도 마시고 고맙다 친구를 잘 뒀어 후...<br/><br/>\"양주 때매..?? 너무해\"<br/><br/>21학번 이가은: 히히 장난이지 나 이거 옷어때????? MT때 입을라고 샀는데 택배가 안와서 식겁했어 정말 이거! 진짜 비싼거야!!!<br/><br/>\'솔직히 비싼 옷치곤 별로 안이쁜거같은데.... 머라고하지...\'<br/><br/><br/><br/><br/><a onclick=\"select();\" style=\"float:right\">다음...</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);