var convert = new String(); //변형된 값

function convert_file(value) { // value는 저장 번호, start는 시작 위치
	var one = localStorage.getItem('one');
	var band = localStorage.getItem('band');
	var dance = localStorage.getItem('dance');
	var OT_Liqure = localStorage.getItem('OT_Liqure');
	var Metro = localStorage.getItem('Metro');
	var DO = localStorage.getItem('DO');
	var LeeDoHyeon = localStorage.getItem('LeeDoHyeon');
	var LeeGaEun = localStorage.getItem('LeeGaEun');
	var JiEunhye = localStorage.getItem('JiEunhye');
	var KimGangJae = localStorage.getItem('KimGangJae');
	var LeeEunhyeok = localStorage.getItem('LeeEunhyeok');
	var KimHaeHun = localStorage.getItem('KimHaeHun');
	var face = localStorage.getItem('face');
	var four = localStorage.getItem('four');
	var ImChaeYeon = localStorage.getItem('ImChaeYeon');
	var two = localStorage.getItem('two');

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
	
	var I = localStorage.getItem('I');
	var N = localStorage.getItem('N');
	var T = localStorage.getItem('T');
	var J = localStorage.getItem('J');
	
	if (one == null) { // 0
		one = "0";
	}
	if (band == null) { // 1
		band = "0";
	}
	if (dance == null) { // 2
		dance = "0";
	}
	if (OT_Liqure == null) { // 3
		OT_Liqure = "0";
	}
	if (Metro == null) {
		Metro = "0";
	}
	if (DO == null) {
		DO = "0";
	}
	if (LeeDoHyeon == null) {
		LeeDoHyeon = "0";
	}
	if (LeeGaEun == null) {
		LeeGaEun = "0";
	}
	if (JiEunhye == null) {
		JiEunhye = "0";
	}
	if (KimGangJae == null) {
		KimGangJae = "0";
	}
	if (LeeEunhyeok == null) {
		LeeEunhyeok = "0";
	}
	if (KimHaeHun == null) {
		KimHaeHun = "0";
	}
	if (face == null) {
		face = "0";
	}
	if (four == null) {
		four = "0";
	}
	if (ImChaeYeon == null) {
		ImChaeYeon = "0";
	}
	if (two == null) {
		two = "0";
	}
	if (I == null) {
		I = "0";
	}
	if (N == null) {
		N = "0";
	}
	if (T == null) {
		T = "0";
	}
	if (J == null) {
		J = "0";
	}
	
	convert = one + band + dance + OT_Liqure + Metro + DO + LeeDoHyeon + LeeGaEun + JiEunhye + KimGangJae + LeeEunhyeok + KimHaeHun + face + four + ImChaeYeon + two + I + N + T + J;

	if (value == 1) {
		localStorage.setItem('convert1', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert1_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert1_name', name);
	}
	else if (value == 2) {
		localStorage.setItem('convert2', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert2_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert2_name', name);
	}
	else if (value == 3) {
		localStorage.setItem('convert3', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert3_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert3_name', name);
	}
	else if (value == 4) {
		localStorage.setItem('convert4', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert4_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert4_name', name);
	}
}

function decomposition_file(value) {
	if (value == 1) {
		convert = localStorage.getItem('convert1');
	} 
	else if (value == 2) {
		convert = localStorage.getItem('convert2');
	}
	else if (value == 3) {
		convert = localStorage.getItem('convert3');
	}
	else if (value == 4) {
		convert = localStorage.getItem('convert4');
	}
	
	var one = convert.charAt(0);
	var band = convert.charAt(1);
	var dance = convert.charAt(2);
	var OT_Liqure = convert.charAt(3);
	var Metro = convert.charAt(4);
	var DO = convert.charAt(5);
	var LeeDoHyeon = convert.charAt(6);
	var LeeGaEun = convert.charAt(7);
	var JiEunhye = convert.charAt(8);
	var KimGangJae = convert.charAt(9);
	var LeeEunhyeok = convert.charAt(10);
	var KimHaeHun = convert.charAt(11);
	var face = convert.charAt(12);
	var four = convert.charAt(13);
	var ImChaeYeon = convert.charAt(14);
	var two = convert.charAt(15);
	var I = convert.charAt(16);
	var N = convert.charAt(17);
	var T = convert.charAt(18);
	var J = convert.charAt(19);
	
	localStorage.setItem('one', one);
	localStorage.setItem('band', band);
	localStorage.setItem('dance', dance);
	localStorage.setItem('OT_Liqure', OT_Liqure);
	localStorage.setItem('Metro', Metro);
	localStorage.setItem('DO', DO);
	localStorage.setItem('LeeDoHyeon', LeeDoHyeon);
	localStorage.setItem('LeeGaEun', LeeGaEun);
	localStorage.setItem('JiEunhye', JiEunhye);
	localStorage.setItem('KimGangJae', KimGangJae);
	localStorage.setItem('LeeEunhyeok', LeeEunhyeok);
	localStorage.setItem('KimHaeHun', KimHaeHun);
	localStorage.setItem('face', face);
	localStorage.setItem('four', four);
	localStorage.setItem('ImChaeYeon', ImChaeYeon);
	localStorage.setItem('two', two);
	localStorage.setItem('I', I);
	localStorage.setItem('N', N);
	localStorage.setItem('T', T);
	localStorage.setItem('J', J);
}

function clear_file() {
	 localStorage.removeItem('number');
	 localStorage.removeItem('one');
	 localStorage.removeItem('band');
	 localStorage.removeItem('dance');
	 localStorage.removeItem('OT_Liqure');
	 localStorage.removeItem('Metro');
	 localStorage.removeItem('DO');
	 localStorage.removeItem('LeeDoHyeon');
	 localStorage.removeItem('LeeGaEun');
	 localStorage.removeItem('JiEunhye');
	 localStorage.removeItem('KimGangJae');
	 localStorage.removeItem('LeeEunhyeok');
	 localStorage.removeItem('KimHaeHun');
	 localStorage.removeItem('face');
	 localStorage.removeItem('four');
	 localStorage.removeItem('ImChaeYeon');
	 localStorage.removeItem('two');
	 localStorage.removeItem('I');
	 localStorage.removeItem('N');
	 localStorage.removeItem('T');
	 localStorage.removeItem('J');
}
