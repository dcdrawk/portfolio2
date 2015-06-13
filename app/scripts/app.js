'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('yoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'youtube-embed',
    'oblador.lazytube',
    'angularRipple'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '800', // by default use shade 700 from the cyan palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '200', // use shade 200 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette  ('teal', {
      'default': '400' // use shade 600 for default, and keep all other shades the same
    })
    .warnPalette('red', {
      'default': '600' // use shade 400 for default, and keep all other shades the same
    });
  })
  .config(function($mdIconProvider) {
        $mdIconProvider
          .icon('$default:menu', '../../assets/svg/menu.svg', 24)
          .icon('$default:share', '../../assets/svg/share.svg', 24)
          .defaultIconSet('../../assets/svg/avatars.svg', 24);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/scrollbinder', {
        templateUrl: 'views/projects/scrollbinder.html',
        controller: 'ProjectCtrl'
      })
    .when('/Scrollbinder', {
        templateUrl: 'views/projects/scrollbinder.html',
        controller: 'scrollBinderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
//  })
//  .directive("keepScrollPos", function($route, $window, $timeout, $location, $anchorScroll, $rootScope, $log) {
//      //if($location.path === 'about'){
//      // cache scroll position of each route's templateUrl
//      var scrollPosCache = {};
//
//      // compile function
//      return function(scope, element, attrs) {
//        $log.debug($location.path());
//          
//          scope.$on('$routeChangeStart', function() {
//              // store scroll position for the current view
//              if ($route.current) {
//                  scrollPosCache[$route.current.loadedTemplateUrl] = [ $window.pageXOffset, $window.pageYOffset ];
//              }
//          });
//
//          scope.$on('$routeChangeSuccess', function() {
//              $log.debug($location.path());
//              if($location.path() === '/about'){
//                $log.debug('ITS ABOOT TIME');
//                // if hash is specified explicitly, it trumps previously stored scroll position
//                if ($location.hash()) {
//                    $anchorScroll();
//
//                // else get previous scroll position; if none, scroll to the top of the page
//                } else {
//                    var prevScrollPos = scrollPosCache[$route.current.loadedTemplateUrl] || [ 0, 0 ];
//                    $timeout(function() {
//                        $window.scrollTo(prevScrollPos[0], prevScrollPos[1]);
//                    }, 0);
//                }
//              } else {
//                $log.debug('AINT NOBODYE');
//                $window.scrollTo(0, 0);
//              }
//          });
//       
//      }
  })
//  })
  .run(function($rootScope, $location, $anchorScroll, $routeParams, $log) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeStart', function() {
      $log.debug($location.path());
      if($location.path() !== '/'){
        if(document.getElementById('about-content')){
          
          var MC = document.getElementById('about-content');
          if(MC.scrollTop){          
            $rootScope.aboutTop = MC.scrollTop;
          }
          console.log($rootScope.aboutTop);
        }
      }
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      //$location.hash($routeParams.scrollTo);
      $log.debug('SUCCESS!');
    });
})
.run(function ($rootScope, $location) {

    var history = [];

    $rootScope.$on('$routeChangeSuccess', function() {
        history.push($location.$$path);
    });

    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

});