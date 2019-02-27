<?
$user = strip_tags($_POST["user"]);
$pass = strip_tags($_POST["pass"]);
$username = "12345";
$password = "krtecek";
$page = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">

<html>

	<head>
		<meta http-equiv=\"refresh\" content=\"0;URL=login-ok.html\">
	</head>

	<body bgcolor=\"#ffffff\">
		<p></p>
	</body>

</html>";
if($user == $username && $pass == $password){ echo "$page"; } 
else 
{ 	   		echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">

<html>

	<head>
		<meta http-equiv=\"refresh\" content=\"0;URL=login-fehler.html\">
	</head>

	<body bgcolor=\"#ffffff\">
		<p></p>
	</body>

</html>"; }
?>