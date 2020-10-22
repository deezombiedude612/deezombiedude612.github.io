const groups1 = [
	{
		leader: ["JOSHUA MARK NAIR", "0342458"],
		members: [
			["M M YASIN BIN SHAFIQ", "0342504"],
			["TAY JIA MING", "0342929"],
			["WU DONG-YIU", "0343056"],
		]
	},
	{
		leader: ["HUMERA SALEH", "0342776"],
		members: [
			["MUHAMMAD RAKIBUR RAHMAN JIM", "0341863"],
			["NOWREEN ZAMAN BHUIYAN", "0341789"],
			["SIN KIRK YI", "0342767"],
		]
	},
	{
		leader: ["DYLAN TAN CHING ZHE", "0341928"],
		members: [
			["DINESH PANIKKER A/L SIVADASAN", "0343024"],
			["KAVIN RAJ A/L PARANTHAMAN", "0342720"],
		]
	},
	{
		leader: ["CHEAH BING XIAN", "0341928"],
		members: [
			["BRYAN TAN YEE KHAI", "0342674"],
			["NG KEN LIN", "0342401"],
			["RYAN THIAGARAJAH", "0342906"],
		]
	},
	{
		leader: ["KIM KI MIN", "0341754"],
		members: [
			["HO JIE MING AARON", "0340772"],
			["QUA YU HANG", "0340077"],
			["YEO ZHEN HAW", "0343022"],
		]
	},
	{
		leader: ["MOHAMMED AHNAF TAJWAR", "0341892"],
		members: [
			["ABDUL LATIF MOHAMED IRFAN FAZLANI", "0341932"],
			["MAHOMED AQEEL AHMED HUSSEIN", "0341952"],
			["TI SHIN KIR", "0341896"],
		]
	},
	{
		leader: ["CHELSEA LIAWANDY", "0341884"],
		members: [
			["AMIR HAZIQ BIN OTHMAN", "0342907"],
			["IMAN HAFIZ BIN KHAIRUL ANUAR", "0340792"],
			["MUHAMMAD NAFEEZ BIN NASSER", "0342738"],
		]
	},
];

const groups2 = [
	{
		leader: ["LEOW HAN BIN", "0344010"],
		members: [
			["AMAL DANISH AZMAN", "0343592"],
			["BRIAN LEE KAR ONN", "0342297"],
			["TAN JUN QI", "0344752"],
		]
	},
	{
		leader: ["IRFAN QURESHI BIN MOHAMAD ASLAM", "0344653"],
		members: [
			["MATTHIAS NIVEN RAJ", "0344209"],
			["TAJESWAR A/L RAMESH", "0344008"],
			["THEVENDREN A/L KUMARAN", "0343977"],
		]
	},
	{
		leader: ["SIN JUN YU", "0344011"],
		members: [
			["NIVETHITHA S. LOGANATHAN", "0343975"],
			["NORMAN HENG CHON SHENG", "0344697"],
			["SURIA KUMAR A/L KARUPPANNAN", "0344452"],
		]
	},
	{
		leader: ["CHOO ZHENG", "0344233"],
		members: [
			["CHAI QI QIAN", "0344399"],
			["LAU YUEN SHUEN", "0344250"],
			["LIAW WEI ZHEN", "0343750"],
		]
	},
	{
		leader: ["TAN JIA CHUN", "0343749"],
		members: [
			["MUHAMAD DANIEL BIN ZAKARIAH", "0344486"],
			["VALENTINE CHEPKORIR LANG'AT", "0342856"],
			["VETRI A/L THANABALAN", "0344292"],
		]
	},
	{
		leader: ["LAU JING EN", "0344474"],
		members: [
			["BENJAMIN JESUDEAN DANIEL", "0344286"],
			["HEW PUI EE", "0344051"],
			["RACHEL GOH WEN XUEN", "0344708"],
		]
	},
	{
		leader: ["MALCOLM TAN YU XUEN", "0344054"],
		members: [
			["NG BOON BIN", "0343966"],
			["PONG JING XUAN", "0344435"],
			["YAP MING XUAN", "0343067"],
		]
	},
];

