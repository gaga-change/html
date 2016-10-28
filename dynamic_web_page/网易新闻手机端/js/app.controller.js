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
            {name: '推荐', url: 'tuijian', out: false},
            {name: '新闻', url: 'xinwen', out: false},
            {name: '娱乐', url: 'yule', out: false},
            {name: '体育', url: 'tiyu', out: false},
            {name: '直播', url: 'zhibo', out: false},
            {name: '财经', url: 'caijin', out: false},
            {name: '汽车', url: 'qiche', out: false},
            {name: '军事', url: 'junshi', out: false},
            {name: '图片', url: 'tupain', out: false},
            {name: '视频', url: 'shipin', out: false},
            {name: '段子', url: 'duanzi', out: false},
            {name: '时尚', url: 'shishan', out: false},
            {name: '本地', url: 'bendi', out: false},
            {name: '网易号', url: 'wanyihao', out: false},
            {name: '手机', url: 'shouji', out: false},
            {name: '公开课', url: 'dongkaike', out: false},
            {name: '科技', url: 'keji', out: false},
            {name: '跟帖', url: 'gentie', out: false},
            {name: '游戏', url: 'youxi', out: false},
            {name: '数码', url: 'shuma', out: false},
            {name: '教育', url: 'jiaoyu', out: false},
            {name: '健康', url: 'jiankang', out: false},
            {name: '独家', url: 'dujia', out: false},
            {name: '航空', url: 'hangkong', out: false},
            {name: '旅游', url: 'lvyou', out: false},
            {name: '亲子', url: 'qingzi', out: false},
            {name: '酒香', url: 'jiuxiang', out: false},
            {name: '彩票', url: 'caipiao', out: false},
            {name: '图片', url: '#', out: true, imgUrl: 'img/tupian.png'},
            {name: '轻松一刻', url: '#', out: true, imgUrl: 'img/qingsongyike.png'},
            {name: '星闻', url: '#', out: true, imgUrl: 'img/xingwen.png'},
            {name: '公开课', url: '#', out: true, imgUrl: 'img/gongkaike.png'},
            {name: '邮箱', url: '#', out: true, imgUrl: 'img/youxiang.png'},
            {name: '房产', url: '#', out: true, imgUrl: 'img/fangchan.png'},
            {name: '家居', url: '#', out: true, imgUrl: 'img/jiaju.png'},
            {name: '小说', url: '#', out: true, imgUrl: 'img/xiaoshuo.png'},
            {name: '漫画', url: '#', out: true, imgUrl: 'img/manhua.png'},
            {name: 'BoBo', url: '#', out: true, imgUrl: 'img/bobo.png'}
        ];
        $scope.slideDownContent = 'glyphicon-chevron-down';
        $scope.slideDown = function () {
            // console.log('sss');
            if ($scope.slideDownContent == 'glyphicon-chevron-down') {
                $scope.slideDownContent = 'glyphicon-chevron-up';
                $('[data-id = slideDownFa]').removeClass('bounceOutUp');
                $('[data-id = slideDownFa]').addClass('bounceInDown');
                // console.log($('[data-id = slideDownFa]'));
            } else {
                $('[data-id = slideDownFa]').removeClass('bounceInDown');
                $('[data-id = slideDownFa]').addClass('bounceOutUp');

                $scope.slideDownContent = 'glyphicon-chevron-down';
            }
            // $scope.slideDownFaShow = !$scope.slideDownFaShow ;
        };
        $scope.aClick = function (i) {
            console.log(i);
            if (i == 'b')$scope.slideDown();
        };
        //点击菜单后,自动把该元素移动到 靠近左边的地方
        //1.监听点击事件,点击后 改变路径
        //2.监听路径变化,根据路径 获取到目标元素,改变它的位置
    }])
    .controller('con', ['$scope', function ($scope) {

    }])
    .controller('detailCtrl', ['scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

    }]);