/**
 * Created by qingyun2 on 16/10/27.
 */
app.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/list', {
                template: '<div>gaga</div>'
            })
            .when('/list/:listId', {
                template: '<div>gaga-change</div>'
            })
            .otherwise('/list')
    }]);