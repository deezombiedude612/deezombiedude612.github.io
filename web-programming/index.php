<?php
require "../assets/includes/common-css.php";
require "../assets/includes/common-js.php";
require "../assets/includes/fa-shortcut.php";
require "../assets/includes/navi.php";
require "../assets/includes/shortcut-icon.php";

?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<?php include "../assets/includes/meta.html"; ?>
		<title>ITS30605 Web Programming</title>

		<?php shortcut_icon(1); ?>
		<?php common_css(1); ?>

		<!-- External CSS -->
		<link href="../assets/css/its30605.css" rel="stylesheet">
	</head>

	<body>
		<div class="container-fluid">
			<div class="section">
				<h1 class="section-title">Web Programming</h1>
				<h2 class="section-title">
					<span id="week_span">If you see this message, enable JavaScript in your browser.</span>
				</h2>
				<h3 class="section-title">
					F2F Class this week: Group <span id="decide_f2f"></span>
					<br>
					Online Class this week: Group <span id="decide_online"></span>
				</h3>

				<hr>
				<p class="text-center">Note: Highlighted columns indicate those who are not going for F2F sessions this
					week.</p>
			</div>
			<!-- /div.section -->

			<div class="section row">
				<!-- SESSION 1 -->
				<div class="col-xl-4" id="session-1">
					<h4 class="section-title">Session 1</h4>
					<p class="text-center">Wednesday, 2:00pm-4:00pm @ D7.14</p>
					<div id="group-count-1" class="text-center pb-3"></div>
					<!-- /div#group-count-1 -->

					<table class="table table-sm table-dark table-hover">
						<thead class="text-center">
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Group</th>
						</thead>
						<tbody id="session-1-tbody"></tbody>
					</table>
					<!-- /table.table.table-sm.table-dark.table-hover -->
				</div>
				<!-- /div#session-1 -->

				<!-- SESSION 2 -->
				<div class="col-xl-4" id="session-2">
					<h4 class="section-title">Session 2</h4>
					<p class="text-center">Thursday, 2:00pm-4:00pm @ D7.14</p>
					<div id="group-count-2" class="text-center pb-3"></div>
					<!-- /div#group-count-2 -->

					<table class="table table-sm table-dark table-hover">
						<thead class="text-center">
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Group</th>
						</thead>
						<tbody id="session-2-tbody"></tbody>
					</table>
					<!-- /table.table.table-sm.table-dark.table-hover -->
				</div>
				<!-- /div#session-2 -->

				<!-- SESSION 3 -->
				<div class="col-xl-4" id="session-3">
					<h4 class="section-title">Session 3</h4>
					<p class="text-center">Wednesday, 10:00am-12:00pm @ D7.13</p>
					<div id="group-count-3" class="text-center pb-3"></div>
					<!-- /div#group-count-3 -->

					<table class="table table-sm table-dark table-hover">
						<thead class="text-center">
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Group</th>
						</thead>
						<tbody id="session-3-tbody"></tbody>
					</table>
					<!-- /table.table.table-sm.table-dark.table-hover -->
				</div>
				<!-- /div#session-3 -->
			</div>
			<!-- /div.section.row -->
		</div>
		<!-- /div.container-fluid -->

		<?php common_js(1); ?>
		<script src="../assets/js/web_programming.js"></script>
	</body>

</html>
