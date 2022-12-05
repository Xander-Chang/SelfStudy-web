<?php
session_start();  // 利用伺服器端來記錄資訊
require_once 'dbtest.php';

if (isset($_POST['username'])){

	$name = $_POST['username'];
	$pwd = md5($_POST['pwd']);

	$sql = "select * from webuser where username='{$name}' and password='{$pwd}' ";

	$result = mysqli_query($conn,$sql);

	// mysqli_num_row  回傳資料有多少列
	if (mysqli_num_rows($result) > 0){
		// 有資料
		//跳轉到指定頁面去

		$_SESSION['authChecked'] = $name;  // 利用伺服器端主機來記錄資訊
		
		header("location:backend.php");

	}else{
		// 無資料
        echo '<script language="JavaScript">;alert("帳密錯誤！");location.href="login.html";</script>;  ';

	}







}

?>