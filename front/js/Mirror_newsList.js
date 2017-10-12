/**
 * Created by MirrorXu on 2017/8/28.
 */
/**
 * Created by MirrorXu on 2017/8/28.
 */
/**
 * Created by MirrorXu on 2017/8/24.
 */
/**
 * Created by MirrorXu on 2017/8/23.
 */

var newList = [];

var newsList_app = new Vue({
    el:'#news-content',
    data:{
        newsList:newList,
        bUrl:'news-details.html?id='
    },
});

//function getId () {
//    return window.location.href.split('?')[1].split('=')[1];
//}


$(function () {
    $.ajax({
        url:'/thorgeneweb/web_news/thorgeneweb_news!findAllShow.action',
        dataType:'json',
        async:false,
        success:function (data) {
            if(data&&$.type(data)==='array'){
            	newsList_app.newsList = data;
            }else{
                alert('服务器繁忙，请稍后再试！')
            }
        },
        error:function (data) {
            console.log('err：请求错误',data );
            newsList_app.newsList = [
                {
                    news_id: "news_20170828145254",
                    news_title: "新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题",
                    news_content: "<h2>新闻内容</h2>",
                    news_time: "2017-08-28",
                    news_editor: "Mirror",
                    news_isshow: "",
                    status: "",
                    news_image: "http://img3.qianzhan123.com/news/201701/12/20170112-3299cb46df3d25fd_600x5000.jpg",
                    news_information:"新闻摘要"
                },
                {
                    news_id: "news_20170828145254",
                    news_title: "新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题",
                    news_content: "<h2>新闻内容</h2>",
                    news_time: "2017-08-28",
                    news_editor: "Mirror",
                    news_isshow: "",
                    status: "",
                    news_image: "http://img3.qianzhan123.com/news/201701/12/20170112-3299cb46df3d25fd_600x5000.jpg",
                    news_information:"新闻摘要"
                },
                {
                    news_id: "news_20170828145254",
                    news_title: "新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题",
                    news_content: "<h2>新闻内容</h2>",
                    news_time: "2017-08-28",
                    news_editor: "Mirror",
                    news_isshow: "",
                    status: "",
                    news_image: "http://img3.qianzhan123.com/news/201701/12/20170112-3299cb46df3d25fd_600x5000.jpg",
                    news_information:"新闻摘要"
                },
                {
                    news_id: "news_20170828145254",
                    news_title: "新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题",
                    news_content: "<h2>新闻内容</h2>",
                    news_time: "2017-08-28",
                    news_editor: "Mirror",
                    news_isshow: "",
                    status: "",
                    news_image: "http://img3.qianzhan123.com/news/201701/12/20170112-3299cb46df3d25fd_600x5000.jpg",
                    news_information:"新闻摘要"
                }
            ]
        }
    })
});