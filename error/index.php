<?php
require_once "../assets/includes/common-css.php";
require_once "../assets/includes/common-footer.php";
require_once "../assets/includes/error-js.php";
require_once "../assets/includes/shortcut-icon.php";
require_once "../assets/includes/title.php";

if (!($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET !== [])) {
	header("location: ./?code=404");
	// header("location: ../");
}

// var_dump($_GET);

$desc = "";
$message = "";

switch ($_GET["code"]) {
	case 404:
		$desc = "Page Not Found";
		$message = "Yeah, it seems like we don't have that one here. You lost?";
		break;

	case 403:
		$desc = "Forbidden Access";
		$message = "You probably didn't see this coming.";
		break;

	default:
}

?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<?php include_once "../assets/includes/meta.html" ?>
		<meta name="description" content="<?= $desc; ?>">
		<title><?= $desc; ?></title>

		<?php shortcut_icon(1); ?>

		<?php common_css(1); ?>

		<!-- External CSS -->
		<link href="../assets/css/error.css" rel="stylesheet">
	</head>

	<body>
		<section class="container">
			<section class="text-center" id="error--image-section">
				<section class="bg-secondary border-success border-4">
					<img src="../assets/images/snow_pea_<?= $_GET["code"]; ?>.png" alt="<?= $_GET["code"]; ?>_image" />
				</section>

				<header>
					<a class="text-decoration-none" href="https://twitter.com/lucy_was_taken_" target="_blank">
						<span class="fs-5">
							<i class="fab fa-twitter fa-lg footer-fa"></i>
						</span>
						<span class="fs-3">
							Art by @lucy_was_taken_
						</span>
					</a>
					<h1 class="display-4" id="message"><?= $message; ?></h1>

					<nav class="navbar navbar-expand justify-content-center display-6">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link" href="../">&#x1F3E0; Return Home</a>
								<div class="underline"></div>
							</li>
							<!-- /li.nav-item -->
						</ul>
						<!-- /ul.navbar-nav -->
					</nav>
				</header>

			</section>

		</section>
		<!-- /section.container -->

		<?php common_footer(1); ?>

		<?php common_js(1); ?>
	</body>

</html>
