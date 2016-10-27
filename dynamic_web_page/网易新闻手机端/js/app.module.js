/**
 * Created by qingyun2 on 16/10/24.
 */
var _b = 0.075;
var test ;
var app = angular.module('wyApp', [
    'ngAnimate',
    'ngRoute'
]);
app.controller('rootCtrl', ['$scope', function ($scope) {
    $scope.h = window.innerHeight;
    $scope.w = window.innerWidth;
    $scope.conMarginTop = $scope.h * _b * 2 + 'px';
    $scope._b = _b;
    $scope.slideDownFaShow = true;
}]);
