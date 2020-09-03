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
	if (currentDate >= week_dates[index][0] && currentDate <= week_dates[index][1]) {
		let dMonth_1 = week_dates[index][0].toLocaleString('default', { month: 'long' });
		let dMonth_2 = week_dates[index][1].toLocaleString('default', { month: 'long' });
		$("#week_span").html(
			week_dates[index][0].getDate() + " " + dMonth_1 + " " + week_dates[index][0].getFullYear() + " - "
			+ week_dates[index][1].getDate() + " " + dMonth_2 + " " + week_dates[index][1].getFullYear()
		);

		if (index + 2 < 10) {		// Week 2 to 9
			if (index % 2 === 0) week_decide("2", "1");
			else week_decide("1", "2");
		} else if (index + 2 > 10) {	// Week 11 to 14
			if (index % 2 === 0) week_decide("1", "2");
			else week_decide("2", "1");
		} else {
			$("#decide_f2f").html("");
			$("#decide_online").html("1 & 2 (e-Learning Week)");
			$(".group-1, .group-2").addClass("table-primary text-dark");
		}

		// break;
	}
}