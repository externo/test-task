'use strict';

angular
  .module('app')
  .controller('NotificationController', NotificationController);

function NotificationController($timeout, $window, $scope) {

  var Notification = this;

  Notification.showBtn = true;
  Notification.showLoad = false;
  Notification.count = Math.floor($(document).height() / 40)-3;

  Notification.loadMore = function(){
    Notification.showBtn = false;
    Notification.showLoad = true;
    $timeout(function(){
      Notification.showBtn = true;
      Notification.showLoad = false;
      Notification.count++;
    }, 1000);
  };

  Notification.countRows = function () {
    return Math.floor($(document).height() / 40)-3;
  };

  angular.element($window).bind('resize', function(){
    Notification.count = Math.floor($(document).height() / 40)-3;
    $scope.$apply();
  });

  Notification.notifications = [
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "1",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "2",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "3",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "4",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "5",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "6",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "7",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "8",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "9",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "10",
      "content": "assets/images/content/no-content.jpg"
    },
  ];

}
