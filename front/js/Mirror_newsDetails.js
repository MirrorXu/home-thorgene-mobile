
var newsDetails_app = new Vue({
    el:'#news-content',
    data:{
        newsDetails: '' ,
        newsId :getId()
    },
    created:function () {

        var _this = this ;

	    $.ajax({
		    url:'http://api.vlifebank.com/vlifebank-api/news-list',
		    data:{
			    id:_this.newsId
		    },
		    dataType:'json',
		    success:function (data) {
			    if(data){
                     var news = data.data.filter(function (  v  ) {
                        return v.id == _this.newsId
                    })[0]

                    if( typeof news.content =='string' ){
                         news.content = JSON.parse(news.content)
                    }

				    _this.newsDetails = news;

			    }else{
				    console.log( '服务器响应成功，但并未返回数据')
			    }
		    },
		    error:function (data) {
			    console.log('天方创新数据接口错误' );
		    }
	    })
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

