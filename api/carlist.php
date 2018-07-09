<?php

    include 'D_BHelper.php';
    // 接收前端post传过来的数据
    $id = isset($_GET['id']) ? $_GET['id'] : "";
    // $uname= isset($_POST['password_l']) ? $_POST['password_l'] : "";
   
    $sql = "insert into userlist(id)values($id)";

    $result = excute($sql);



    if($result){

        echo "{status: true}"; 

    } else {
        echo "{status: false, message: '登录失败'}";
    }


?>