<?php
// Display Semester Badge
function semesterBadge($dateStartString, $dateEndString) {
	$dateStart = new DateTime($dateStartString);
	$dateEnd = new DateTime($dateEndString);
	$dateNow = new DateTime();

	if ($dateNow < $dateStart) $badgeType = "dark";				// semester has not commenced
	elseif ($dateEnd < $dateNow) $badgeType = "warning";	// semester has elapsed
	else $badgeType = "success";													// semester is current
?>
<span class="badge bg-<?= $badgeType; ?>"><?= $dateStart->format('m/Y') ?> Semester</span>
<?php
}

// QnA Section
function qna($q, $a) {
?>
<dt><?= $q; ?></dt>
<dd>&#9654; <?= $a; ?></dd>
<?php
}

/*
 * Change semester start and end dates as and when required
 * First pair is chosen by default
 */
$semesters = [
	["2021-04-19", "2021-07-25"],	// April 2021 Semester
	["2021-01-25", "2021-03-14"],	// January 2021 Semester (new intake)
	["2020-08-24", "2020-11-29"],	// August 2020 Semester

	["2021-08-23", "2020-11-28"],	// August 2021 Semester
	["2022-08-22", "2020-11-27"],	// August 2022 Semester
];

/**
 * Change week array every semester
 */
$weeks = [
	"2021-04-19",
	"2021-04-26",
	"2021-05-03",
	"2021-05-10",
	"2021-05-17",
	"2021-05-24",
	"2021-05-31",
	"2021-06-07",
	"2021-06-14",
	"2021-06-21",
	"2021-06-28",
	"2021-07-05",
	"2021-07-12",
	"2021-07-19",
];
