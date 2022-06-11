<?php

function shortcut_icon($up_layers) {
	// $icon_location = "assets/images/hhicon.png";
	$icon_location = "assets/images/snowtrap_favico.png";
	$front_append = "";

	if ($_SERVER["HTTP_HOST"] == "localhost")
		for (; $up_layers > 0; $up_layers--) $front_append = $front_append . "../";
	else {
		$front_append = $_SERVER["REQUEST_SCHEME"] == "https" ? "https://" : "";
		$front_append .= $_SERVER["HTTP_HOST"];
		$front_append .= "/";
	}
?>
<!-- Favicon -->
<link href="<?php echo $front_append . $icon_location; ?>" rel="shortcut icon">

<?php
}
