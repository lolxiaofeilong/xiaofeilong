require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})

define(['jquery', 'http'], function($, http){
    return {
        init: function(){
            http.post('http://api-lybz.jcebing.com:8089/api/Vendor/GetPageList', {pageSize: 10, page: 1}, function(res){
        
            })
        }
    }
})


