<?php
    include "dbhelper.php";
    $sql = "select * from products";

    $result = query_sql($sql);

    $lists = json_encode($result);

    // echo "$lists";
    echo "{status:true,data:$lists}"; 
    

   /* [{"index":"1",

    "title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u767d\u8272\u604b\u4eba\/WHITE LOVER \u5de7\u514b\u529b\u5939\u5fc3\u997c\u5e72 36\u679a\u5165",
    
    "price":"RMB:248\u5143",

    "imgurl":"..\/img\/maingoods_1.jpg"












    },{"index":"2","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u767d\u8272\u604b\u4eba\/WHITE LOVER \u5de7\u514b\u529b\u5939\u5fc3\u997c\u5e72 36\u679a\u5165","price":"RMB:248\u5143","imgurl":"..\/img\/maingoods_1.jpg"
},{"index":"3","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u7f57\u4f0a\u65af\/ROYCE \u5317\u6d77\u9053\u539f\u5473\u751f\u5de7\u514b\u529b\u793c\u76d2 20\u679a 3\u76d2\u88c5","price":"RMB:279\u5143","imgurl":"..\/img\/maingoods_2.jpg"
},{"index":"4","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u7f57\u4f0a\u65af\/ROYCE \u5317\u6d77\u9053\u767d\u5de7\u514b\u529b\u5473\u751f\u5de7\u514b\u529b\u793c\u76d2 20\u679a","price":"RMB:108\u5143","imgurl":"..\/img\/maingoods_3.jpg"
},{"index":"5","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u7f57\u4f0a\u65af\/ROYCE \u5317\u6d77\u9053\u7eaf\u53ef\u53ef\u751f\u5de7\u514b\u529b\u793c\u76d2 20\u679a","price":"RMB:108\u5143","imgurl":"..\/img\/maingoods_4.jpg"
},{"index":"6","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u7f57\u4f0a\u65af\/ROYCE \u5317\u6d77\u9053\u62b9\u8336\u751f\u5de7\u514b\u529b\u793c\u76d2 20\u679a","price":"RMB:108\u5143","imgurl":"..\/img\/maingoods_5.jpg"
},{"index":"7","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u7f57\u4f0a\u65af\/ROYCE \u5317\u6d77\u9053\u9999\u69df\u5473\u751f\u5de7\u514b\u529b\u793c\u76d2 20\u679a","price":"RMB:108\u5143","imgurl":"..\/img\/maingoods_6.jpg"
},{"index":"8","title":"\u3010\u987a\u4e30\u51b7\u94fe\u5305\u90ae\u3011\u7f57\u4f0a\u65af\/ROYCE \u5317\u6d77\u9053\u539f\u5473\u751f\u5de7\u514b\u529b\u793c\u76d2 20\u679a\u88c5","price":"RMB:108\u5143","imgurl":"..\/img\/maingoods_7.jpg"
},{"index":"9","title":"\u3010\u65e5\u672c\u76f4\u90ae\u3011\u5317\u6d77\u9053 \u4e94\u7a1c\u661f\u4e4b\u68a6\u5de7\u514b\u529b130g\/\u76d2","price":"RMB:248\u5143","imgurl":"..\/img\/maingoods_8.jpg"
},{"index":"10","title":"\u3010\u65e5\u672c\u76f4\u90ae\u3011\u30ad\u30e3\u30ed\u30d6\uff7b\uff78\uff7b\uff78\uff81\uff6e\uff7a\u3000100\uff47","price":"RMB:248\u5143","imgurl":"..\/img\/maingoods_9.jpg"
}]
*/










?>