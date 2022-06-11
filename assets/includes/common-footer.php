<?php

/**
 * common_footer
 *
 * @param  mixed $up_layers
 * @return void
 */
function common_footer($up_layers) {
	$banner_img_ext = "png";

	$banner_img = "assets/images/footer-banner" . "." . $banner_img_ext;
	$banner_img_x1 = "assets/images/footer-banner@1x" . "." . $banner_img_ext;

	$front_append = "";
	if ($_SERVER["HTTP_HOST"] == "localhost")
		for (; $up_layers > 0; $up_layers--) $front_append = $front_append . "../";
	else {
		$front_append = $_SERVER["REQUEST_SCHEME"] == "https" ? "https://" : "";
		$front_append .= $_SERVER["HTTP_HOST"];
		$front_append .= "/";
	}
?>
<footer>
	<picture>
		<source srcset="<?= $front_append . $banner_img_x1; ?> 1x, <?= $front_append . $banner_img; ?> 2x,"
			type="image/<?= $banner_img_ext; ?>">

		<img src="<?= $front_append . $banner_img_x1; ?>" alt="Footer Banner" id="footer_banner">
	</picture>
	<p>
		@<span id="year"></span> Henry Heng &#x1F989;<br>
		<a class="text-decoration-none" href="https://twitter.com/lucy_was_taken_" target="_blank">
			<i class="fab fa-twitter fa-lg footer-fa"></i>
			Footer art by @lucy_was_taken_
		</a>
	</p>
	<ul class="d-inline-block">
		<li>
			<a href="https://twitter.com/deezombiedude" target="_blank">
				<i class="fab fa-twitter fa-lg footer-fa"></i>
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/deezombiedude/" target="_blank">
				<i class="fab fa-instagram fa-lg footer-fa"></i>
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/henryheng612/" target="_blank">
				<i class="fab fa-linkedin-in fa-lg footer-fa"></i>
			</a>
		</li>
		<li>
			<a href="https://www.github.com/deezombiedude612" target="_blank">
				<i class="fab fa-github fa-lg footer-fa"></i>
			</a>
		</li>
		<li>
			<a href="https://www.youtube.com/user/deezombiedude/" target="_blank">
				<i class="fab fa-youtube fa-lg footer-fa"></i>
			</a>
		</li>
		<li>
			<a href="https://twitch.tv/deezombiedude/" target="_blank">
				<i class="fab fa-twitch fa-lg footer-fa"></i>
			</a>
		</li>
		<li>
			<a href="https://t.me/deezombiedude" target="_blank">
				<i class="fab fa-telegram-plane fa-lg footer-fa"></i>
			</a>
		</li>
	</ul>
</footer>
<!-- /footer -->
<?php
}
