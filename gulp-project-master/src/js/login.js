require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})

require(['jquery', 'http'], function($, http){
    $(function(){
        $('#btn_login').click(function(){
            //ajax
            http.post('User/Login', {
                username: $('#username').val().trim(),
                password: $('#password').val().trim()
            }).then(function(res){
                console.log(res);
            })
        })
    })
})


