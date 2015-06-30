'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AppCrtl
 * @description
 * # AppCrtl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('AppCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $mdUtil, $log, $location, $anchorScroll) {

  //Fade in the whole app
  $rootScope.isLoaded = true;
  
  //Build Toggler for the sidenav
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
  
  //Function to change paths
  $scope.go = function ( path ) {
    $location.path( path );
    $mdSidenav('left').close();
  };
  
  //Scrolls to a hash element
  $scope.scroll2 = function ( hash ) {
    $anchorScroll(hash);
  };  

  //Show/Hide the title of the toolbar
  $rootScope.changeTitle = function ( title ) {
    if(title === 'none'){
      $rootScope.showProjTitle = false;
      } else {
        $rootScope.showProjTitle = true;
      }
    };    
  })
  
  //leftNav Controllers
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
  });