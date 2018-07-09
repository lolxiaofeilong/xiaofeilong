
// require.config({
//     paths:{
//         "jquery":"jquery-3.3.1.js",
//         "erci":"erzifengzhuang.js",
//     }
// })
// require(["juqery","erci"],function($,http){
   
    $(function(){
             // 一打开网页先验证是否有登录信息
                var xxx = window.localStorage.getItem("username");
                if(xxx){
                        $("#nav_1")[0].innerHTML=`<div class="container"> 
                                                    <ul class="left fl">
                                                        <li><a href="../index.html">首页</a></li>
                                                        <li><a href="../index.html"><i class="fa fa-star-o"></i>收藏摩西</a></li>
                                                        <li><a href="../index.html"><i class="fa fa-eye"></i>关注摩西</a></li>
                                                    </ul>
                                                    <ul class="right fr">
                                                        <li><a href="../index.html">您好，欢迎来到摩西！</a></li>
                                                        <li><a href="../html/car.html">${xxx}</a></li>
                                                        <li><a href="car.html"><i class="fa fa-bathtub"></i>购物车0件商品</a></li>
                                                        <li><a href=""><i class="fa fa-hand-spock-o"></i>在线客服 400-660-6366</a></li>
                                                    </ul>
                                                </div>`;
                }

            // 登录
            $("#btn_login").click(function(){
               
                // 得到用户名和密码
                var username = $("#username").val().trim();
                var password_l = $("#password_l").val().trim();
                // 将用户名和密码写入对象
                var params ={
                            username,
                            password_l 
                        };
                console.log(params);
                http.post("login.php",params,function(res){
                    // 得到后端返回给我们的值
                    console.log(res); 
                    if(res.indexOf("false")>=0){
                        alert("登录失败");
                    }else{
                        alert("登录成功");
                        window.localStorage.setItem('username',username);
                        // window.location.href="http://10.3.136.3:1803/src/index.html";
                    }
                })
            })
            // 以上代码可以实现将账号和密码传给后端，并得到后端返回给我的结果
           
       









        })


// })







