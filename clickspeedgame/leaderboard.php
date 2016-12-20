<!DOCTYPE html>

<html>

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link type="text/css" rel="stylesheet" href="styles/style.css">
		<link type="text/css" rel="stylesheet" href="styles/table.css">
		<link href="https://fonts.googleapis.com/css?family=Quicksand|Josefin+Slab" rel="stylesheet">
	</head>

	<style>
		h2  {
			font-family:Quicksand;
		}

		#return {
			position: absolute;
			top: 30px;
			left: 30px;
		}
		

		table {
			width: auto;
			display: inline-block;
		}
		
		#table_container {
			margin: 0 auto;
			display:flex;
			width: 60%;
		}
	</style>



	<body>

		<a href="index.html" id="return"><button>Return to Game</button></a>
		<h2 style="text-align:center;font-size:30px;">TOP 10 PLAYERS</h2>

		<div id="table_container">
		
		<table>
		
			<th class="table_title"  colspan="2">Game Mode 1</th>
		
			<tr>
				<th>Name</th>
				<th>Score</th>
			</tr>

		<?php
			//link to database
			$servername = "sql205.lockernerd.co.uk";
			$databasename = "lnw_18975725_leaderboard";
			$username = "lnw_18975725";
			$password = "san12nas";


			//establish connection with database
			$link = mysqli_connect($servername, $username, $password, $databasename);


			//check connection
			if (!$link) {
				die("Error connecting: " . mysqli_connect_error());
			}


			//gets and displays data from game mode 1 table
			$sql = "SELECT name, score FROM clickspeedgame ORDER BY score DESC LIMIT 10";
			$result = mysqli_query($link, $sql);


			while($row = mysqli_fetch_assoc($result)) {
				echo "<tr>";
				echo "<td>" . $row['name'] . "</td>";
				echo "<td>" . $row['score'] . "</td>";
				echo "</tr>";
			}
		?>
		
		</table>
		
		<table>
		
			<th class="table_title"  colspan="2">Game Mode 2</th>
		
			<tr>
				<th>Name</th>
				<th>Score</th>
			</tr>
			
		<?php
			//link to database
			$servername = "sql205.lockernerd.co.uk";
			$databasename = "lnw_18975725_leaderboard";
			$username = "lnw_18975725";
			$password = "san12nas";


			//establish connection with database
			$link = mysqli_connect($servername, $username, $password, $databasename);


			//check connection
			if (!$link) {
				die("Error connecting: " . mysqli_connect_error());
			}


			//gets and displays data from game mode 2 table
			$sql = "SELECT name, score FROM gamemode2 ORDER BY score DESC LIMIT 10";
			$result = mysqli_query($link, $sql);


			while($row = mysqli_fetch_assoc($result)) {
				echo "<tr>";
				echo "<td>" . $row['name'] . "</td>";
				echo "<td>" . $row['score'] . "</td>";
				echo "</tr>";
			}
		?>
		
		</table>
		</div>
		<div id="buffer">
		</div>

	</body>



</html>