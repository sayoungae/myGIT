<?php

header("content-type:text/html; charset=utf-8");
$conn = mysqli_connect("localhost","root","","db1");

if( $conn -> connect_error ){
    echo $conn -> connect_errorno;
    exit;
}

$conn -> set_charset("utf8");

$name = $_GET['name'];
$price = $_GET['price'];
$num = $_GET['num'];
# total 만들기
$total = $price * $num;

if($name !="" && $price !="" && $num !="" ){
		
    $sql = "INSERT INTO drink (name, price, num, total) VALUES ('$name', '$price', '$num', '$total')";
    mysqli_query($conn, $sql);

    echo "<p style='text-align:center; color:blue;'>데이터가 입력되었습니다. 확인해 주세요.</p>";
    echo "<meta http-equiv='Refresh' content='1; 11_drink_result.php?nm=$name && pri=$price'/>";
}	
else{
    echo "<p style='text-align:center; color:red;'>정보가 없습니다. 확인해 주세요.</p>";
}
?>