const groups3 = [
	{
		leader: ["HENG CHLOE", "0343254"],
		members: [
			["TAN KATHY", "0342363"],
			["TANG YI FONG", "0342508"],
			["TENG KWOK SANG", "0343089"],
			["WONG CHEE WAI", "0342360"],
		]
	},
	{
		leader: ["LIM YUK YING", "0342536"],
		members: [
			["BRENDA NG ZHI YI", "0343915"],
			["KONG LI WEI", "0343155"],
			["WHOONG ZI WEI", "0342855"],
		]
	},
	{
		leader: ["HAZEEM BIN ASMIE", "0343138"],
		members: [
			["HARRISH SUTHARSHAN", "0343501"],
			["JEFFREY CHEOK JUN WAH", "0342634"],
			["OOI ZONG YUAN", "0342638"],
		]
	},
	{
		leader: ["ONG SHI HOONG", "0342065"],
		members: [
			["CLIFF CHONG ZHENG-EU", "0343965"],
			["DANIEL HO KWOK PIN", "0342453"],
			["LOO ZEN HEI, DEXEL", "0343509"],
			["PRAVEEN RAJENDRAN", "0342821"],
		]
	},
	{
		leader: ["JESSLYN LAW HEW YAN", "0343119"],
		members: [
			["GOH SHEE XUAN", "0343706"],
			["MUHAMMAD ZIDAN BIN HAIROLLAH", "0344573"],
			["SYED AMIEL MATEEN BIN SYED ADRIN PUTRA", "0343074"],
		]
	},
	{
		leader: ["NADHILA NAJWA BINTI SHAROLNIZAM", "0342286"],
		members: [
			["EDMUND GOH SEH BENG", "0342601"],
			["MUHAMMAD AMIRUL FIKRI BIN ABDUL HAFIZ", "0343084"],
			["NATHANIEL TAY XIN RONG", "0344734"],
		]
	},
	{
		leader: ["HO SOOK KEI", "0342578"],
		members: [
			["ARIANA NGAI SU WEI", "0343161"],
			["DAIYAN HAZEEQ BIN MOHAMED YAZMAN", "0344240"],
			["LEE EE LING", "0342506"],
		]
	},
	{
		leader: ["CHEN XIAN NING", "0344251"],
		members: [
			["ANG WEI JIA", "0344251"],
			["GAM CHEE XUAN", "0342347"],
			["ROSHANTH A/L JEYARAJ", "0342730"],
		]
	},
];

const groups = [
	groups1,
	groups2,
	groups3
];

function showGroups(sessionNo) {
	if (sessionNo >= 1 && sessionNo <= 3) {
		$("#groups-s1, #groups-s2, #groups-s3").removeClass("active");
		$("#groups-s" + sessionNo).addClass("active");
		$(".wp-group").hide();
		$("#groups-" + sessionNo).show();
	}
}

for (let i = 0; i < groups.length; ++i) {
	for (let j = 0; j < groups[i].length; ++j) {
		$("#groups-" + (i + 1)).append(`
			<div class="col-lg-4 groups-${i + 1}">
				<h3 class="section-title">Group ${j + 1}</h3>
				<table class="table table-sm table-dark table-hover" id="group${i + 1}-${j + 1}">
					<thead class="text-center">
						<th scope="col">#</th>
						<th scope="col">Student ID</th>
						<th scope="col">Name</th>
					</thead>
					<tbody id="group${i + 1}-${j + 1}-body"></tbody>
		`);

		/* add group leader */
		$("#group" + (i + 1) + "-" + (j + 1) + "-body").append(`
			<tr class="table-primary text-dark font-weight-normal">
				<td class="text-center">1</td>
				<td class="text-center">${groups[i][j].leader[1]}</td>
				<td>${groups[i][j].leader[0]} (LEADER)</td>
			</tr>
		`);

		/* add group members */
		for (let k = 0; k < groups[i][j].members.length; ++k) {
			$("#group" + (i + 1) + "-" + (j + 1) + "-body").append(`
				<tr>
					<td class="text-center">${k + 2}</td>
					<td class="text-center">${groups[i][j].members[k][1]}</td>
					<td>${groups[i][j].members[k][0]}</td>
				</tr>
			`);
		}

		$("#groups-" + (i + 1)).append(`
					
				</table>
				<!-- /table#group${i + 1}-${j} -->
			</div>
			<!-- /div.row -->
		`);
	}
}

$(window).on("load", showGroups(1));
