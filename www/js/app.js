// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('ClientController', ['$scope', '$http', function($scope, $http) {

    $scope.sendGetRequest = function() {
        var url = "http://localhost:8888/myapi/";

        $http.get(url)
            .success(function(data) {
                console.log('OK: ' + data.message);
            })
            .error(function(error) {
                console.log('Error');
            });
    }

    $scope.sendGetRequestNews = function() {
        var url = "http://localhost:8888/myapi/news";

        $http.get(url)
            .success(function(data) {
                console.log('OK: ' + data);

                for (var i = 0; i < data.length; i++) {
                    console.log('News title: ' + data[i].title);
                }
            })
            .error(function(error) {
                console.log('Error');
            });
    }

    $scope.sendGetRequestNewsWithAmount = function(amount) {
        var url = "http://localhost:8888/myapi/news/amount/" + amount;

        $http.get(url)
            .success(function(data) {
                console.log('OK: ' + data.newsCount);
            })
            .error(function(error) {
                console.log('Error');
            });
    }

    $scope.sendPostRequest = function(keyword) {
        var url = "http://localhost:8888/myapi/news/search/";

        $http.post(url, { "keyword": keyword })
            .success(function(data) {
                console.log('OK: ' + data.searchKeyword);
            })
            .error(function(error) {
                console.log('Error');
            });
    }

}])
