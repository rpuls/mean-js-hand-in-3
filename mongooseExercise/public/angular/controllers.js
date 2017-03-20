'use strict';

angular.module('myApp.controllers', [])
    .controller('JokeController', function ($scope, JokeService) {

        $scope.jokes = [];

        JokeService.getJokes().then(
            function (response) {
                $scope.jokes = response.data;                
            });
    });

;
