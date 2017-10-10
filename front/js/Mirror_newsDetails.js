
var newsDetails_app = new Vue({
    el:'#news-content',
    data:{
        newsDetails: {
                news_id: "news_20170828145254",
                news_title: "新闻标题",
                news_content: "<p>新闻内容</p>",
                news_time: "2017-08-28",
                news_editor: "Mirror",
                news_isshow: "",
                status: "",
                news_image: "",
                news_information: null
            }
    },
});

function getId () {
    return window.location.href.split('?')[1].split('=')[1];
}


$(function () {
    $.ajax({
        url:'/thorgeneweb/web_news/thorgeneweb_news!findById.action',
        data:{
            id:getId()
        },
        dataType:'json',
        success:function (data) {
            if(data){
                newsDetails_app.newsDetails = data;
            }else{
                alert('')
            }
        },
        error:function (data) {
            console.log('无法请求到数据' );
        }
    })
});