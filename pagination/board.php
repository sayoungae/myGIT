<?php
	header('Content-Type: text/html; charset=euc-kr');

	$text = $_POST["text"];

	if($text == "go") {
		echo "통신완료";
	} else {
		echo $text;
	}
?>