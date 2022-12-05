<?php

session_start();

session_destroy();  // 刪除全部的session

header("location:login.html");



?>