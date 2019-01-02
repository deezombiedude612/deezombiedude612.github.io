<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 17/09/2018
	 * Time: 17:30
	 */
	
	include "../db.php";
	
	session_start();
	
	$valid_username = "is-valid";
	$valid_password = "is-valid";
	$alert = "";
	
	$datetime = date("Y-m-d") . " " . date("H:i:s");
	
	if(isset($_POST['btn-submit'])) {
		// echo "Submitted!";
		$inputUser = $_POST['username'];
		$inputPassword = $_POST['password'];
		
		/*
		$runRetrieveQuery = mysqli_query(connectDb(), "CALL `retrieveCredentials`('" . $inputUser . "', '" . $inputPassword . "');");
		if(mysqli_num_rows($runRetrieveQuery) > 0) {
	//			header("location: tu_pals_content.php");
	//			exit();
			$_SESSION['userID'] = $inputUser;
		} else {
			$valid_username = $valid_password = "is-invalid";
			$alert = "Enter valid credentials.";
		}*/
	}
?>

<!DOCTYPE html>
<html>

<head>
	<title>Henry Heng | TU Results Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial scale=1.0">

	<link rel="stylesheet" type="text/css" href="../css/tu-results-main.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.amber-orange.min.css">
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
	<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

	<link rel="shortcut icon" href="../images/hhicon.png">

	<!-- external Javascript -->
	<script type="text/javascript" src="../js/login.js"></script>
</head>

<body>
	<div class="container">
		<div style="z-index: 1;">
			<form action="../tu-results/index.php" autocomplete="off" method="POST" style="z-index: 3;">
				<h3>Henry Heng's TU Results</h3>
				<br>
				<p><?php echo $alert; ?></p>
				<div class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label <?php echo $valid_username; ?>">
					<input class="mdl-textfield__input" type="text" id="username" name="username" />
					<label class="mdl-textfield__label" for="username">Username</label>
					<span class="mdl-textfield__error">Invalid username!</span>
				</div>
				<br>
				<div class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label <?php echo $valid_password; ?>">
					<input class="mdl-textfield__input" type="password" id="password" name="password" />
					<label class="mdl-textfield__label" for="password">Password</label>
					<span class="mdl-textfield__error">Invalid password!</span>
				</div>
				<br>
				<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-raised-effect mdl-button--accent" id="btn-submit" name="btn-submit">SUBMIT</button>
			</form>
			<div style="text-align: center;">
				<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-raised-effect mdl-button--accent" id="btn-back" name="btn-back" onclick="goBack()">GO BACK</button>
			</div>
			<p style="text-align: center; line-height: 4em; padding-top: 120px;">@ <?php echo date("Y");?> Henry Heng</p>
		</div>
	</div>
</body>

</html>
