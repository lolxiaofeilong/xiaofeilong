<?php
/**
 * @Author: Marte
 * @Date:   2018-07-04 00:34:52
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-07-04 14:55:12
 */
include 'D_BHelper.php';

$num = $_POST["num"];

// echo $num;
$num =($num-1)*32;
xx($num); 
function xx($a){

        $sql = "select * from products limit $a ,32;select count(*) from products;";
        $data = multi_query_oop($sql);
        $lists = json_encode($data);
        // 下面的数据包含一个链接的状态，数据库的数据，数据库中数据总条数
        echo "{status:true,data:$lists}";
    }


?>