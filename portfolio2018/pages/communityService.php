<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 17/09/2018
	 * Time: 10:03 PM
	 */
	
	?>

<!DOCTYPE html>

<html lang="en">
<head>
	<title>Henry Heng | Community Service</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial scale=1.0">

	<link rel="stylesheet" type="text/css" href="../css/community-service.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">

	<link rel="stylesheet" href="../css/hamburgers.css">
	
	<link rel="shortcut icon" href="../images/hhicon.png">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<!-- external Javascript -->
	<script type="text/javascript" src="../js/main.js"></script>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-78618719-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-78618719-2');
	</script>

</head>

<body class="index">
	<div class="wrapper">
		<nav class="clearfix">
			<a href="index.php"><img src="../images/name@2x.png"></a>
			<!--			<div class="nav_other" onclick="myFunction(this)">-->
			<!--				<div class="bar1"></div>-->
			<!--				<div class="bar2"></div>-->
			<!--				<div class="bar3"></div>-->
			<!--			</div>-->
			<button class="hamburger hamburger--emphatic" style="padding: 15px 0 0 15px;" type="button" onclick="toggleHamburger(this)">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
				<span class="hamburger-label">MENU</span>
			</button>
			<br>
			<ul class="ul-toggle">
				<li><a class="nav_other" href="https://dzdpersonaldevelopment.wordpress.com/">Personal Development</a></li>
				<li><a class="nav_other" href="">Community Service</a></li>
			</ul>
		</nav>
		
		<!-- MAIN CONTENT -->
		
		<div class="block">
			<h1>COMMUNITY SERVICE</h1>
		</div>
		
		<div class="block">
			<a href="communityService/good-samaritan-home.php">
				<div class="thumbnail">
					<img src="../images/good-samaritan-home.jpg">
					<div class="thumbnail-text" style="width: 100%;">
						<h3>Good Samaritan Home</h3>
					</div>
				</div>
			</a>

			<a href="communityService/el-shaddai.php">
				<div class="thumbnail">
					<div style="background: white">
					<img src="../images/ECB_logo175.png">
					</div>
					<div class="thumbnail-text" style="width: 100%; margin-top: 15px;">
						<h3>El-Shaddai Refugee Learning Center</h3>
					</div>
				</div>
			</a>
		</div>

		<footer>
			<p>@ <?php echo date("Y");?> Henry Heng</p>
			<a href="https://twitter.com/HenryHHW" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>&nbsp;
			<a href="https://www.instagram.com/deezombiedude/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>&nbsp;
			<a href="https://www.facebook.com/deezombiedude612" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>&nbsp;
			<a href="https://www.linkedin.com/in/henryheng612/" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>&nbsp;
			<a href="https://www.github.com/deezombiedude612" target="_blank"><i class="fa fa-github fa-lg"></i></a>&nbsp;
			<a href="https://www.youtube.com/user/deezombiedude612/" target="_blank"><i class="fa fa-youtube-play fa-lg"></i></a>
		</footer>
	</div>
</body>
</html>
