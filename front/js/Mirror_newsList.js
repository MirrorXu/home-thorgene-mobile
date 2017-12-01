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


var newsData = [];
var newsApp = new Vue({
	el: '#news-content',
	data: {
		bUrl: './news-details.html?id=',
		newsData: newsData,
		totalNum: 0,
		show: '',    // 将要展示的新闻列表
		num: 10,      // 记录展示的新闻数量，并通过这个数量来改变当前展示的新闻数量
		step: 6,  // 点击更多按钮时的增加的新闻数量
		btnMoreTxt: '点击加载更多...',
		showBtnMore: 0
	},
	created: function () {
		var _this = this;
		$.ajax({
			url: 'http://www.vlifebank.com/vlifebank-api/news-list',
			// async: false,
			dataType: 'json',
			success: function (data) {
				if (data.retCode === 0) {

					_this.newsData = data.data;

					_this.totalNum = _this.newsData.length;

					_this.show = _this.newsData.filter(function (v, i) {
						return i < _this.num;
					})

					console.log('ajax 数据是否改变了show：', _this.show.length)

				} else {
					console.log('天方创新新闻接口出现错误...请确认')
				}

			}
		})

	},
	mounted: function () {
		console.log('mounted:', this.show.length);
		this.showBtnMore = 1
	},
	updated: function () {
	},
	methods: {
		showMore: function () {

			this.num += this.step;

			if (this.num <= this.totalNum) {
				var _this = this;
				this.show = this.newsData.filter(function (v, i) {
					return i < _this.num;
				})
			} else {
				this.num = this.totalNum;

				this.btnMoreTxt = '已经没有更多了...';

				return false
			}


			console.log(this.num);

		}
	}
})