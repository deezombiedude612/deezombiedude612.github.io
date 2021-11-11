<?php
function fas($iconType, $size, ?string $link) {
	if (isset($link))
		echo '<a class="has-fa" href="' . $link . '"><i class="fas fa-' . $iconType . ' fa-' . $size . '"></i></a>';
	else echo '<i class="fas fa-' . $iconType . ' fa-' . $size . '"></i>';
}

function fab($iconType, $size, ?string $link) {
	if (isset($link))
		echo '<a class="has-fa" href="' . $link . '"><i class="fab fa-' . $iconType . ' fa-' . $size . '"></i></a>';
	else echo '<i class="fab fa-' . $iconType . ' fa-' . $size . '"></i>';
}
