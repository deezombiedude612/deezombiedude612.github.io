const ooad_group1 = [
	["0344583", "BEE YONG BIN"],
	["0342379", "LAN CHEE ONN"],
	["0343993", "RYAN TAN JUN LERK"],
	["0343496", "TAN YI WEI"],
];

const ooad_group2 = [
	["0343420", "LIM WEI JECT"],
	["0343686", "LIM ZE MIN"],
	["0342375", "LOW KAY JING"],
	["0338881", "PHUNG SHUN CHENG"],
	["0343999", "TEOH CHIN HOU"]
];

const ooad_group3 = [
	["0341204", "ALYKASYM BEGOV"],
	["0343537", "ANG ZHI HENG"],
	["0344105", "NG KAI HONG"],
	["0341711", "THIBEN KUMAR A/L NAMUSU@KUMAR"]
];

function add_group_row(i, studentId, studentName, leaderFlag) {
	let trAppend = (leaderFlag) ? ` class="table-primary text-dark font-weight-normal"` : "";
	let append = (leaderFlag) ? " (LEADER)" : "";

	return `
	<tr${trAppend}>
		<td>${i}</td>
		<td>${studentId}</td>
		<td>${studentName}${append}</td>
	</tr>
`;
}

for (let i = 0; i < ooad_group1.length; ++i) {
	$("tbody#group-1-tbody").append(add_group_row(i + 1, ooad_group1[i][0], ooad_group1[i][1], (i == 0)));
}

for (let i = 0; i < ooad_group2.length; ++i) {
	$("tbody#group-2-tbody").append(add_group_row(i + 1, ooad_group2[i][0], ooad_group2[i][1], (i == 0)));
}

for (let i = 0; i < ooad_group3.length; ++i) {
	$("tbody#group-3-tbody").append(add_group_row(i + 1, ooad_group3[i][0], ooad_group3[i][1], (i == 0)));
}