<?php
$connection = null;

/**
 * connectDb
 *
 * @return void
 */
function connectDb() {
	/* MySQL Database Connection */
	$db_user = "root";
	$db_pw = "Dzombiedude612";
	$db_name = "portfolio";

	static $connection;
	if ($connection === null) {
		$connection = new mysqli("localhost", $db_user, $db_pw, $db_name);
		if ($connection->error) die($connection->connect_error);
	}

	return $connection;
}

/**
 * disconnectDb
 *
 * @param  mixed $connection
 * @return void
 */
function disconnectDb($connection) {
	if ($connection !== null) $connection->close();
}
