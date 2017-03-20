'use strict';

angular.module('myApp.services', [])

    .service('JokeService', function ($http) {
        var services = {};
        services.getJokes = function () {
            return $http.get('api/jokes');
        };
        return services;

    });
;