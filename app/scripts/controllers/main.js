'use strict';

/**
 * @ngdoc function
 * @name iat381Assignment2MozzappAApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iat381Assignment2MozzappAApp
 */
angular.module('iat381Assignment2MozzappAApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Array to store the music
    $scope.playlist = [
      {
        "src": "../music/detroit.mp3",
        "type": "audio/mp3",
      },
      {
        "src": "http://upload.wikimedia.org/wikipedia/en/7/79/Korn_-_Predictable_%28demo%29.ogg",
        "type": "audio/ogg",
      }
    ];

    // Plays the song
    $scope.play = function () {
        $scope.detroit.play();
    };
    $scope.pause = function () {
        $scope.detroit.pause();
    };
    $scope.stop = function () {
        $scope.detroit.stop();
    };

    drag();
});

var drag = function(){
	"use strict";
    var items = document.querySelectorAll('.item');
  
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    var draggie = new Draggabilly( item, {
      handle: '.handle'
    });
    var draggie = new Draggabilly( item, {  
      axis: 'y'  
    });  
  }
}
