<?php
function addTitle($title = "") {
	$mainstay_title = "dzd612 Github IO";
	if ($title !== "") :
?>
<title><?= $mainstay_title; ?> | <?= $title; ?></title>
<?php
	else :
	?>
<title><?= $mainstay_title; ?></title>
<?php
	endif;
}
