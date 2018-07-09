$.fn.datagrid = function(options){
    var obj = {
                url:"",
                method:"get",
                cols:"",
                data:{}
    }

    var opts = $.extend(obj,options);

    var refresh = function(){

        var table = $("<table></table>");
        table.attr("class","table");
        var thead = $("<thead></thead>");
        var tbody = $("<tbody></tbody>");
        http[opts.method](opts.url,opts.data,function(res){
            // 生成thead
            var columns = opts.cols ? opts.cols.split(",") : Object.keys(res.data.data[0]);
            var tr = $("<tr></tr>");
            for(let col of columns){
                $("<th></th>").text(col).appendTo(tr);
            }
            tr.appendTo(thead);
console.log(res);
            // 生成tbody
            for(let item of res.data.data){
                tr = $("<tr></tr>");
                
                for(let col of columns){
                    $("<td></td>").text(item[col]).appendTo(tr);
                }
                tr.appendTo(tbody);
            }

            thead.appendTo(table);
            tbody.appendTo(table);
            table.appendTo(this);

        }.bind(this))

    }.bind(this)


    refresh();
}