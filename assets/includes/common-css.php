<?php

/**
 * common_css
 *
 * @param  mixed $up_layers
 * @return void
 */
function common_css($up_layers) {
	$fontawesome = "assets/css/fontawesome.css";

	$layers = "";
	for (; $up_layers > 0; $up_layers--) $layers = $layers . "../";
?>
<!-- Font Awesome CSS -->
<link href="<?= $layers . $fontawesome; ?>" rel="stylesheet">
<?php
}
