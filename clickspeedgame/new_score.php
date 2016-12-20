<!DOCTYPE html>
<html>
<head>
	<link type="text/css" rel="stylesheet" href="styles/style.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand|Poiret+One" rel="stylesheet">
</head>

<body>

<style>
	h3 {
		text-align:center;
		margin-top: 10%;
		font-size: 30px;
		font-family: Quicksand;
	}

	.buttons_container {
		margin: 0 auto;
		width: 300px;
		height: 100px;
		display:flex;
		justify-content: space-around;
		align-items: center;
	}
</style>

<h3>Your score was submitted successfully!</h3>
<div class="buttons_container">
<a href="index.html"><button>Return to Game</button></a> or
<a href="leaderboard.php"><button>View Leaderboards</button></a>
</div>
<div id="buffer"></div>

<?php
	define("DB_NAME", "lnw_18975725_leaderboard");
	define("DB_USER", "lnw_18975725");
	define("DB_PASSWORD", "san12nas");
	define("DB_HOST", "sql205.lockernerd.co.uk");
	

	$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	

	if (!link) {
		die('Could not connect: ' . mysql_error());
	}

	
	$db_selected = mysql_select_db(DB_NAME, $link);
	

	if  (!$db_selected) {
		die("Can't use " . DB_NAME . ": " . mysql_error());
	}


	$value = $_POST["username"];
	$value2 = $_POST["leaderboard_score"];
	

	$sql = "INSERT INTO clickspeedgame (name, score) VALUES ('$value', '$value2')";
	

	if (!mysql_query($sql)) {
		die ('Error: ' . mysql_error() );
	}

	
	mysql_close();
?>

</body>
</html>