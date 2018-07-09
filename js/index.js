require.config({
    paths:{
            "jquery":"jquery-3.3.1",
            "common":"common"
    }
})
require(["jquery","common"],function($,c){
$(function(){
            // 一打开网页先验证是否有登录信息
                var xxx = window.localStorage.getItem("username");
                if(xxx){
                        $("#nav_1")[0].innerHTML=`<div class="container"> 
                                                    <ul class="left fl">
                                                        <li><a href="index.html">首页</a></li>
                                                        <li><a href="index.html"><i class="fa fa-star-o"></i>收藏摩西</a></li>
                                                        <li><a href="index.html"><i class="fa fa-eye"></i>关注摩西</a></li>
                                                    </ul>
                                                    <ul class="right fr">
                                                        <li><a href="index.html">您好，欢迎来到摩西！</a></li>
                                                        <li><a href="html/car.html">${xxx}</a></li>
                                                        <li><a href="html/car.html"><i class="fa fa-bathtub"></i>购物车0件商品</a></li>
                                                        <li><a href=""><i class="fa fa-hand-spock-o"></i>在线客服 400-660-6366</a></li>
                                                    </ul>
                                                </div>`;
                }
                // console.log(c.animate);
                // 主要轮播图

               
                            (function(){
                            var carousel = document.querySelector("#xx");
                            var ul = carousel.children[0];

                            // 无缝滚动关键一:复制第一张到最后
                            ul.appendChild(ul.children[0].cloneNode(true));
                            
                            var len = ul.children.length;

                            // 初始化:
                            // 计算ul的宽度
                            // li的宽度*数量
                            ul.style.width = carousel.clientWidth * len + 'px';


                            // 默认索引值
                            var index = 0;


                            // 添加左右按钮
                            var btnPrev = document.createElement('span');
                            btnPrev.classList.add('btnPrev');
                            btnPrev.innerHTML = '&lt;';
                            var btnNext = document.createElement('span');
                            btnNext.classList.add('btnNext');
                            btnNext.innerHTML = '&gt;'
                            carousel.appendChild(btnPrev);
                            carousel.appendChild(btnNext);

                            // 添加页码
                            var page = document.createElement('div');
                            page.className = 'page';

                            var content = '';
                            // 往.page中添加页面
                            for(var i=0;i<len-1;i++){
                                content += `<span>${i+1}</span>`
                            }
                            page.innerHTML = content;
                            page.children[index].className = 'active';
                            // 把page写入页面
                            carousel.appendChild(page);



                            //动画效果
                            var timer = setInterval(autoPlay,3000);


                            // 鼠标移入移出
                            carousel.onmouseover = function(){
                                clearInterval(timer);
                            }

                            carousel.onmouseout = function(){
                                timer = setInterval(autoPlay,3000);
                            }

                            // 上一张下一张
                            carousel.onclick = e=>{
                                if(e.target.className === 'btnPrev'){
                                    index--;
                                    show();
                                }else if(e.target.className === 'btnNext'){
                                    index++;
                                    show();
                                }else if(e.target.parentNode.className === 'page'){
                                    // console.log(666111);
                                    console.log(e.target.innerHTML);
                                    index=(e.target.innerHTML*1-1);
                                    show();
                                
                                }
                            }

                            function autoPlay(){

                                index++;

                                show();
                            }


                            function show(){
                                // 终点判断
                                if(index>=len){
                                    // 无缝滚动关键2:当滚动完成复制图片时,瞬间重回初始状态
                                    ul.style.left = 0;
                                    index = 1;
                                }else if(index<0){
                                    index = len - 1;
                                }

                                var target = -index*carousel.clientWidth;

                                c.animate(ul,{left:target});
                                // animate(ul,{left:target});
                                // ul.style.top = -target + 'px';

                                // 高亮页码
                                for(var i=0;i<len-1;i++){
                                    if(i===index){
                                        page.children[i].className = 'active';
                                    }else{
                                        page.children[i].className = '';
                                    }
                                }

                                if(index === len-1){
                                    page.children[0].className = 'active';
                                }

                            }
                        })();     








                // 下面主要部分的小轮播图
                for(let x =1;x<7;x++){
                        (function(){
                            var carousel = document.querySelector('.left'+x);
                            var ul = carousel.children[0];

                            // 无缝滚动关键一:复制第一张到最后
                            ul.appendChild(ul.children[0].cloneNode(true));
                            
                            var len = ul.children.length;

                            // 初始化:
                            // 计算ul的宽度
                            // li的宽度*数量
                            ul.style.width = carousel.clientWidth * len + 'px';


                            // 默认索引值
                            var index = 0;


                            // 添加左右按钮
                            var btnPrev = document.createElement('span');
                            btnPrev.classList.add('btnPrev');
                            btnPrev.innerHTML = '&lt;';
                            var btnNext = document.createElement('span');
                            btnNext.classList.add('btnNext');
                            btnNext.innerHTML = '&gt;'
                            carousel.appendChild(btnPrev);
                            carousel.appendChild(btnNext);

                            // 添加页码
                            var page = document.createElement('div');
                            page.className = 'page';

                            var content = '';
                            // 往.page中添加页面
                            for(var i=0;i<len-1;i++){
                                content += `<span>${i+1}</span>`
                            }
                            page.innerHTML = content;
                            page.children[index].className = 'active';
                            // 把page写入页面
                            carousel.appendChild(page);



                            //动画效果
                            var timer = setInterval(autoPlay,3000);


                            // 鼠标移入移出
                            carousel.onmouseover = function(){
                                clearInterval(timer);
                            }

                            carousel.onmouseout = function(){
                                timer = setInterval(autoPlay,3000);
                            }

                            // 上一张下一张
                            carousel.onclick = e=>{
                                if(e.target.className === 'btnPrev'){
                                    index--;
                                    show();
                                }else if(e.target.className === 'btnNext'){
                                    index++;
                                    show();
                                }else if(e.target.parentNode.className === 'page'){
                                    // console.log(666111);
                                    console.log(e.target.innerHTML);
                                    index=(e.target.innerHTML*1-1);
                                    show();
                                
                                }
                            }

                            function autoPlay(){

                                index++;

                                show();
                            }


                            function show(){
                                // 终点判断
                                if(index>=len){
                                    // 无缝滚动关键2:当滚动完成复制图片时,瞬间重回初始状态
                                    ul.style.left = 0;
                                    index = 1;
                                }else if(index<0){
                                    index = len - 1;
                                }

                                var target = -index*carousel.clientWidth;

                                c.animate(ul,{left:target});
                                // animate(ul,{left:target});
                                // ul.style.top = -target + 'px';

                                // 高亮页码
                                for(var i=0;i<len-1;i++){
                                    if(i===index){
                                        page.children[i].className = 'active';
                                    }else{
                                        page.children[i].className = '';
                                    }
                                }

                                if(index === len-1){
                                    page.children[0].className = 'active';
                                }

                            }
                        })(x);     
                }

                //滚动条改变的时候高亮对应的导航
                document.onscroll=function(){
                            var x =window.scrollY;
                            if(x>=28){
                               $("#top")[0].style.position="fixed";
                               $("#top")[0].style.left=0;
                               $("#top")[0].style.top=0;
                                // $("#xiding").style.display="none";
                               

                            }else if(x<28){
                                $("#top")[0].style.position="absolute";
                                $("#top")[0].style.left=0;
                                $("#top")[0].style.top=28+"px";
                                // $("#xiding").style.display="block";
                            }
                            // console.log(x);
                             switch(true){
                                case x>0 && x<900:$("#guding").css({"display":"none"});break;
                                case x>900 && x<1400: $("#guding").css({"display":"block"});gaoliang(1);break;
                                case x>1400 && x<1900: $("#guding").css({"display":"block"});gaoliang(2);break;
                                case x>1900 && x<2400: $("#guding").css({"display":"block"});gaoliang(3);break;
                                case x>2400 && x<2900: $("#guding").css({"display":"block"});gaoliang(4);break;
                                case x>2900 && x<3400: $("#guding").css({"display":"block"});gaoliang(5);break;
                                case x>3400 && x<3900: $("#guding").css({"display":"block"});gaoliang(6);break;
                                case x>3900 && x<4300: $("#guding").css({"display":"block"});gaoliang(7);break;
                                case x>4300 && x<4900: $("#guding").css({"display":"block"});gaoliang(8);break;
                                case x>4900 && x<5682: $("#guding").css({"display":"block"});gaoliang(9);break;
                                default : console.log(6666);
                            }

                }
                function gaoliang(idx){
                    for(var i=0;i<$("#guding")[0].children.length;i++){
                        // console.log(idx);
                        $("#guding li:nth-child("+i+")" ).css({"background":"#eee"});
                        $("#guding li:nth-child("+idx+")" ).css({"background":"red"});
                    }

                }
                // 点击导航跳到对应的位置
                $("#guding").click(function(e){
                      for(var i=0;i<$("#guding")[0].children.length;i++){
                        if(e.target==$("#guding")[0].children[i]){
                             var y = 1000+520*i;
                            // console.log(i,y);
                            console.log($("#guding")[0].children.length);
                            for(var j=0;j<$("#guding")[0].children.length;j++){
                                $("#guding li:nth-child("+j+")" ).css({"background":"#eee"});
                            }
                             $(e.target).css({"background":"red"});
                             window.scrollTo(0,y);
                        }
                    }
                })



                // 右边的隐藏栏
                document.onmousemove=function(e){
                    // console.log(e.pageX,window.innerWidth);
                    if(e.pageX>=window.innerWidth-50){
                        $("#zuiyou").css({"display":"block"});
                    }else{
                        $("#zuiyou").css({"display":"none"});
                    }
                }







                   

                })

})