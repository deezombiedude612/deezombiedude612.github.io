<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 27/08/2018
	 * Time: 01:23
	 */
	
	session_start();
	$_SESSION = array();
	session_unset();
	session_destroy();
	header("Location: tu_pals_login.php");
	exit();
	
	?>