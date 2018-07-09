<?php
    // echo "9999999999999999999999999999999999";
    include 'dbhelper.php';
    $username = isset($_POST["phone"]) ? $_POST["phone"]: "";
    $nickname = isset($_POST["nickname"]) ? $_POST["nickname"] : "";
    $password_r = isset($_POST["password_r"]) ? $_POST["password_r"] : "";

    // echo "$username,$nickname,$password_r";

     $sql = "select * from users where username = '$username'";
    $result = query_sql($sql);
    if(count($result) > 0){
        echo "{status:false,message:'用户名已注册'}";
    } else {
        $sql ="insert into users(username,password,nickname) values ('$username','$password_r','$nickname')";
        $result = exec_sql($sql); 
        if($result){
            echo"{status:true}";
        }else{
            echo"{status:false,message:'注册失败'}";
        }
    }













?>