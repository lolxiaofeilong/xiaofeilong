require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient',
        'suppliers': './suppliers'
    }
})

require(['jquery', 'http', 'suppliers'], function($, http, aa){
    $(function(){
        $('.dk-nav').on('click', function(event){
            if($(event.target).is('a')){
                var name = $(event.target).prop('class');
                $('.dk-content').load(name + '.html', function(){
                    //当 html loaded 执行
                    // suppliers.init()

                    // var str = 'a'
                    // function a(){}
                    // window.eval(str)()
                    // var obj = {name: "Tom"};
                    // var str = "obj"
                    // console.log(window.eval(str));
                });
            }
        })
    })
})


