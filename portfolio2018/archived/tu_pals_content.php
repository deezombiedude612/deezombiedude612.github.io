<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 27/08/2018
	 * Time: 01:14
	 */
	
//	if (isset($_SESSION['lastAction']) && (time() - $_SESSION['lastAction'] > 900)) {
//		header("Location: logout.php");
//		exit();
//	}
	
	
	
	?>

<!DOCTYPE HTML>

<html>

<head>
	<title>Henry Heng | PALS Content</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial scale=1.0">
	
	<link rel="shortcut icon" href="../images/hhicon.png">
	
	<link rel="stylesheet" type="text/css" href="../css/pals.css">
	
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
	<!-- Popper JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
	
	<style>
		table th {
			text-align: center;
		}
		.table td {
			vertical-align: middle;
		}
	</style>
</head>

<body>
	<div class="container">
		<form action="logout.php" method="post">
			<div style="text-align: right;">
				<button class="btn btn-outline-dark" id="btn_exit">Exit</button>
			</div>
		</form>
		<h3>PALS Material</h3>
		<p>Taylor's University Lakeside Campus - School of Computing and IT (SoCIT)</p>
		
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="degree-tab" data-toggle="tab" href="#degree" role="tab" aria-controls="degree" aria-selected="true">Degree Modules</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="foundation-tab" data-toggle="tab" href="#foundation" role="tab" aria-controls="foundation" aria-selected="false">Foundation Modules</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="diploma-tab" data-toggle="tab" href="#diploma" role="tab" aria-controls="diploma" aria-selected="false">Diploma Modules</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="teaching-history-tab" data-toggle="tab" href="#teaching-history" role="tab" aria-controls="teaching-history" aria-selected="false">PALS History</a>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active" id="degree" role="tabpanel" aria-labelledby="degree-tab">
				<h5 class="module-title">MTH60804: Computing Mathematics</h5>
<!--				<a href="">Module Information Booklet (MIB)</a><br>-->
				<a href="">August 2017 Mock Examination Paper</a><br>
				<a href="">August 2017 Mock Examination Paper (Answers)</a><br>
				<a href="">March 2017 Mock Examination Paper</a><br>
				<a href="">March 2017 Mock Examination Paper (Answers)</a>
				
				<h5 class="module-title">MTH60104: Mathematics for Computing 1</h5>
				<a href="">Module Information Booklet (MIB)</a><br>
				<a href="">August 2016 Mock Examination Paper</a><br>
				<a href="">August 2016 Mock Examination Paper (Answers)</a><br>
				<a href="">March 2016 Mock Examination Paper</a><br>
				<a href="">March 2016 Mock Examination Paper (Answers)</a>
			</div>
			<div class="tab-pane fade" id="foundation" role="tabpanel" aria-labelledby="foundation-tab">
				<h5 class="module-title">MTH30405: Introduction to Computing Mathematics</h5>
				<a href="">January 2018 Mock Examination Paper</a><br>
				<a href="">January 2018 Mock Examination Paper (Answers)</a><br>
				<a href="">July 2017 Mock Examination Paper</a><br>
				<a href="">July 2017 Mock Examination Paper (Answers)</a>
				
				<h5 class="module-title">MTH30105: Mathematics</h5>
				<a href="">March 2018 Mock Examination Paper</a><br>
				<a href="">March 2018 Mock Examination Paper (Answers)</a><br>
				<a href="">July 2017 Mock Examination Paper</a><br>
				<a href="">July 2017 Mock Examination Paper (Answers)</a>
				
				<h5 class="module-title">MTH30504: Discrete Mathematics</h5>
				<a href="">January 2016 Mock Examination Paper</a><br>
				<a href="">January 2016 Mock Examination Paper (Answers)</a>
				
				<h5 class="module-title">MTH30404: Algebra and Calculus</h5>
				<a href="">January 2016 Mock Examination Paper</a><br>
				<a href="">January 2016 Mock Examination Paper (Answers)</a><br>
			</div>
			<div class="tab-pane fade" id="diploma" role="tabpanel" aria-labelledby="diploma-tab">
				<h5 class="module-title">MTH40303: Computing Mathematics</h5>
				<a href="">March 2017 Mock Examination Paper</a><br>
				<a href="">March 2017 Mock Examination Paper (Answers)</a><br>
				<a href="">July 2016 Mock Examination Paper</a><br>
				<a href="">July 2016 Mock Examination Paper (Answers)</a>
			</div>
			<div class="tab-pane fade" id="teaching-history" role="tabpanel" aria-labelledby="teaching-history-tab">
				<br>
				<table class="table table-bordered">
