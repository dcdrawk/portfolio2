'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('ProjectCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [];
    $rootScope.isProject = true;
  })
  .controller('scrollBinderCtrl', function ($scope, $rootScope, $timeout) {
    $rootScope.isProject = true;
    $rootScope.projectTitle = ' - Scrollbinder';
    $rootScope.projectName = 'Scrollbinder';
    $rootScope.showProjTitle = true;
    $rootScope.opened = false;
    $scope.opened = false;
    $scope.opening = true;
    $timeout(function() {
      $scope.opening = false;
      $scope.opened = true;
      $rootScope.opened = true;
    }, 1000);    
  })
  .controller('diceCtrl', function ($scope, $rootScope, $timeout) {
    $rootScope.isProject = true; 
    $rootScope.projectTitle = ' - DiceRoller';
    $rootScope.projectName = 'DiceRoller';
    $rootScope.showProjTitle = true;
    $rootScope.opened = false;
    $scope.opened = false;
    $scope.opening = true;  
    $timeout(function() {
      $scope.opening = false;
      $scope.opened = true;
      $rootScope.opened = true;
    }, 1000);
  })
  .controller('ufoCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - UFOria';
      $rootScope.projectName = 'UFOria';
      $rootScope.showProjTitle = true;  
      $scope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  })
  .controller('harveyCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - Harvey';
      $rootScope.projectName = 'Harvey';
      $rootScope.showProjTitle = true;
      $rootScope.opened = false;
      $scope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  })
  .controller('kinectCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - Kinect Remote';
      $rootScope.projectName = 'Kinect Remote';
      $rootScope.showProjTitle = true;
      $rootScope.opened = false;
      $scope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  })
  .controller('qwertCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = " - QWERT's Quest";
      $rootScope.projectName = 'QWERT';
      $rootScope.showProjTitle = true;  
      $scope.opened = false;
      $rootScope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  })
  .controller('sandwhichCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - The Sandwhich';
      $rootScope.projectName = 'DiceRoller';
      $rootScope.showProjTitle = true;  
      $rootScope.opened = false;
      $scope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
    })
  .controller('sccCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - SCC';
      $rootScope.projectName = 'SCC';
      $rootScope.showProjTitle = true;  
      $rootScope.opened = false;
      $scope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  })
  .controller('esebcCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - ESEBC';
      $rootScope.projectName = 'ESEBC';
      $rootScope.showProjTitle = true;  
      $rootScope.opened = false;
      $scope.opened = false;
      $scope.opening = true;
      $scope.gallery =  [{thumb: 'images/thumbs/1.jpg', img: 'images/websites/esebc1.jpg', description: 'Image 1'},
                        {thumb: 'images/thumbs/2.jpg', img: 'images/websites/epilepsy_old_home.jpg', description: 'Image 2'}];  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  })
  .controller('bcbtCtrl', function ($scope, $rootScope, $timeout) {
      $rootScope.isProject = true; 
      $rootScope.projectTitle = ' - BCBT';
      $rootScope.projectName = 'BCBT';
      $rootScope.showProjTitle = true;  
      $rootScope.opened = false;
      $scope.opened = false;
      $scope.opening = true;  
      $timeout(function() {
        $scope.opening = false;
        $scope.opened = true;
        $rootScope.opened = true;
      }, 1000);
  });
  
  