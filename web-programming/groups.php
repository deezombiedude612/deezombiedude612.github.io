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
				<h2 class="section-title">Assignment 3 Groups</h2>

				<hr>
			</div>
			<!-- /div.section -->

			<div class="section text-center" id="session-selection">
				<button class="btn btn-dark btn-outline-light px-5" id="groups-s1" onclick="showGroups(1);">
					Session 1
				</button>
				<button class="btn btn-dark btn-outline-light px-5" id="groups-s2" onclick="showGroups(2);">
					Session 2
				</button>
				<button class="btn btn-dark btn-outline-light px-5" id="groups-s3" onclick="showGroups(3);">
					Session 3
				</button>
			</div>
			<!-- /div#session-selection -->

			<div class="section row wp-group justify-content-center" id="groups-1">
			</div>
			<!-- /div#groups-1 -->

			<div class="section row wp-group justify-content-center" id="groups-2">
			</div>
			<!-- /div#groups-2 -->

			<div class="section row wp-group justify-content-center" id="groups-3">
			</div>
			<!-- /div#groups-3 -->
		</div>
		<!-- /div.container-fluid -->

		<?php common_js(1); ?>
		<script src="../assets/js/wp-groups.js"></script>
	</body>

</html>
