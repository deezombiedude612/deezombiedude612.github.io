<?php
require "db-connection.php";

$profiles = [];

$query_profiles = connectDb()->query(
	"SELECT * FROM `profiles`;"
);

if ($query_profiles) {
	if ($query_profiles->num_rows > 0) {
		while ($row = $query_profiles->fetch_assoc()) {
			$profiles[$row['nametag']] = [
				"name" => $row['name'],
				"email" => $row['email']
			];
			if ($row['linkedin']) $profiles[$row['nametag']]["linkedin"] = $row['linkedin'];
			if ($row['official-profile']) $profiles[$row['nametag']]["official-profile"] = $row['official-profile'];
			if ($row['website']) $profiles[$row['nametag']]["website"] = $row['website'];
			if ($row['occupation']) $profiles[$row['nametag']]["occupation"] = $row['occupation'];
			if ($row['affiliation']) $profiles[$row['nametag']]["affiliation"] = $row['affiliation'];
		}
	}
}
