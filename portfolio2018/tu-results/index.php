<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 17/09/2018
	 * Time: 8:49 PM
	 */
	
	?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Henry Heng | TU Results</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial scale=1.0">
		
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.amber-orange.min.css">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
		<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
		<link rel="stylesheet" type="text/css" href="../css/tu-results-main.css">
		
		<link rel="shortcut icon" href="../images/hhicon.png">
		
		<!-- external Javascript -->
		<script type="text/javascript" src="../js/login.js"></script>
	</head>
	<body>
		<div class="container">
			<div style="z-index: 1;" class="div-tu-results-index">
				<h4>Henry's Exam Results</h4>
				<h5>Bachelor of Computer Science (Hons)</h5>
				
				<p><a href="15010_results.php" target="_blank">Overall</a></p>
				<p><a href="bcs7.html" target="_blank">Semester 7 (Mar 2018 - Jul 2018)</a></p>
				<p><a href="bcs6.html" target="_blank">Semester 6 (Jan 2018 - Mar 2018)</a></p>
				<p><a href="bcs5.html" target="_blank">Semester 5 (Aug 2017 - Dec 2017)</a></p>
				<p><a href="bcs4.html" target="_blank">Semester 4 (Mar 2017 - Jul 2017)</a></p>
				<p><a href="bcs3.html" target="_blank">Semester 3 (Aug 2016 - Dec 2016)</a></p>
				<p><a href="bcs2.html" target="_blank">Semester 2 (Mar 2016 - Jul 2016)</a></p>
				<p><a href="bcs1.html" target="_blank">Semester 1 (Aug 2015 - Dec 2015)</a></p>
				
				<h5>Foundation in Computing</h5>
				<p><a href="15004_results.php" target="_blank">Overall</a></p>
				<p><a href="fic2.html" target="_blank">Semester 2 (Jan 2015 - Jun 2015)</a></p>
				<p><a href="fic1.html" target="_blank">Semester 1 (Aug 2014 - Dec 2014)</a></p>
				
				<div style="text-align: center;">
					<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-raised-effect mdl-button--accent" id="btn-back" name="btn-back" onclick="goBack()">GO BACK</button>
				</div>
				
				<p style="text-align: center; line-height: 4em; padding-top: 10px;">@ <?php echo date("Y");?> Henry Heng</p>
			</div>
		</div>
	</body>
</html>
