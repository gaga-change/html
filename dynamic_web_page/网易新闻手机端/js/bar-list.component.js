/**
 * Created by qingyun2 on 16/10/25.
 */

app.component('barList', {
    templateUrl: 'template/bar-list.html',
    controller: function () {
        var self = this;
        self.bars = [
            {name: '推荐'},
            {name: '新闻'},
            {name: '娱乐'},
            {name: '体育'},
            {name: '直播'},
            {name: '财经'},
            {name: '汽车'},
            {name: '军事'},
            {name: '图片'},
            {name: '视频'},
            {name: '段子'},
            {name: '时尚'},
            {name: '本地'},
            {name: '网易号'},
            {name: '手机'},
            {name: '公开课'},
            {name: '科技'},
            {name: '跟帖'},
            {name: '游戏'},
            {name: '数码'},
            {name: '教育'},
            {name: '健康'},
            {name: '独家'},
            {name: '航空'},
            {name: '旅游'},
            {name: '亲子'},
            {name: '酒香'},
            {name: '彩票'},
            {name: '星闻'},
            {name: '房产'},
            {name: '家居'},
            {name: '小说'},
            {name: '漫画'},
            {name: 'BoBo'}
        ];
    }

});