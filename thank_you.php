<?php
session_start();

?>
<!doctype html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<div class = "container d-flex align-items-center justify-content-center fs-4"
		style = "height:100vh;">
	<div>
	<?php echo "<div class = 'd-flex align-items-center'>Hi&nbsp; <h2>".$_SESSION["name"]."</h2>,</div> Thank you for contacting us. We will be in touch shortly"; ?>
	<br>
	<a href = "./index.html">Go back to the site</a> | <a href = "./services.html">View Services</a>
	</div>
	</div>
</body>
</html>
