'use strict';

angular
  .module('app')
  .controller('NotificationController', NotificationController);

function NotificationController($timeout, $interval) {

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

  Notification.notifications = [
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "2",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "5",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "2",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "5",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "2",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "5",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "2",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "5",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Ivana Stankova",
      "action": "likes your photo",
      "time": "2",
      "content": "assets/images/content/no-content.jpg"
    },
    {
      "image": "assets/images/friends/no-image.png",
      "name": "Dave Peters",
      "action": "commented on your post",
      "time": "5",
      "content": "assets/images/content/no-content.jpg"
    },
  ];

}
