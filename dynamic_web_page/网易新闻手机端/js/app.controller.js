/**
 * Created by qingyun2 on 16/10/24.
 */

angular.module('wyApp')
    .controller('wyCtrl', ['$scope', function ($scope) {
        $scope.templates = {
           head: {
            url: 'template/head.html'
           }
        }
    }]);