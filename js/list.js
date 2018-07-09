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







        
    // console.log($("#main .main .left img"));
    var shuju =location.search.slice(1).split("&");
    var obj ={};
    for(var i =0;i<shuju.length;i++){
        var arr =shuju[i].split("=");
        obj[arr[0]]=/*decodeURI(*/arr[1]/*)*/;
    }
    // console.log(obj,obj.imgurl);
    $("#main .main .left img").prop("src",obj.imgurl);
    $("#feiche img").prop("src",obj.imgurl);
    $(".tupian img").prop("src",obj.imgurl);


    $("#main .main .center h3")[0].innerHTML=decodeURI(obj.title);
    $("#main .main .center .price .p span")[0].innerHTML=decodeURI(obj.price);

    console.log(obj.index); 

  







    
    // 点击减少购买量
    $("#jian").click(function(){
        var x =  $("#num").prop("value")*1;
        if(x>0){ 
            x--;
        }
        $("#num")[0].value=x;
       
    });
    // 点击增加购买量
    $("#jia").click(function(){
        var x =  $("#num").prop("value")*1;
        x++;
        $("#num")[0].value=x;
    });



   // 蒋竹星
    $("#buy").click(function(){
        
      /*  var a = $("#num").val();
        console.log(a);*/

        // 数据操作
        http.get('../api/carlist.php',{id:obj.index},function(res){
            var res = window.eval('('+ res +')');
            console.log(res);
            if(res.status){
                // window.location.href = '../html/car.html';
            }
        });
        // 加入购物车动画效果
        // 1，轨迹数据
        var str1='[{"left1":977,"top1":-1000},{"left1":978,"top1":1},{"left1":982,"top1":6},{"left1":986,"top1":11},{"left1":991,"top1":24},{"left1":996,"top1":48},{"left1":998,"top1":60},{"left1":998,"top1":69},{"left1":998,"top1":93},{"left1":994,"top1":106},{"left1":990,"top1":116},{"left1":984,"top1":129},{"left1":975,"top1":142},{"left1":966,"top1":157},{"left1":954,"top1":173},{"left1":932,"top1":190},{"left1":912,"top1":199},{"left1":890,"top1":204},{"left1":865,"top1":206},{"left1":840,"top1":206},{"left1":812,"top1":203},{"left1":785,"top1":196},{"left1":753,"top1":180},{"left1":714,"top1":163},{"left1":671,"top1":147},{"left1":635,"top1":125},{"left1":610,"top1":107},{"left1":596,"top1":96},{"left1":592,"top1":90},{"left1":590,"top1":83},{"left1":588,"top1":72},{"left1":587,"top1":61},{"left1":587,"top1":54},{"left1":587,"top1":46},{"left1":590,"top1":39},{"left1":595,"top1":32},{"left1":600,"top1":29},{"left1":609,"top1":25},{"left1":619,"top1":24},{"left1":649,"top1":24},{"left1":671,"top1":27},{"left1":699,"top1":30},{"left1":725,"top1":36},{"left1":747,"top1":44},{"left1":768,"top1":52},{"left1":790,"top1":63},{"left1":814,"top1":77},{"left1":832,"top1":91},{"left1":843,"top1":99},{"left1":850,"top1":104},{"left1":856,"top1":111},{"left1":863,"top1":122},{"left1":869,"top1":134},{"left1":874,"top1":147},{"left1":875,"top1":162},{"left1":877,"top1":171},{"left1":877,"top1":180},{"left1":877,"top1":195},{"left1":876,"top1":205},{"left1":871,"top1":220},{"left1":867,"top1":230},{"left1":859,"top1":241},{"left1":853,"top1":250},{"left1":840,"top1":264},{"left1":827,"top1":274},{"left1":813,"top1":281},{"left1":796,"top1":286},{"left1":777,"top1":289},{"left1":752,"top1":291},{"left1":724,"top1":291},{"left1":691,"top1":291},{"left1":658,"top1":288},{"left1":618,"top1":281},{"left1":587,"top1":272},{"left1":556,"top1":261},{"left1":520,"top1":244},{"left1":500,"top1":234},{"left1":475,"top1":217},{"left1":451,"top1":201},{"left1":429,"top1":185},{"left1":409,"top1":167},{"left1":391,"top1":153},{"left1":373,"top1":141},{"left1":355,"top1":129},{"left1":338,"top1":120},{"left1":322,"top1":114},{"left1":303,"top1":110},{"left1":278,"top1":108},{"left1":261,"top1":108},{"left1":250,"top1":108},{"left1":238,"top1":114},{"left1":230,"top1":119},{"left1":221,"top1":126},{"left1":211,"top1":139},{"left1":205,"top1":151},{"left1":199,"top1":172},{"left1":196,"top1":189},{"left1":195,"top1":214},{"left1":196,"top1":223},{"left1":202,"top1":250},{"left1":209,"top1":270},{"left1":219,"top1":290},{"left1":230,"top1":313},{"left1":247,"top1":343},{"left1":272,"top1":382},{"left1":305,"top1":422},{"left1":345,"top1":455},{"left1":391,"top1":481},{"left1":440,"top1":500},{"left1":494,"top1":518},{"left1":542,"top1":531},{"left1":622,"top1":544},{"left1":680,"top1":552},{"left1":719,"top1":552},{"left1":758,"top1":555},{"left1":803,"top1":550},{"left1":847,"top1":538},{"left1":884,"top1":527},{"left1":905,"top1":517},{"left1":923,"top1":506},{"left1":943,"top1":495},{"left1":959,"top1":486},{"left1":979,"top1":477},{"left1":1014,"top1":456},{"left1":1040,"top1":442},{"left1":1076,"top1":421},{"left1":1112,"top1":399},{"left1":1143,"top1":383},{"left1":1161,"top1":370},{"left1":1178,"top1":358},{"left1":1196,"top1":344},{"left1":1217,"top1":331},{"left1":1238,"top1":319},{"left1":1255,"top1":310},{"left1":1255,"top1":302},{"left1":1255,"top1":290},{"left1":1255,"top1":280},{"left1":1255,"top1":266},{"left1":1255,"top1":252},{"left1":1255,"top1":236},{"left1":1255,"top1":217},{"left1":1247,"top1":189},{"left1":1232,"top1":158},{"left1":1215,"top1":128},{"left1":1193,"top1":105},{"left1":1176,"top1":91},{"left1":1157,"top1":79},{"left1":1130,"top1":73},{"left1":1109,"top1":73},{"left1":1082,"top1":73},{"left1":1049,"top1":73},{"left1":1017,"top1":73},{"left1":985,"top1":73},{"left1":958,"top1":73},{"left1":926,"top1":73},{"left1":887,"top1":73},{"left1":847,"top1":72},{"left1":805,"top1":72},{"left1":771,"top1":67},{"left1":732,"top1":66},{"left1":704,"top1":66},{"left1":676,"top1":66},{"left1":653,"top1":66},{"left1":633,"top1":66},{"left1":611,"top1":66},{"left1":585,"top1":66},{"left1":556,"top1":66},{"left1":517,"top1":66},{"left1":488,"top1":66},{"left1":458,"top1":66},{"left1":430,"top1":66},{"left1":391,"top1":66},{"left1":368,"top1":66},{"left1":346,"top1":66},{"left1":326,"top1":66},{"left1":305,"top1":66},{"left1":284,"top1":66},{"left1":263,"top1":67},{"left1":243,"top1":73},{"left1":229,"top1":82},{"left1":212,"top1":97},{"left1":201,"top1":116},{"left1":189,"top1":140},{"left1":182,"top1":169},{"left1":178,"top1":190},{"left1":178,"top1":208},{"left1":181,"top1":226},{"left1":189,"top1":245},{"left1":203,"top1":265},{"left1":216,"top1":282},{"left1":234,"top1":296},{"left1":258,"top1":317},{"left1":284,"top1":335},{"left1":316,"top1":354},{"left1":351,"top1":371},{"left1":412,"top1":395},{"left1":462,"top1":409},{"left1":523,"top1":426},{"left1":579,"top1":434},{"left1":624,"top1":441},{"left1":678,"top1":449},{"left1":725,"top1":455},{"left1":774,"top1":458},{"left1":820,"top1":463},{"left1":860,"top1":469},{"left1":888,"top1":473},{"left1":903,"top1":475},{"left1":912,"top1":478},{"left1":912,"top1":479},{"left1":912,"top1":480},{"left1":912,"top1":488},{"left1":912,"top1":500},{"left1":912,"top1":511},{"left1":912,"top1":521},{"left1":910,"top1":530},{"left1":905,"top1":536},{"left1":899,"top1":545},{"left1":890,"top1":550},{"left1":875,"top1":552},{"left1":825,"top1":548},{"left1":793,"top1":539},{"left1":752,"top1":525},{"left1":700,"top1":502},{"left1":632,"top1":467},{"left1":561,"top1":426},{"left1":485,"top1":384},{"left1":433,"top1":352},{"left1":392,"top1":319},{"left1":362,"top1":289},{"left1":343,"top1":265},{"left1":331,"top1":241},{"left1":319,"top1":209},{"left1":314,"top1":192},{"left1":314,"top1":173},{"left1":314,"top1":153},{"left1":314,"top1":129},{"left1":317,"top1":110},{"left1":323,"top1":92},{"left1":336,"top1":76},{"left1":348,"top1":62},{"left1":368,"top1":50},{"left1":396,"top1":39},{"left1":441,"top1":26},{"left1":510,"top1":15},{"left1":555,"top1":8},{"left1":588,"top1":8},{"left1":617,"top1":8},{"left1":643,"top1":8},{"left1":664,"top1":16},{"left1":682,"top1":25},{"left1":695,"top1":35},{"left1":710,"top1":48},{"left1":726,"top1":65},{"left1":742,"top1":84},{"left1":757,"top1":108},{"left1":776,"top1":138},{"left1":785,"top1":157},{"left1":790,"top1":171},{"left1":794,"top1":188},{"left1":800,"top1":205},{"left1":801,"top1":221},{"left1":803,"top1":235},{"left1":803,"top1":249},{"left1":803,"top1":264},{"left1":803,"top1":277},{"left1":801,"top1":290},{"left1":793,"top1":306},{"left1":783,"top1":326},{"left1":776,"top1":337},{"left1":767,"top1":349},{"left1":758,"top1":360},{"left1":748,"top1":370},{"left1":737,"top1":381},{"left1":721,"top1":389},{"left1":705,"top1":399},{"left1":686,"top1":406},{"left1":661,"top1":414},{"left1":641,"top1":419},{"left1":610,"top1":427},{"left1":575,"top1":434},{"left1":552,"top1":438},{"left1":527,"top1":442},{"left1":504,"top1":444},{"left1":480,"top1":449},{"left1":461,"top1":450},{"left1":442,"top1":453},{"left1":424,"top1":456},{"left1":404,"top1":459},{"left1":390,"top1":459},{"left1":378,"top1":459},{"left1":359,"top1":459},{"left1":345,"top1":459},{"left1":334,"top1":459},{"left1":325,"top1":459},{"left1":316,"top1":459},{"left1":310,"top1":459},{"left1":302,"top1":459},{"left1":292,"top1":460},{"left1":280,"top1":461},{"left1":268,"top1":464},{"left1":253,"top1":465},{"left1":250,"top1":465},{"left1":243,"top1":467},{"left1":235,"top1":467},{"left1":230,"top1":468},{"left1":224,"top1":469},{"left1":219,"top1":469},{"left1":210,"top1":470},{"left1":203,"top1":471},{"left1":196,"top1":472},{"left1":189,"top1":474},{"left1":183,"top1":475},{"left1":178,"top1":476},{"left1":175,"top1":477},{"left1":173,"top1":478},{"left1":169,"top1":479},{"left1":167,"top1":480},{"left1":162,"top1":480},{"left1":158,"top1":481},{"left1":152,"top1":483},{"left1":148,"top1":484},{"left1":146,"top1":484},{"left1":143,"top1":486},{"left1":143,"top1":487},{"left1":142,"top1":487},{"left1":139,"top1":488},{"left1":138,"top1":488},{"left1":135,"top1":489},{"left1":133,"top1":489},{"left1":131,"top1":490},{"left1":128,"top1":490},{"left1":127,"top1":490},{"left1":125,"top1":490},{"left1":124,"top1":490},{"left1":122,"top1":491},{"left1":120,"top1":492},{"left1":118,"top1":493},{"left1":116,"top1":494},{"left1":113,"top1":496},{"left1":111,"top1":498},{"left1":110,"top1":499},{"left1":108,"top1":501},{"left1":106,"top1":503},{"left1":104,"top1":505},{"left1":103,"top1":506},{"left1":102,"top1":507},{"left1":101,"top1":509},{"left1":100,"top1":511},{"left1":99,"top1":513},{"left1":99,"top1":514},{"left1":99,"top1":516},{"left1":98,"top1":518},{"left1":98,"top1":520},{"left1":98,"top1":523},{"left1":98,"top1":526},{"left1":98,"top1":528},{"left1":98,"top1":529},{"left1":99,"top1":529},{"left1":100,"top1":529},{"left1":101,"top1":529},{"left1":102,"top1":530},{"left1":103,"top1":532},{"left1":104,"top1":532},{"left1":105,"top1":533},{"left1":107,"top1":535},{"left1":109,"top1":537},{"left1":109,"top1":538},{"left1":109,"top1":539},{"left1":109,"top1":540},{"left1":109,"top1":541},{"left1":109,"top1":543},{"left1":109,"top1":545},{"left1":109,"top1":547},{"left1":108,"top1":-1000}]';
        var str2='[{"left1":976,"top1":1},{"left1":976,"top1":8},{"left1":974,"top1":15},{"left1":974,"top1":20},{"left1":973,"top1":25},{"left1":971,"top1":34},{"left1":970,"top1":43},{"left1":965,"top1":56},{"left1":962,"top1":67},{"left1":960,"top1":76},{"left1":957,"top1":87},{"left1":952,"top1":103},{"left1":948,"top1":115},{"left1":945,"top1":128},{"left1":937,"top1":140},{"left1":935,"top1":149},{"left1":929,"top1":158},{"left1":922,"top1":170},{"left1":917,"top1":179},{"left1":910,"top1":198},{"left1":906,"top1":207},{"left1":902,"top1":215},{"left1":898,"top1":220},{"left1":892,"top1":230},{"left1":885,"top1":239},{"left1":878,"top1":248},{"left1":870,"top1":257},{"left1":861,"top1":267},{"left1":852,"top1":274},{"left1":840,"top1":284},{"left1":829,"top1":292},{"left1":808,"top1":303},{"left1":794,"top1":310},{"left1":776,"top1":320},{"left1":758,"top1":331},{"left1":740,"top1":340},{"left1":722,"top1":348},{"left1":707,"top1":354},{"left1":691,"top1":362},{"left1":676,"top1":368},{"left1":663,"top1":373},{"left1":649,"top1":378},{"left1":637,"top1":384},{"left1":624,"top1":388},{"left1":617,"top1":388},{"left1":603,"top1":392},{"left1":593,"top1":392},{"left1":579,"top1":392},{"left1":564,"top1":392},{"left1":550,"top1":392},{"left1":536,"top1":389},{"left1":523,"top1":385},{"left1":508,"top1":380},{"left1":494,"top1":372},{"left1":479,"top1":364},{"left1":456,"top1":348},{"left1":444,"top1":336},{"left1":432,"top1":325},{"left1":423,"top1":313},{"left1":415,"top1":302},{"left1":413,"top1":296},{"left1":408,"top1":289},{"left1":404,"top1":277},{"left1":400,"top1":267},{"left1":398,"top1":256},{"left1":397,"top1":246},{"left1":397,"top1":234},{"left1":397,"top1":224},{"left1":397,"top1":214},{"left1":400,"top1":201},{"left1":409,"top1":187},{"left1":419,"top1":176},{"left1":434,"top1":163},{"left1":453,"top1":148},{"left1":472,"top1":138},{"left1":490,"top1":128},{"left1":503,"top1":123},{"left1":512,"top1":122},{"left1":524,"top1":118},{"left1":534,"top1":118},{"left1":545,"top1":118},{"left1":556,"top1":118},{"left1":570,"top1":118},{"left1":578,"top1":120},{"left1":585,"top1":122},{"left1":596,"top1":125},{"left1":605,"top1":130},{"left1":614,"top1":136},{"left1":622,"top1":144},{"left1":631,"top1":151},{"left1":640,"top1":163},{"left1":648,"top1":173},{"left1":659,"top1":189},{"left1":663,"top1":197},{"left1":667,"top1":203},{"left1":668,"top1":210},{"left1":672,"top1":216},{"left1":673,"top1":222},{"left1":675,"top1":229},{"left1":676,"top1":235},{"left1":676,"top1":239},{"left1":676,"top1":244},{"left1":677,"top1":250},{"left1":677,"top1":254},{"left1":677,"top1":259},{"left1":677,"top1":263},{"left1":677,"top1":268},{"left1":677,"top1":273},{"left1":675,"top1":278},{"left1":675,"top1":282},{"left1":671,"top1":289},{"left1":669,"top1":294},{"left1":660,"top1":303},{"left1":651,"top1":311},{"left1":642,"top1":321},{"left1":637,"top1":326},{"left1":630,"top1":332},{"left1":621,"top1":339},{"left1":613,"top1":346},{"left1":603,"top1":351},{"left1":595,"top1":357},{"left1":588,"top1":361},{"left1":580,"top1":365},{"left1":573,"top1":370},{"left1":562,"top1":375},{"left1":554,"top1":380},{"left1":547,"top1":384},{"left1":543,"top1":386},{"left1":537,"top1":390},{"left1":534,"top1":392},{"left1":529,"top1":395},{"left1":525,"top1":397},{"left1":522,"top1":399},{"left1":519,"top1":402},{"left1":513,"top1":406},{"left1":509,"top1":409},{"left1":505,"top1":412},{"left1":502,"top1":415},{"left1":495,"top1":419},{"left1":491,"top1":422},{"left1":486,"top1":424},{"left1":481,"top1":427},{"left1":475,"top1":431},{"left1":467,"top1":436},{"left1":463,"top1":438},{"left1":456,"top1":443},{"left1":450,"top1":445},{"left1":444,"top1":449},{"left1":438,"top1":452},{"left1":430,"top1":456},{"left1":397,"top1":471},{"left1":386,"top1":475},{"left1":349,"top1":487},{"left1":329,"top1":494},{"left1":318,"top1":499},{"left1":311,"top1":501},{"left1":305,"top1":505},{"left1":302,"top1":507},{"left1":299,"top1":509},{"left1":294,"top1":512},{"left1":289,"top1":513},{"left1":284,"top1":514},{"left1":277,"top1":517},{"left1":269,"top1":518},{"left1":264,"top1":521},{"left1":260,"top1":521},{"left1":256,"top1":522},{"left1":251,"top1":524},{"left1":247,"top1":525},{"left1":243,"top1":526},{"left1":238,"top1":528},{"left1":235,"top1":528},{"left1":230,"top1":529},{"left1":227,"top1":530},{"left1":220,"top1":532},{"left1":218,"top1":533},{"left1":214,"top1":533},{"left1":211,"top1":535},{"left1":207,"top1":535},{"left1":204,"top1":535},{"left1":202,"top1":536},{"left1":200,"top1":537},{"left1":197,"top1":537},{"left1":188,"top1":539},{"left1":176,"top1":541},{"left1":165,"top1":541},{"left1":159,"top1":543},{"left1":158,"top1":543},{"left1":157,"top1":544},{"left1":156,"top1":544},{"left1":154,"top1":544},{"left1":151,"top1":544},{"left1":146,"top1":545},{"left1":144,"top1":545},{"left1":141,"top1":547},{"left1":140,"top1":547},{"left1":139,"top1":547},{"left1":137,"top1":547},{"left1":133,"top1":547},{"left1":128,"top1":547},{"left1":123,"top1":547},{"left1":122,"top1":547},{"left1":121,"top1":547},{"left1":120,"top1":547},{"left1":118,"top1":547},{"left1":115,"top1":546},{"left1":111,"top1":544},{"left1":110,"top1":543},{"left1":109,"top1":543},{"left1":108,"top1":542},{"left1":107,"top1":542}]';
        var arr = JSON.parse(str1);
        console.log(arr);
        // 动画效果
        var box = $("#feiji")[0];
        box.style.display="block";
        var i =arr.length-1;
        var timer = setInterval(function(){
            box.style.left = arr[i].left1+"px";
            box.style.top = arr[i].top1-300+"px";
                               
            if(i<=0){
                clearInterval(timer);
                box.style.right =0+"px";
                box.style.top = -1000+"px";
            }
            i--;
        },20);

        
    })


 







    
})
})

