<?php
function requireList($up_layers) {
	$front_append = "";

	if ($_SERVER["HTTP_HOST"] == "localhost")
		for (; $up_layers > 0; $up_layers--) $front_append = $front_append . "../";
	else {
		$front_append = $_SERVER["REQUEST_SCHEME"] == "https" ? "https://" : "";
		$front_append .= $_SERVER["HTTP_HOST"];
		$front_append .= "/";
	}

	$reqList = [
		"common-css.php",
		"common-footer.php",
		"common-js.php",
		"fa-shortcut.php",
		"navi.php",
		"shortcut-icon.php",
		"title.php",
	];

	foreach ($reqList as $req)
		require $front_append . "/assets/includes/" . $req;
}

// require "../assets/includes/common-css.php";
// require "../assets/includes/common-footer.php";
// require "../assets/includes/common-js.php";
// require "../assets/includes/fa-shortcut.php";
// require "../assets/includes/navi.php";
// require "../assets/includes/shortcut-icon.php";
// require "../assets/includes/title.php";
