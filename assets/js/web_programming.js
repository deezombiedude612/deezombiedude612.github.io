const session1 = [
	[
		// group 1 201908 intake
		["IMAN HAFIZ BIN KHAIRUL ANUAR", 1],
		// group 1 202001 intake
		["ABDUL LATIF MOHAMED IRFAN FAZLANI", 1],
		["AMIR HAZIQ BIN OTHMAN", 1],
		["CHEAH BING XIAN", 1],
		["CHELSEA LIAWWANDY", 0],
		["DYLAN TAN CHING ZHE", 1],
		["HUMERA SALEH", 1],
		["JOSHUA MARK NAIR", 1],
		["KAVIN RAJ A/L PARANTHAMAN", 1],
		["KIM KI MIN", 0],
		["M M YASIN BIN SHAFIQ", 1],
		["MAHOMED AQEEL AHMED HUSSEIN", 0],
		// group 1 202003 intake
		["BRYAN TAN YEE KHAI", 1],
		["DINESH PANIKKER A/L SIVADASAN", 1],
	],
	[
		// group 2 201908 intake
		["QUA YU HANG", 1],
		// group 2 202001 intake
		["MOHAMMED AHNAF TAJWAR", 1],
		["MUHAMMAD NAFEEZ BIN NASSER", 1],
		["MUHAMMAD RAKIBUR RAHMAN JIM", 1],
		["NG KEN LIN", 1],
		["NOWREEN ZAMAN BHUIYAN", 0],
		["RYAN THIAGARAJAH", 1],
		["SIN KIRK YI", 1],
		["TAY JIA MING", 0],
		["TI SHIN KIR", 1],
		["WU DONG-YIU", 1],
		["YEO ZHEN HAW", 1],
		// group 2 202003 intake
		["PRAVEEN RAJENDRAN", 1],
	],
];
const session2 = [
	[
		// group 1 202001 intake
		["BRIAN LEE KAR ONN", 1],
		// group 1 202003 intake
		["AMAL DANISH AZMAN", 0],
		["BENJAMIN JESUDEAN DANIEL", 1],
		["CHAI QI QIAN", 1],
		["CHOO ZHENG", 1],
		["HEW PUI EE", 1],
		["IRFAN QURESHI BIN MOHAMAD ASLAM", 1],
		["LAU JING EN", 1],
		["LAU YUEN SHUEN", 1],
		["LEOW HAN BIN", 1],
		["LIAW WEI ZHEN", 1],
		["MALCOLM TAN YU XUEN", 1],
		["MATTHIAS NIVEN RAJ", 1],
		["MUHAMMAD DANIEL BIN ZAKARIAH", 1],
		["NG BOON BIN", 1],
	],
	[
		// group 2 202003 intake
		["NIVETHITHA S.LOGANATHAN", 1],
		["NORMAN HENG CHON SHENG", 1],
		["PONG JING XUAN", 1],
		["RACHEL GOH WEN XUEN", 1],
		["SIN JUN YU", 1],
		["SURIA KUMAR A/L KARUPPANNAN", 1],
		["TAJESWAR A/L RAMESH", 1],
		["TAN JIA CHUN", 1],
		["TAN JUN QI", 1],
		["THEVENDRE A/L KUMARAN", 1],
		["VALENTINE CHEPKORIR LANG'AT", 1],
		["VETRI A/L THANABALAN", 1],
		["YAP MING XUAN", 1],
	],
];
const session3 = [
	[
		// group 1 202001 intake
		["EDMUND GOH SEH BENG", 1],
		// group 1 202003 intake
		["ANG WEI JIA", 1],
		["BRENDA NG ZHI YI", 1],
		["CHEN XIAN NING", 1],
		["CLIFF CHONG ZHENG-EU", 1],
		["DAIYAN HAZEEQ BIN MOHAMED YAZMAN", 1],
		["GOH SHEE XUAN", 1],
		["MUHAMMAD ZIDAN BIN HAIROLLAH", 1],
		["NATHANIEL TAY XIN RONG", 1],
		["ARIANA NGAI SU WEI", 1],
		["DANIEL HO KWOK PIN", 1],
		["GAM CHEE XUAN", 1],
		["HARRISH SUTHARSHAN", 1],
		["HAZEEM BIN ASMIE", 1],
		["HENG CHLOE", 1],
		["HO SOOK KEI", 1],
		["JEFFREY CHEOK JUN WAH", 1],
	],
	[
		// group 2 202003 intake
		["JESSLYN LAW HEW YAN", 1],
		["KONG LI WEI", 1],
		["LEE EE LING", 1],
		["LIM YUK YING", 1],
		["LOO ZEN HEI, DEXEL", 1],
		["MUHAMMAD AMIRUL FIKRI BIN ABDUL HAFIZ", 1],
		["NADHILA NAJWA BINTI SHAROLNIZAM", 1],
		["ONG SHI HOONG", 1],
		["OOI ZONG YUAN", 1],
		["ROSHANTH A/L JEYARAJ", 1],
		["SYED AMIEL MATEEN BIN SYED ADRIN PUTRA", 1],
		["TAN KATHY", 1],
		["TANG YI FONG", 1],
		["TENG KWOK SANG", 1],
		["WHOONG ZI WEI", 1],
		["WONG CHEE WAI", 1],
	],
];

