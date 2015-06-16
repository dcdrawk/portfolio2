'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('AppCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $mdUtil, $log, $location, $anchorScroll, $document) {
//  $scope.theBestVideo = 'sMKoNBRZM1M';
    $scope.awesome = true;
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
  $rootScope.isLoaded = true;
    $scope.fadeInBody = function (){
      $scope.isLoaded = true;
    };
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug('toggle ' + navID + ' is done');
              });
          },100);
      return debounceFn;
    }
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.go = function ( path ) {
      $location.path( path );
      $mdSidenav('left').close();
    };
    $scope.scroll2 = function ( hash ) {
//      console.log( hash );
//     // $location.path( hash );
//      var offset = 64; //pixels; adjust for floating menu, context etc
//      var duration = 2000; //milliseconds
//      var someElement = angular.element(document.getElementById(hash));
//      $document.scrollToElement(someElement, offset, duration);
      $anchorScroll(hash);
//      $(window).scrollTo(0,1000);
//      var offset = $('#projects').offset();
//      console.log(offset);
//      $("#main-content").animate({
//          scrollTop: 200
//      });
    };
  
    $rootScope.changeTitle = function ( title ) {
      $log.debug(title);
      if(title === 'none'){
//        $rootScope.projectTitle = '';
//        $rootScope.projectName = '';
        $rootScope.showProjTitle = false;
      } else {
//        $rootScope.projectTitle = ' - ' + title;
//        $rootScope.projectName = title;
        $rootScope.showProjTitle = true;
      }
    };
  
//  $scope.scrollPos = {}; // scroll position of each view
//
//  $(window).on('scroll', function() {
//      if ($scope.okSaveScroll) { // false between $routeChangeStart and $routeChangeSuccess
//          $scope.scrollPos[$location.path()] = $(window).scrollTop();
//          //console.log($scope.scrollPos);
//      }
//  });
//
//  $scope.scrollClear = function(path) {
//      $scope.scrollPos[path] = 0;
//  };
//
//  $scope.$on('$routeChangeStart', function() {
//      $scope.okSaveScroll = false;
//  });
//
//  $scope.$on('$routeChangeSuccess', function() {
//      $timeout(function() { // wait for DOM, then restore scroll position
//          $(window).scrollTop($scope.scrollPos[$location.path()] ? $scope.scrollPos[$location.path()] : 0);
//          $scope.okSaveScroll = true;
//      }, 0);
//  });
    
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug('close RIGHT is done');
        });
    };
  });