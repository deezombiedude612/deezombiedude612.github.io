<?php
class NavItem {
	private $name;
	private $extension;
	private $keyword;
	private $target;

	public function __construct($keyword, $name, $link, $target) {
		$this->keyword = $keyword;
		$this->name = $name;
		$this->extension = $link;
		$this->target = $target;
	}

	public function getKey() {
		return $this->keyword;
	}
	public function getName() {
		return $this->name;
	}
	public function getExt() {
		return $this->extension;
	}
	public function getTarget() {
		return $this->target;
	}
}

function naviMain($triggerKey, $givenKey, $link, $tabName, $target) {
?>
<li class="nav-item">
	<?php
		if ($triggerKey === $givenKey) :
		?>
	<a class="nav-link active" href="."><?= $tabName; ?></a>
	<div class="underline"></div>
	<?php
		else :
		?>
	<a class="nav-link" href="<?= $link; ?>" target="<?= $target; ?>"><?= $tabName; ?></a>
	<div class="underline"></div>
	<?php
		endif;
		?>
</li>
<?php
}

function naviDropdown1($triggerKey, $givenKey, $link, $tabName, $target) {
	if ($triggerKey === $givenKey)
		echo '<a class="dropdown-item active" href="." target="' . $target . '">' . $tabName . '</a>';
	else
		echo '<a class="dropdown-item" href="' . $link . '" target="' . $target . '">' . $tabName . '</a>';
}

function navi($activePageKey, $up_layers) {
	// $icon_location = "assets/images/hhicon.png";
	$icon_location = "assets/images/snowtrap_favico.png";
	$layers = "";
	for (; $up_layers > 0; $up_layers--) $layers = $layers . "../";

	// Nav Layer 1
	$nav_layer1 = [];

	array_push($nav_layer1, new NavItem('index', 'Home', $layers . '.', ''));
	array_push($nav_layer1, new NavItem('', 'Main Website', 'https://www.henryheng612.com', '_blank'));
	// array_push($nav_layer1, new NavItem('credentials', 'Credentials', $layers . './credentials/', ''));
	// array_push($nav_layer1, new NavItem('portfolio', 'Portfolio', $layers . './portfolio/', ''));

	// Nav Layer 2 (Group A) - TC Practical Webpages
	$nav_layer2a = [];
	array_push($nav_layer2a, new NavItem('', 'ITS30605 Web Programming', $layers . './wp-labs', '_blank'));
	array_push($nav_layer2a, new NavItem('', 'ITS42004 Object-Oriented Programming', $layers . './oop-labs', '_blank'));

	// // Nav Layer 2 (Group B Part 1) - Miscellaneous Projects
	// $nav_layer2b1 = [];

	// array_push($nav_layer2b1, new NavItem('downloadables', 'Downloadables', $layers . './downloadables/', ''));
	// array_push($nav_layer2b1, new NavItem('notes', 'Study Notes', $layers . './notes/', ''));
	// // array_push($nav_layer2b1, new NavItem('teaching', 'Teaching Material', $layers . './teaching/', ''));
	// array_push($nav_layer2b1, new NavItem('', 'GitHub IO Website', 'https://deezombiedude612.github.io', '_blank'));

	// // Nav Layer 2 (Group B Part 2) - Personal Development
	// $nav_layer2b2 = [];

	// // array_push($nav_layer2b2, new NavItem('explored', 'Christianity Explored Series', $layers . './explored/', ''));
	// array_push($nav_layer2b2, new NavItem('poketypes', '<sup>P</sup><sub>K</sub><sup>M</sup><sub>N</sub> Type Matchups', $layers . './poketypes/', ''));
	// array_push($nav_layer2b2, new NavItem('pray4covid19', '#KCMCpray4covid19', $layers . './pray4covid19/', ''));
?>

<nav class="navbar navbar-expand-lg navbar-dark shadow fixed-top bg-primary" id="main-navi">
	<div class="container-fluid">
		<a class="navbar-brand" href="<?= $layers; ?>.">
			<img id="nav-logo" src="<?= $layers; ?><?= $icon_location; ?>" alt="nav-logo" />
		</a>
		<!-- a.navbar-brand -->

		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- /button.navbar-toggler -->

		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<?php foreach ($nav_layer1 as $nav_item1) naviMain($nav_item1->getKey(), $activePageKey, $nav_item1->getExt(), $nav_item1->getName(), $nav_item1->getTarget()); ?>

				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
						aria-expanded="false">
						TC Practical Labs
					</a>

					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
						<?php foreach ($nav_layer2a as $nav_item2a) naviDropdown1($nav_item2a->getKey(), $activePageKey, $nav_item2a->getExt(), $nav_item2a->getName(), $nav_item2a->getTarget());
							?>
					</ul>
				</li>
				<!-- /li.nav-item.dropdown -->

				<!-- <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown"
						aria-expanded="false">
						Miscellaneous
					</a>

					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown2">
						<?php //foreach ($nav_layer2b1 as $nav_item2b1) naviDropdown1($nav_item2b1->getKey(), $activePageKey, $nav_item2b1->getExt(), $nav_item2b1->getName(), $nav_item2b1->getTarget()); 
						?>
						<li>
							<hr class="dropdown-divider" />
						</li>
						<?php //foreach ($nav_layer2b2 as $nav_item2b2) naviDropdown1($nav_item2b2->getKey(), $activePageKey, $nav_item2b2->getExt(), $nav_item2b2->getName(), $nav_item2b2->getTarget()); 
						?>
					</ul>
				</li> -->
				<!-- /li.nav-item.dropdown -->

				<!-- <li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
				</li> -->
			</ul>
		</div>
		<!-- /#navbarSupportedContent -->
	</div>
	<!-- /.container-fluid -->
</nav>
<!-- /nav#main-navi -->

<?php
}
