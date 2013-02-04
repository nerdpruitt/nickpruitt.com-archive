<?php
	$file = $_GET["file"];

	if ($_GET["pdf"] == "true"){
		header('Content-disposition: attachment; filename=' + $file +'.mp3');
		header('Content-type: application/pdf');
		readfile($file + '.pdf');	
	} else if ($_GET["doc"] == "true") {
		header('Content-disposition: attachment; filename=' + $file +'.doc');
		header('Content-type: application/msword');
		readfile($file + '.doc');
	} else
		header('Content-disposition: attachment; filename=' + $file +'.mov');
		header('Content-type: video/quicktime');
		readfile($file + '.mov');
	}
?>