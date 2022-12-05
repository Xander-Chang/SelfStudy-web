<?php
session_start();
// ! 代表結果是相反
if (  !(isset($_SESSION['authChecked'])) ){
     header("location:login.html");
}

?>

<html>
<head>
	<meta charset="utf-8">
</head>
<body>
	登入成功！！！
	 <a href="logout.php">登出</a>
</body>
</html>