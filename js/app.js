(function () {

  'use strict';

  //require('angular');
  //require('angular-route');

  // Load services
  //var notificationSrvc = require('./services/profile');

  // Load controllers
  //var notificationCtrl = require('./controllers/notification');

  angular.module('app', [
    'ngRoute'
  ])
    .config([
      '$routeProvider',
      '$provide',
      function ($routeProvider, $provide) {
        $routeProvider.when('/notifications', {
            templateUrl: 'states/notifications.html',
            controller: 'NotificationController as Notification'
          });
        $routeProvider.otherwise({redirectTo: '/notifications'});
      }
    ]);
    //.factory('NotificationService', ['$http', 'baseUrl', notificationSrvc])
    //.controller('NotificationController', [notificationCtrl]);

}());
