
require.config({
    paths:{
        "jquery":"jquery-3.3.1",
        "erci":"erzifengzhuang"
    }
})
require(["jquery","erci"],function($,http){
    
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


            // 页面刷新时主要部分加载的数据
            


            // 为了更好的用户体验，我有一个写死的页面，当数据库链接成功了，就用数据库中的数据去生成，如果数据库没有链接成功，就用我自己编写的data数据进行生成
            http.post("goods1.php","",function(res){
                // console.log(res);
                var a = window.eval("("+res+")");
                // console.log(a);  
                // console.log(a.status);
                console.log(a.data.data1);
                console.log(a.data.data2[0]);
                // 由于data2返回的数据带有*，不能直接获取，所以我通过遍历它进行了获取
                var total=0;
                for(var key in a.data.data2[0]){
                    total = a.data.data2[0][key];
                    console.log(total);
                }
                // 根据获取的总条数，生成对应的分页
                // 我定了每页显示30条数据
                var page = Math.ceil(total/32);
                 console.log(page);
                //根据page生成对应数量的页码
                for(var i =1;i<=page;i++){
                    // $("<li></li>").appendTo.$(".pagenumber");
                    var x =page-i+1;
                    $(".pagenumber").append($("<li>第"+i+"页</li>"));
                }
                    var data = a.data.data1;
                    // 点击排序
                $(".tiaojian").click(function(e){
                                if(e.target.className=="shengxu"){
                                    // console.log(1111);
                                    data.sort(function(a,b){
                                        return a.price - b.price;
                                    });
                                     // 生成商品
                                    magic(data);
                                }else if(e.target.className=="jiangxu"){
                                    // console.log(2222);
                                     data.sort(function(a,b){
                                        return b.price - a.price;
                                    });
                                      // 生成商品
                                        magic(data);
                                }else if(e.target.className=="moreng"){
                                    // console.log(333);
                                    data = a.data.data1;
                                      magic(data);
                                }
                })
                    // 页面刷新生成商品
                    magic(data);

                    
                // console.log($("#pagema li"));
                // 分页
                $("#pagema li").click(function(e){
                    // console.log(e.target.innerHTML);
                    for(var i =0;i<page;i++){
                        if(e.target==$("#pagema li")[i]){
                            // console.log(i+1);
                            var obj ={
                                num:i+1
                            }
                            // console.log(obj);
                            http.post("goods2.php",obj,function(x){
                                // console.log(x);
                                var x1 = window.eval("("+x+")");
                                console.log(x1);
                                console.log(x1.status);
                                console.log(x1.data);
                                console.log(x1.data.data1);
                                console.log(x1.data.data2);
                                var data = x1.data.data1;

                                      // 点击排序生成新数组
                                // 重新加载之后再次写的点击事件
                                $(".tiaojian").click(function(e){
                                                if(e.target.className=="shengxu"){
                                                    // console.log(1111);
                                                    data.sort(function(a,b){
                                                        return a.price - b.price;
                                                    });
                                                     // 生成商品
                                                    magic(data);
                                                }else if(e.target.className=="jiangxu"){
                                                    // console.log(2222);
                                                     data.sort(function(a,b){
                                                        return b.price - a.price;
                                                    });
                                                      // 生成商品
                                                    magic(data);
                                                }
                                })
                            magic(data);
                            dianjitiaozhuan(); 
                            }); 
                        }
                    }  
                });

                dianjitiaozhuan();
             
                  // 点击排序
                $(".tiaojian").click(function(e){
                                
                                if(e.target.className=="shengxu"){
                                    console.log(1111);
                                    data.sort(function(a,b){
                                        return a.price - b.price;
                                    });

                                }else if(e.target.className=="jiangxu"){
                                    console.log(2222);
                                     data.sort(function(a,b){
                                        return b.price - a.price;
                                    });
                                }
                })
            })
              
        function dianjitiaozhuan(){
        //所有的li都能拿到，但是不方便带数据，所以还是讲热销和主要的商品分开写点击事件吧
                        $("#main .maingoods li").click(function(e){
                            console.log(e.target.parentNode.parentNode);
                            var li = e.target.parentNode.parentNode;
                            var imgurl = li.children[0].children[0].src;
                            // 将绝对路径变成相对路径
                            if(imgurl.startsWith("file")){
                                var index1 = imgurl.indexOf("img");
                                
                                console.log(index1);
                                imgurl="../"+imgurl.slice(23);
                            }
                            var price = li.children[0].children[2].innerHTML;
                            var title = li.children[0].children[1].innerHTML;
                            console.log(imgurl,price,title);

                              
                                // 把序号带过去
                                var idx ;
                                var y = $("#main .maingoods")[0].children[0].children;
                                console.log(li,y,y.length);
                               for(var i=0;i<y.length;i++){
                                if(li==y[i]){
                                    idx=i;
                                }
                               }
                               
                            location.href="../html/list.html?imgurl="+imgurl+"&price="+price+"&title="+title+"&index="+idx;
                        });
        }
     // 生成商品的函数
    function magic(data){
                            var maingoods = $('.maingoods')[0];
                            // 进来先清空
                            maingoods.innerHTML="";
                            var ul = document.createElement("ul");
                            maingoods.appendChild(ul);
                            var str = "";
                            for(var i=0;i<data.length;i++){
                               
                                 str += ` <li><a /*href="../html/list.html"*/>
                                            
                                            <img src='${data[i].imgurl}' />
                                            <p>${data[i].title}</p>
                                            <p>RMB:<span>${data[i].price}</span>元</p>
                                            </a>
                                        </li> `;
                            }
                            ul.innerHTML=str;   
     }
             













        // 热销产品数据
        // 自己写的data，然后根据data生成了商品
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

                        },{
                        title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                        price:70.54,
                        imgurl:"../img/rexiao_7.jpg"

                        },{
                        title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                        price:70.54,
                        imgurl:"../img/rexiao_8.jpg"

                        },{
                        title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                        price:70.54,
                        imgurl:"../img/rexiao_9.png"

                        },{
                        title:"山本汉方 大麦若叶粉末100%青汁 3g*44袋",
                        price:70.54,
                        imgurl:"../img/rexiao_10.jpg"

                        },];
        // 生成热销商品
        // console.log($(".hot")[0]);
        var hot = $(".hot")[0];
        var ul = document.createElement("ul");
        hot.appendChild(ul);
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

