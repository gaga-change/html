/**
 * Created by qingyun2 on 16/10/24.
 */

angular.module('wyApp')
    .controller('wyCtrl', ['$scope', function ($scope) {
        $scope.templates = {
            head: {
                url: 'template/head.html'
            },
            nav: {
                url: 'template/bar-list.html'
            }
        }
    }])
    .controller('barListCtrl', ['$scope', function ($scope) {
        $scope.bars = [
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
        $scope.slideDown = function () {
            console.log('sss');
        };
        //点击菜单后,自动把该元素移动到 靠近左边的地方
        //1.监听点击事件,点击后 改变路径
        //2.监听路径变化,根据路径 获取到目标元素,改变它的位置
    }]);