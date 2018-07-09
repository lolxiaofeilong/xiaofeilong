require.config({
            paths:{
                    "jquery":"jquery-3.3.1",
                    "erci":"erzifengzhuang"
            } 
})
require(["jquery","erci"],function($,http){
    console.log(http);
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
                http.get('../api/car.php','',function(res){
                    var res = window.eval('(' + res + ')');
                    console.log(res);
                    console.log(res.data);
                    var cheche = $("#main .container .myCar>li:nth-child(2)")[0];
                    console.log(cheche);
                    cheche.innerHTML="";
                    var str ="<ul>";
                    var total = 0;
                    for(var i=0;i<res.data.length;i++){
                        str += "<li><ul><li><a href='../html/goods.html' style='display:block;'><img src='"+res.data[i].imgurl+"'/>"+res.data[i].title+"</a></li><li >￥：<span style='color:red;'>"+res.data[i].price+"</span ></li><li> <button id='jian'class='jian'>-</button><input type='text' id='num'value='1'/><button id='jia'class='jia'>+</button></li><li>"+res.data[i].price+"元</li><li>删除</li></ul></li>";
                        total +=res.data[i].price*1;
                    }
                    str += "</ul>"; 
                    cheche.innerHTML=str;
                    $("#total")[0].innerHTML=total;
                });

                // 事件委托
                $("#main .container .myCar>li:nth-child(2)").click(function(e){
                    console.log(5555);
                    if(e.target.className="jia"){
                         // 点击增加购买量
                            var x =  $("#num").prop("value")*1;
                            x++;
                            $("#num")[0].value=x;
                    }
                    if(e.target.className="jian"){
                        // 点击减少购买量
                            var x =  $("#num").prop("value")*1;
                            if(x>0){ 
                                x--;
                            }
                            $("#num")[0].value=x;   
                    }
                })

                
                // 点击增加购买量
                $("#jia").click(function(){
                    var x =  $("#num").prop("value")*1;
                    x++;
                    $("#num")[0].value=x;
                });



























                var data_hot =[{
                                title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                                price:70.54,
                                imgurl:"../img/rexiao_1.jpg"

                                },{
                                title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                                price:70.54,
                                imgurl:"../img/rexiao_2.png"

                                },{
                                title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                                price:70.54,
                                imgurl:"../img/rexiao_3.jpg"

                                },{
                                title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                                price:70.54,
                                imgurl:"../img/rexiao_4.jpg"

                                },{
                                title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                                price:70.54,
                                imgurl:"../img/rexiao_5.jpg"

                                },{
                                title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                                price:70.54,
                                imgurl:"../img/rexiao_6.jpg"

                                }];
                // 生成最新推荐商品
                var ul = $("#main .down")[0];
                console.log(ul);
                var str ="";
                for(var i =0;i<data_hot.length;i++){
                    str += ` <li>
                                <img src='${data_hot[i].imgurl}' />
                                <p>${data_hot[i].title}</p>
                                <p>${data_hot[i].price}</p>
                            </li> `;
                }
                ul.innerHTML=str;

            })
    
})
           
// })
  /*  })*/


