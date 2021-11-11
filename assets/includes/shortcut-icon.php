<?php

function shortcut_icon($up_layers) {
	$layers = "";

	for (; $up_layers > 0; $up_layers--) $layers = $layers . "../";

?>
<!-- Favicon -->
<link href="<?= $layers; ?>assets/images/hhicon.png" rel="shortcut icon">

<?php
}
