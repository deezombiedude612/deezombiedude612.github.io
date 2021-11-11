<?php

/**
 * common_js
 *
 * @param  mixed $up_layers
 * @return void
 */
function common_js($up_layers) {
	$bootstrap = "assets/js/bootstrap-js/bootstrap.min.js";
	$jquery = "assets/js/jquery/jquery.min.js";
	$mainjs = "assets/js/main.js";

	$layers = "";
	for (; $up_layers > 0; $up_layers--) $layers = $layers . "../";

?>

<!-- Bootstrap JS -->
<script src="<?= $layers . $bootstrap; ?>"></script>

<!-- jQuery -->
<script src="<?= $layers . $jquery; ?>"></script>

<!-- External JS -->
<script src="<?= $layers . $mainjs; ?>"></script>

<?php
}
