<?php

// 載入資料庫連接檔案
require_once 'dbtest.php';

if (isset($_POST['username'])){

	$name = $_POST['username'];
	$pwd = $_POST['pwd'];

    //先查詢這個帳號是否有存在資料表中， count 計算次數
    $sql = "select count(id) from webuser where username='{$name}'";

    $row = mysqli_fetch_array(mysqli_query($conn,$sql));

    if ($row[0] == 0 ){

	    $md5pwd = md5($pwd);  // 將使用者輸入的密碼進行加密動作

	    $sql ="insert into  webuser(username,password) values('{$name}','{$md5pwd}')  ";

	    $result = mysqli_query($conn,$sql);  // 執行sql 語法，並將結果回傳給 $result
        
        echo '<script language="JavaScript">;alert("使用者建立完成");location.href="createUser.html";</script>;  ';

	}else{
        echo '<script language="JavaScript">;alert("使用者已存在，請換個帳號！");location.href="createUser.html";</script>;  ';

	}


}


?>