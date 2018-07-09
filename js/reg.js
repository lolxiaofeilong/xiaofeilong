$(function(){
    $("#btn_reg").click(function(){
        var phone = $("#phone").val().trim();
        var nickname = $("#nickname").val().trim();
        var password_r = $("#password_r").val().trim();
        console.log(phone,nickname,password_r);
        var params ={
                    phone,
                    nickname,
                    password_r
        };
        http.post("reg.php",params,function(res){
            console.log(res);
            if(res.indexOf("false")>=0){
                alert("此用户名太受欢迎，请换一个");
            }else{
                alert("恭喜你，注册成功");
            }
        })

 

 
    })

$("#yanzhengma").attr("value",yanzhengma());

function yanzhengma(){
    return parseInt((Math.random()*8999)+1000);
}



})