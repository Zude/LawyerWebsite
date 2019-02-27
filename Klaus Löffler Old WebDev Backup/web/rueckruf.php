<?php 


$Name = strip_tags($_POST["Name"]);
$Telefon = strip_tags($_POST["Telefon"]);
$Tag = strip_tags($_POST["Tag"]);
$Uhrzeit = strip_tags($_POST["Uhrzeit"]);
$Nachricht = strip_tags($_POST["Nachricht"]);


$recipient = "info@rechtsanwalthamburg.de";
//$recipient = "meridianspa@straight-up.de"; 
 
 
$subject = "Rückruf gewünscht!";
$mailheaders = "From: <info@rechtsanwalthamburg.de> \n";
$mailheaders .= "Reply-To: <$Email>\n";

//$msg .= "\n";

$msg .= "Nachricht über die Website: Rückruf gewünscht! \n";
$msg .= "Name:       $Name\n";
$msg .= "Telefon:    $Telefon\n";
$msg .= "Tag:        $Tag\n";
$msg .= "Uhrzeit:    $Uhrzeit\n";




$msg .= "Nachricht:  $Nachricht\n\n";



$msg .= "Wir werden Ihr Anliegen schnellst möglich bearbeiten!\n";
$msg .= "Team RA Klaus P. Löffler\n\n";


$msg .= "------------------------------------------------------------------- \n";
$msg .= "Rechtsanwalt  Klaus P. Löffler * Herrmannstrasse 14 * 20095 Hamburg \n";
$msg .= "Fon: 040 / 355 323-0 * Fax: 040 / 355 323-21 * St.-Nr: 74/366/00873 \n";
$msg .= "------------------------------------------------------------------- \n";



       if (mail($recipient, $subject, $msg, $mailheaders)){
			echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">

<html>

	<head>
		<meta http-equiv=\"refresh\" content=\"0;URL=rueckruf-ok.html\">
	</head>

	<body bgcolor=\"#ffffff\">
		<p></p>
	</body>

</html>";

	   }else{
	   		echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">

<html>

	<head>
		<meta http-equiv=\"refresh\" content=\"0;URL=rueckruf-fehler.html\">
	</head>

	<body bgcolor=\"#ffffff\">
		<p></p>
	</body>

</html>";
	   }
?>