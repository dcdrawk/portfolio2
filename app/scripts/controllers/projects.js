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
  .controller('scrollBinderCtrl', function ($scope, $rootScope, $window, $log, $timeout) {
//    $scope.theBestVideo = 'sMKoNBRZM1M';
    $rootScope.isProject = true;
    $rootScope.place = 'Projects'; 
    $rootScope.projectTitle = ' - Scrollbinder';
    $rootScope.projectName = 'Scrollbinder';
    $rootScope.showProjTitle = true;  
    //$window.scrollTo(0, 0);
     $scope.opened = false;
    $scope.opening = true;
    //var MC = document.getElementById('main-content');
  //$log.debug(MC);
    //MC.scrollTo(0,0);
    //MC.scrollTop = 0;
  
    $timeout(function() {
      $scope.opening = false;
      $scope.opened = true;
    }, 1);
  
    $scope.testFalse = function(){
      $rootScope.isProject = false;
      $scope.test = false;
    };
    
  });
  
  