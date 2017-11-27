/**
 * Created by MirrorXu on 2017/8/23.
 */

var proLists = {
        // checked: false,
        // children: '',
        // id: "pid_003",
        // product_isparent: "T",
        // product_pid: "-1",
        // text: "loading..."
    };

var app = new Vue({
    el: '#app',
    data: {
        proLists: proLists,
        bUrl:'product-details.html?id='
    }
});


function getId () {
	var hrefStr = window.location.href;

	if( hrefStr.indexOf('?') > (-1) ){
		var str = hrefStr.split('?')[1];
		if( str.indexOf('&') > (-1)  ){
			return str.split('&')[0].split('=')[1];
		}else{
			return str.split('=')[1];
		}
	}else {
		alert( 'URL参数错误' )
	}
}


$(function () {
   $.ajax({
       url:'/thorgeneweb/thorgeneweb_product/thorgeneweb_product!findByParent_idForHtml.action',
       data:{
           product_id:getId()
       },
       async:false,  // 同步请求数据
       dataType:'json',
       success:function (data) {
           if(data){
               app.proLists = data[0];
           }
       },
       error:function ( e ) {
            console.log('ajax错误：' , '\n错误:' + e );
           app.proLists = {
               checked: false,
               children: [
                   {
                       text:'1.数据错误，请联系管理员',
                       id:'pid_01',
                       children:[
                           {
                               text:'1.1',
                               product_pid:1
                           },
                           {
                               text:'1.2',
                               product_pid:1
                           }
                       ]
                   },
                   {
                       text:'2.数据错误，请联系管理员',
                       id:'pid_02',
                       children:[
                           {
                               text:'2.1',
                               product_pid:1
                           },
                           {
                               text:'2.2',
                               product_pid:1
                           }
                       ]
                   },
                   {
                       text:'2.数据错误，请联系管理员',
                       id:'pid_03',
                       children:[
                           {
                               text:'2.1',
                               product_pid:1
                           },
                           {
                               text:'2.2',
                               product_pid:1
                           }
                       ]
                   }
               ],
               id: "pid_003",
               product_isparent: "T",
               product_pid: "-1",
               text: "loading..."
           };
       }
   })
});
