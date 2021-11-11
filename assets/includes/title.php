<?php
function addTitle($title = "") {
	if ($title !== "") :
?>
<title>Henry Heng | <?= $title; ?></title>
<?php
	else :
	?>
<title>Henry Heng</title>
<?php
	endif;
}
