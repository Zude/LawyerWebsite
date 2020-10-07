<?php 


$Geschlecht = strip_tags($_POST["Geschlecht"]);
$Titel = strip_tags($_POST["Titel"]);
$Vorname = strip_tags($_POST["Vorname"]);
$Name = strip_tags($_POST["Nachname"]);
$Strasse = strip_tags($_POST["Strasse"]);
$Ort = strip_tags($_POST["Ort"]);
$Email = strip_tags($_POST["Email"]);
$Nachricht = strip_tags($_POST["Nachricht"]);

$Telefon = strip_tags($_POST["Telefon"]); 
$Mobil = strip_tags($_POST["Mobil"]);
$Fax = strip_tags($_POST["Fax"]);
$Kennen = strip_tags($_POST["Kennen"]);
 
$recipient = "$Email,info@rechtsanwalthamburg.de";
//$recipient = "$Email,newsletter@meridianspa.de"; 
 
$subject = "Kontakt über unsere Website <$Email>";
$mailheaders = "From: <info@rechtsanwalthamburg.de> \n";
$mailheaders .= "Reply-To: <$Email>\n";
//$msg .= "\n";

if(StripSlashes($Geschlecht) == "Frau"){
       $msg .= "Sehr geehrte Frau $Titel $Name,\n";
		}else{
       $msg .= "Sehr geehrter Herr $Titel $Name,\n";
		} 


$msg .= "Vielen Dank für Ihre Nachricht über unsere Website.\n";
$msg .= "Wir werden uns schnellstmöglich um Ihr Anliegen kümmern.\n\n";


$msg .= "Sie haben folgende Daten über unsere Website gesendet: \n";   
$msg .= "Anrede:        $Geschlecht $Titel\n";
$msg .= "Vorname:       $Vorname\n";
$msg .= "Nachname:      $Name\n";    
$msg .= "Straße/Nr.:    $Strasse\n";
$msg .= "PLZ/Ort:       $Ort\n";   
$msg .= "Email:         $Email\n";
$msg .= "Nachricht:     $Nachricht\n\n";

$msg .= "Telefon:       $Telefon\n";
$msg .= "Mobil:       	$Mobil\n";
$msg .= "Fax:           $Fax\n";
$msg .= "Bekannt durch: $Kennen\n\n";

$msg .= "Wir werden Ihr Anliegen schnellst möglich bearbeiten!\n";
$msg .= "Team RA Klaus P. Löffler\n\n";


$msg .= "--------------------------------------------------------------- \n";
$msg .= "Rechtsanwalt  Klaus P. Löffler * Hermannstr. 14 * 20095 Hamburg \n";
$msg .= "Fon: 040/355 323-0 * Fax: 040/355 323-21 * St.-Nr: 74/366/00873 \n";
$msg .= "--------------------------------------------------------------- \n";

//$msg .= "----------------------------------------------------------------- \n";
//$msg .= "Handicap-Attacke * Oliver Zapel * Oktaviostr. 111 * 22041 Hamburg\n";
//$msg .= "Fon: 040-63940759 * Mob.: 0177-46415461 * www@handicap-attacke.de\n";
//$msg .= "Sitz: Hamburg * info.@handicap-attacke.de * St.-Nr.: 08/250/09361\n";
//$msg .= "----------------------------------------------------------------- \n";

	   
       if (mail($recipient, $subject, $msg, $mailheaders)){
			echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">

<html>

	<head>
		<meta http-equiv=\"refresh\" content=\"0;URL=kontakt-ok.html\">
	</head>

	<body bgcolor=\"#ffffff\">
		<p></p>
	</body>

</html>";

	   }else{
	   		echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">

<html>

	<head>
		<meta http-equiv=\"refresh\" content=\"0;URL=kontakt-fehler.html\">
	</head>

	<body bgcolor=\"#ffffff\">
		<p></p>
	</body>

</html>";
	   }
?>