<!--					<caption style="caption-side: top; text-align: center;">Semester</caption>-->
					<tr>
						<th style="width: 20px;">#</th>
						<th style="width: 150px">Module Code</th>
						<th>Module Name</th>
						<th>Level</th>
						<th style="width: 175px;">Timestamp</th>
						<th>Lecturer</th>
					</tr>
					<tr>
						<td style="text-align: center;">1</td>
						<td style="text-align: center;">MTH30204</td>
						<td>Mathematics</td>
						<td rowspan="6" style="text-align: center;">FIC</td>
						<td style="text-align: center;">02/2015 - 05/2015</td>
						<td>Ireneaus Tan Yeong Yih</td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align: center;">2</td>
						<td rowspan="2" style="text-align: center;">MTH30404</td>
						<td rowspan="2">Algebra and Calculus</td>
<!--						<td style="text-align: center;">FIC</td>-->
						<td style="text-align: center;">08/2015 - 11/2015</td>
						<td rowspan="2">Ireneaus Tan Yeong Yih</td>
					</tr>
					<tr>
						<td style="text-align: center;">01/2016 - 05/2016</td>
					</tr>
					<tr>
						<td style="text-align: center;">3</td>
						<td style="text-align: center;">MTH30504</td>
						<td>Discrete Mathematics</td>
						<td style="text-align: center;">02/2016 - 06/2016</td>
						<td>Ireneaus Tan Yeong Yih</td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align: center;">4</td>
						<td rowspan="2" style="text-align: center;">MTH30405</td>
						<td rowspan="2">Introduction to Computing Mathematics</td>
						<td style="text-align: center;">08/2017 - 12/2017</td>
						<td>Ireneaus Tan Yeong Yih</td>
					</tr>
					<tr>
						<td style="text-align: center;">03/2018 - 06/2018</td>
						<td>Thulasyammal Ramiah Pillai<br>Ireneaus Tan Yeong Yih</td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align: center;">4</td>
						<td rowspan="2" style="text-align: center;">MTH30105</td>
						<td rowspan="2">Mathematics</td>
						<td rowspan="2" style="text-align: center;">FIC, FIE, FIS</td>
						<td style="text-align: center;">09/2017 - 12/2017</td>
						<td>Tee Lee Hong</td>
					</tr>
					<tr>
						<td style="text-align: center;">04/2018 - 07/2018</td>
						<td>Tee Lee Hong</td>
					</tr>
					<tr>
						<td style="text-align: center;">6</td>
						<td style="text-align: center;">ITS40704</td>
						<td>Object-Oriented Programming</td>
						<td rowspan="3" style="text-align: center;">DIT</td>
						<td style="text-align: center;">04/2017 - 06/2017</td>
						<td>Sarojini Devi Nagappan</td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align: center;">7</td>
						<td rowspan="2" style="text-align: center;">MTH40303</td>
						<td rowspan="2">Computing Mathematics</td>
						<td style="text-align: center;">08/2016 - 10/2016</td>
						<td>Shageetha Ramachandran</td>
					</tr>
					<tr>
						<td style="text-align: center;">05/2017 - 06/2017</td>
						<td>Ireneaus Tan Yeong Yih</td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align: center;">8</td>
						<td rowspan="2" style="text-align: center;">MTH60104</td>
						<td rowspan="2">Mathematics for Computing 1</td>
						<td rowspan="4" style="text-align: center;">UWE</td>
						<td style="text-align: center;">04/2016 - 06/2016</td>
						<td>Thulasyammal Ramiah Pillai</td>
					</tr>
					<tr>
						<td style="text-align: center;">09/2016 - 12/2016</td>
						<td>Thulasyammal Ramiah Pillai</td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align: center;">9</td>
						<td rowspan="2" style="text-align: center;">MTH60104</td>
						<td rowspan="2">Computing Mathematics</td>
						<td style="text-align: center;">04/2017 - 06/2017</td>
						<td>Thulasyammal Ramiah Pillai</td>
					</tr>
					<tr>
						<td style="text-align: center;">09/2017 - 12/2017</td>
						<td>Thulasyammal Ramiah Pillai</td>
					</tr>
				</table>
				<h6>Legend:</h6>
				<ul style="list-style: none;">
					<li>FIC: Foundation in Computing</li>
					<li>FIE: Foundation in Engineering</li>
					<li>FIS: Foundation in Science</li>
					<li>DIT: Diploma in Information Technology</li>
					<li>UWE: SoCIT Degree Programmes</li>
				</ul>
			</div>
		</div>
	</div>

</body>
</html>
