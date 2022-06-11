<?php

/**
 * common_css
 *
 * @param  mixed $up_layers
 * @return void
 */
function common_css($up_layers) {
	$fontawesome = "assets/css/fontawesome.css";
	$front_append = "";

	if ($_SERVER["HTTP_HOST"] == "localhost")
		for (; $up_layers > 0; $up_layers--) $front_append = $front_append . "../";
	else {
		$front_append = $_SERVER["REQUEST_SCHEME"] == "https" ? "https://" : "";
		$front_append .= $_SERVER["HTTP_HOST"];
		$front_append .= "/";
	}
?>
<!-- Font Awesome CSS -->
<link href="<?= $front_append . $fontawesome; ?>" rel="stylesheet">

<?php
}