function add_session_row(i, append1, index, studentName, append2) {
	groupAlphabet = (i % 2 === 0) ? 'A' : 'B';

	return `
	<tr class="group-${i + 1}${append1}">
	<td class="text-center">${index}</td>
	<td>${studentName}${append2}</td>
	<td class="text-center">${i + 1} (${groupAlphabet})</td>
	</tr>`;
}

/* Add Session 1 Table Values */
let append1 = "", append2 = "";
let index = 1;
for (let i = 0; i < session1.length; ++i) {
	for (let student of session1[i]) {
		append1 = "", append2 = "";	// reset append values

		if (!student[1]) {
			append1 = " table-primary text-dark font-weight-normal";
			append2 = " (online)";
		}
		$("tbody#session-1-tbody").append(add_session_row(i, append1, index, student[0], append2));
		++index;
	}
}

/* Add Session 2 Table Values */
index = 1;
for (let i = 0; i < session2.length; ++i) {
	for (let student of session2[i]) {
		append1 = "", append2 = "";	// reset append values

		if (!student[1]) {
			append1 = " table-primary text-dark font-weight-normal";
			append2 = " (online)";
		}
		$("tbody#session-2-tbody").append(add_session_row(i, append1, index, student[0], append2));
		++index;
	}
}

/* Add Session 3 Table Values */
index = 1;
for (let i = 0; i < session3.length; ++i) {
	for (let student of session3[i]) {
		append1 = "", append2 = "";	// reset append values

		if (!student[1]) {
			append1 = " table-primary text-dark font-weight-normal";
			append2 = " (online)";
		}
		$("tbody#session-3-tbody").append(add_session_row(i, append1, index, student[0], append2));
		++index;
	}
}

function week_decide(f2f, online) {
	$("#decide_f2f").html(f2f);
	$("#decide_online").html(online);

	$(".group-" + parseInt(online)).addClass("table-primary text-dark");
}

const week_dates = [
	[new Date(2020, 7, 31), new Date(2020, 8, 5)],		// Week 2
	[new Date(2020, 8, 6), new Date(2020, 8, 12)],		// Week 3
	[new Date(2020, 8, 13), new Date(2020, 8, 19)],		// Week 4
	[new Date(2020, 8, 20), new Date(2020, 8, 26)],		// Week 5
	[new Date(2020, 8, 27), new Date(2020, 9, 3)],		// Week 6
	[new Date(2020, 9, 4), new Date(2020, 9, 10)],		// Week 7
	[new Date(2020, 9, 11), new Date(2020, 9, 17)],		// Week 8
	[new Date(2020, 9, 18), new Date(2020, 9, 24)],		// Week 9
	[new Date(2020, 9, 25), new Date(2020, 9, 31)],		// Week 10 (e-Learning Week)
	[new Date(2020, 10, 1), new Date(2020, 10, 7)],		// Week 11
	[new Date(2020, 10, 8), new Date(2020, 10, 14)],	// Week 12
	[new Date(2020, 10, 15), new Date(2020, 10, 21)],	// Week 13
	[new Date(2020, 10, 22), new Date(2020, 10, 28)],	// Week 14
];

const currentDate = new Date();

for (let index = 0; index < week_dates.length; ++index) {
	// 1 day = 8.64e7 milliseconds
	if (currentDate >= week_dates[index][0] && currentDate <= new Date(week_dates[index][1].valueOf() + 8.64e7)) {
		let dMonth_1 = week_dates[index][0].toLocaleString('default', { month: 'long' });
		let dMonth_2 = week_dates[index][1].toLocaleString('default', { month: 'long' });
		$("#week_span").html(
			"Week " + (index + 2) + ": "
			+ week_dates[index][0].getDate() + " " + dMonth_1 + " " + week_dates[index][0].getFullYear() + " - "
			+ week_dates[index][1].getDate() + " " + dMonth_2 + " " + week_dates[index][1].getFullYear()
		);

		if (index + 2 != 10) {		// Week 2 to 9
			// if (index + 2 < 10) {		// Week 2 to 9
			if (index % 2 === 0) week_decide("2", "1");
			else week_decide("1", "2");
			// } else if (index + 2 > 10) {	// Week 11 to 14
			// 	if (index % 2 === 0) week_decide("1", "2");
			// 	else week_decide("2", "1");
		} else {
			$("#decide_f2f").html("");
			$("#decide_online").html("1 & 2 (e-Learning Week)");
			$(".group-1, .group-2").addClass("table-primary text-dark");
		}

		// break;
	}
}