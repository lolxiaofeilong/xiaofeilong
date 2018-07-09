<?php
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
        header('Access-Control-Request-Headers:accept, content-type');

        include 'D_BHelper.php';
        // $uname = isset($_POST);
        $sql = "select * from products  inner  join userlist on userlist.id = products.index";
        //读取
        $res = query_oop($sql);
        if($res){
        
            $list = json_encode($res,JSON_UNESCAPED_UNICODE);
            echo   "{status: true, data: $list}";

        }else{
            echo  "{status:false,message: '错误信息可能是网络不好？'}";
        }

?>