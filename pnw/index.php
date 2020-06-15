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
		<title>Henry Heng | Praise and Worship</title>

		<?php shortcut_icon(1); ?>

		<?php common_css(1); ?>

		<!-- External CSS -->
		<link href="../assets/css/pnw.css" rel="stylesheet">
	</head>

	<body>
		<?php navi('pnw', 1); ?>

		<div class="container-fluid">
			<div class="section">
				<h1 class="section-title">Praise and Worship Corner</h1>
			</div>
			<!-- /div.section -->
		</div>
		<!-- /div.container-fluid -->

		<?php require "../assets/includes/common-footer.html";?>

		<?php common_js(1); ?>

		<!-- External JS -->
		<script src="../assets/js/main.js"></script>
		<script src="../assets/js/navbar.js"></script>
	</body>

</html>
