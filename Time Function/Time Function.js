<!DOCTYPE html>
<html>
<head>
<title>Time Function</title>
</head>

<body>
<script>

function tellTime() {
	var now = new Date();
	var theHr = now.getHours();
	var theMin = now.getMinutes();

	alert("time: " + theHr + ":" + theMin);
}

tellTime();

</script>

</body>
</html>