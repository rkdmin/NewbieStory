function open_telephone() {
	var LeeDoHyeon = localStorage.getItem('LeeDoHyeon1');
	var LeeGaEun = localStorage.getItem('LeeGaEun1');
	var JiEunhye = localStorage.getItem('JiEunhye1');
	var KimGangJae = localStorage.getItem('KimGangJae1');
	var LeeEunhyeok = localStorage.getItem('LeeEunhyeok1');
	var KimHaeHun = localStorage.getItem('KimHaeHun1');
	var ImChaeYeon = localStorage.getItem('ImChaeYeon1');
	
	// update 변수
	
	var KGJ2 = localStorage.getItem('KimGangJae2');
	var KGJ3 = localStorage.getItem('KimGangJae3');
	
	var ICY2 = localStorage.getItem('ImChaeYeon2');
	var ICY3 = localStorage.getItem('ImChaeYeon3');
	
	var LEH2 = localStorage.getItem('LeeEunhyeok2');
	var LEH3 = localStorage.getItem('LeeEunhyeok3');
	
	var LGE2 = localStorage.getItem('LeeGaEun2');
	
	var LDH2 = localStorage.getItem('LeeDoHyeon2');
	
	var JEH2 = localStorage.getItem('JiEunhye2');
	
	var key = localStorage.getItem('key');
	//

	if (KimGangJae == 2 && KGJ2 == 2 && KGJ3 == 2) {
		$('#KimGangJae').html('<img src="KimGangJae.jpg" height="300" width="300"><p style="font-size:15px;">컴공 19학번 김강재 선배님</p><p style="font-size:15px;">1.오티 뒷풀이 때 알게되었고, <br/>Metro 동아리에서 기타를 맡고 있다.</p><p style="font-size:15px;">2.내가 오티 뒷풀이에서 술을 주구장창 먹고 쓰러졌을 때 <br/>고맙게도 택시를 태워 집에 안전히 귀가 시켜주었다.</p><p style="font-size:15px;">3. MT 때 보니 기타만 잘치는줄 알았는데 <br/>노래도 잘 부른다. <br/>살짝 장난끼가 있지만 정말 친절하다.</p>');
	}
	else if (KimGangJae == 2 && KGJ2 == 2) {
		$('#KimGangJae').html('<img src="KimGangJae.jpg" height="300" width="300"><p style="font-size:15px;">컴공 19학번 김강재 선배님</p><p style="font-size:15px;">1.오티 뒷풀이 때 알게되었고, <br/>Metro 동아리에서 기타를 맡고 있다.</p><p style="font-size:15px;">2.내가 오티 뒷풀이에서 술을 주구장창 먹고 쓰러졌을 때 <br/>고맙게도 택시를 태워 집에 안전히 귀가 시켜주었다.</p><p style="font-size:15px;">???</p>');
	}
	else if (KimGangJae == 2) {
		$('#KimGangJae').html('<img src="KimGangJae.jpg" height="300" width="300"><p style="font-size:15px;">컴공 19학번 김강재 선배님</p><p style="font-size:15px;">1.오티 뒷풀이 때 알게되었고, <br/>Metro 동아리에서 기타를 맡고 있다.</p><p style="font-size:15px;">???</p><p style="font-size:15px;">???</p>');
	}
	else $('#KimGangJae').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');

	if (ICY2 == 2 && ICY3 == 2) {
		$('#ImChaeYeon').html('<img src="ImChaeYeon.jpg" height="300" width="300"><p style="font-size:15px;">컴공 19학번 임채연 선배님</p><p style="font-size:15px;">1. 오티 때 처음 봤던 우리 과 과대 언니. <br/>술을 좋아하는 것 같다.</p><p style="font-size:15px;">2. MT 때 레크레이션 하는 모습과 여기저기 사람들 <br/>신경쓰는 모습이 정말 멋있었다.</p><p style="font-size:15px;">3. 항상 밝던 채연선배랑 여러 얘기를 나누며 <br/>인간적인 모습을 많이 볼 수 있어서 좋았다.</p>');
	}
	else if (ICY2 == 2) {
		$('#ImChaeYeon').html('<img src="ImChaeYeon.jpg" height="300" width="300"><p style="font-size:15px;">컴공 19학번 임채연 선배님</p><p style="font-size:15px;">1. 오티 때 처음 봤던 우리 과 과대 언니. <br/>술을 좋아하는 것 같다.</p><p style="font-size:15px;">2. MT 때 레크레이션 하는 모습과 여기저기 사람들 <br/>신경쓰는 모습이 정말 멋있었다.</p><p style="font-size:15px;">???</p>');
	}
	else $('#ImChaeYeon').html('<img src="ImChaeYeon.jpg" height="300" width="300"><p style="font-size:15px;">컴공 19학번 임채연 선배님</p><p style="font-size:15px;">1. 오티 때 처음 봤던 우리 과 과대 언니. <br/>술을 좋아하는 것 같다.</p><p style="font-size:15px;">???</p><p style="font-size:15px;">???</p>');

	if (LeeEunhyeok == 2 && LEH2 == 2 && LEH3 == 2) {
		$('#LeeEunhyeok').html('<img src="LeeEunhyeok.jpg" height="300" width="300"><p style="font-size:15px;">영상 20학번 이은혁 선배님</p><p style="font-size:15px;">1. 오티 때 과대 언니 덕분에 알게되었고 <br/>DO라는 댄스 동아리를 하고 있다.</p><p style="font-size:15px;">2. 내가 면접을 보고나서 칭찬을 엄청 해주셨고, <br/>다음에 같이 공연하자고 제의 받았다.</p><p style="font-size:15px;">3. MT때 픽업도 해주고 술마실때 꼭 챙겨준다는 <br/>말도 들었다. <br/>알면 알 수록 마음 따뜻한 선배다.</p>');
	}
	else if (LeeEunhyeok == 2 && LEH2 == 2) {
		$('#LeeEunhyeok').html('<img src="LeeEunhyeok.jpg" height="300" width="300"><p style="font-size:15px;">영상 20학번 이은혁 선배님</p><p style="font-size:15px;">1. 오티 때 과대 언니 덕분에 알게되었고 <br/>DO라는 댄스 동아리를 하고 있다.</p><p style="font-size:15px;">2. 내가 면접을 보고나서 칭찬을 엄청 해주셨고, <br/>다음에 같이 공연하자고 제의 받았다.</p><p style="font-size:15px;">???</p>');
	}
	else if (LeeEunhyeok == 2) {
		$('#LeeEunhyeok').html('<img src="LeeEunhyeok.jpg" height="300" width="300"><p style="font-size:15px;">영상 20학번 이은혁 선배님</p><p style="font-size:15px;">1. 오티 때 과대 언니 덕분에 알게되었고 <br/>DO라는 댄스 동아리를 하고 있다.</p><p style="font-size:15px;">???</p><p style="font-size:15px;">???</p>');
	}
	else $('#LeeEunhyeok').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');
	
	if (LeeGaEun == 2 && LGE2 == 2) {
		$('#LeeGaEun').html('<img src="LeeGaEun.jpg" height="300" width="300"><p style="font-size:15px;">컴공 21학번 이가은</p><p style="font-size:15px;">1.오티 화장실에서 처음 내가 <br/>말을 걸어 알게되었다.</p><p style="font-size:15px;">2.MT를 통해서 더욱 가까워 진 것 같아 기분이 좋다.</p>');
	}
	else if (LeeGaEun == 2) {
		$('#LeeGaEun').html('<img src="LeeGaEun.jpg" height="300" width="300"><p style="font-size:15px;">컴공 21학번 이가은</p><p style="font-size:15px;">1.오티 화장실에서 처음 내가 <br/>말을 걸어 알게되었다.</p><p style="font-size:15px;">???</p>');
	}
	else $('#LeeGaEun').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');

	if (LeeDoHyeon == 2 && LDH2 == 2) {
		$('#LeeDoHyeon').html('<img src="LeeDoHyeon.jpg" height="300" width="300"><p style="font-size:15px;">심아 21학번 이도현</p><p style="font-size:15px;">1. Metro 면접에서 알게되었고 <br/>노래를 잘 하는 것 같다.</p><p style="font-size:15px;">2. 면허도 있고 차도 있어서 MT 때 픽업해줬다. <br/>처음엔 약간 불안했지만 운전을 잘한다. <br/>20살인데 대단하다. <br/>그리고 술 마시며 진지한 얘기를 많이 나눠서 <br/>조금 더 가까워 진 것 같다.</p>');
	}
	else if (LeeDoHyeon == 2) {
		$('#LeeDoHyeon').html('<img src="LeeDoHyeon.jpg" height="300" width="300"><p style="font-size:15px;">심아 21학번 이도현</p><p style="font-size:15px;">1. Metro 면접에서 알게되었고 <br/>노래를 잘 하는 것 같다.</p><p style="font-size:15px;">???</p>');
	}
	else $('#LeeDoHyeon').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');
	
	if (KimHaeHun == 2) {
		$('#KimHaeHun').html('<img src="KimHaeHun.png" height="300" width="300"><p style="font-size:15px;">컴공 21학번 김해훈</p><p style="font-size:15px;">1. D.O MT때 알게됐는데, <br/>처음에 엄청 소심해 보였는데 반전매력이 있다. <br/>서로 이런저런 얘기를 많이해서 처음 봤는데도 <br/>가까워진 것 같다</p><p style="font-size:15px;">');
	}
	else $('#KimHaeHun').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');

	if (JiEunhye == 2 && JEH2 == 2) {
		$('#JiEunhye').html('<img src="JiEunhye.jpg" height="300" width="300"><p style="font-size:15px;">고등학교 선배 지은혜 언니</p><p style="font-size:15px;">1. 고등학교 때부터 서로의 부모님끼리 친해 알게 되었고, <br/>계속 놀다보니 친해져 아직도 자주 만나는 언니다.</p><p style="font-size:15px;">2. 면접에 떨어지고 하소연 하는데 <br/>은혜 언니도 남자친구랑 헤어져 같이 울었다.</p>');
	}
	else if (JiEunhye == 2) {
		$('#JiEunhye').html('<img src="JiEunhye.jpg" height="300" width="300"><p style="font-size:15px;">고등학교 선배 지은혜 언니</p><p style="font-size:15px;">1. 고등학교 때부터 서로의 부모님끼리 친해 알게 되었고, <br/>계속 놀다보니 친해져 아직도 자주 만나는 언니다.</p><p style="font-size:15px;">???</p>');
	}
	else $('#JiEunhye').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');
	
	if (key == 2) {
		$('#key').html('<img src="Metropolis.jpg" height="300" width="300"><p style="font-size:15px;">2021.10. 메트로폴리스 제작팀. 김재강, 이강민, 임채연.<br/>김재강은 드럼. 이강민은 기타. 임채연은 베이스를 <br/>실제로 연주하고 있다.<br/>각각 16학번 17학번 21학번. <br/>메트로폴리스는 한신대학교 밴드부이다.</p>');
	} else $('#key').html('<img src="Unknown.jpg" height="300" width="300"><p style="font-size:15px;">???(아직 모르는 사람)</p>');
}

function format_telephone() {
	localStorage.removeItem('LeeDoHyeon1');
	localStorage.removeItem('JiEunhye1');
	localStorage.removeItem('KimGangJae1');
	localStorage.removeItem('LeeEunhyeok1');
	localStorage.removeItem('KimHaeHun1');
	localStorage.removeItem('LeeGaEun1');
	localStorage.removeItem('ImChaeYeon1');
	
	// update 변수
	
	localStorage.removeItem('KimGangJae2');
	localStorage.removeItem('KimGangJae3');
	
	localStorage.removeItem('ImChaeYeon2');
	localStorage.removeItem('ImChaeYeon3');
	
	localStorage.removeItem('LeeEunhyeok2');
	localStorage.removeItem('LeeEunhyeok3');
	
	localStorage.removeItem('LeeGaEun2');
	
	localStorage.removeItem('LeeDoHyeon2');
	
	localStorage.removeItem('JiEunhye2');
	
	localStorage.removeItem('key');
}