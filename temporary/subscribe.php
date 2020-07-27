<?php
$connection = mysqli_connect('fdb19.awardspace.net', '2649093_subscribe','55wtmHf2wV7QR4J');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, '2649093_subscribe');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}

if((isset($_POST['name']) && !empty($_POST['name']))
&& (isset($_POST['email']) && !empty($_POST['email']))){
	print_r($_POST);
	$name = $_POST['name'];
	$email = $_POST['email'];
	$query = "INSERT INTO `subscribe` (name, email) VALUES ('$name', '$email')";
	$result = mysqli_query($connection, $query);
}
?>
