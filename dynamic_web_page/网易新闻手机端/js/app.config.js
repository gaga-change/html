/**
 * Created by qingyun2 on 16/10/27.
 */
app.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/news/xinwen', {
                templateUrl: 'template/detail.html'
            })
            .when('/news/:listId', {
                templateUrl: 'template/detail.html'
            })
            .otherwise('/news/xinwen');
    }]);
