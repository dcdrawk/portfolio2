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
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code       > class
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
      .when('/Scrollbinder', {
        templateUrl: 'views/projects/scrollbinder.html',
        controller: 'scrollBinderCtrl'
      })
      .when('/DiceRoller', {
        templateUrl: 'views/projects/diceroller.html',
        controller: 'diceCtrl'
      })
      .when('/UFOria', {
        templateUrl: 'views/projects/uforia.html',
        controller: 'ufoCtrl'
      })
      .when('/Harvey', {
        templateUrl: 'views/projects/harvey.html',
        controller: 'harveyCtrl'
      })
      .when('/Kinect', {
        templateUrl: 'views/projects/kinect.html',
        controller: 'kinectCtrl'
      })
      .when('/QWERT', {
        templateUrl: 'views/projects/qwert.html',
        controller: 'qwertCtrl'
      })
      .when('/Sandwich', {
        templateUrl: 'views/projects/sandwich.html',
        controller: 'sandwhichCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
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
        var testEle = document.getElementById('main-content');

//    function myMethod(){
//      var main = document.getElementById('about-content');
//      var ele = document.getElementById('websites');
//      
//      console.log(ele.offsetTop - main.scrollTop );
//      $root.place = 'lol';
//    }
  
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

})
.directive("scroll", function ($document) {
  console.log('Scrolled1!!!');
    return function(scope, element, attrs) {
      console.log('Scrolled2!!!');
        angular.element($document).bind("scroll", function() {
          console.log('Scrolled3!!!');
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});

///**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//* Anchor Smooth Scroll - Smooth scroll to the given anchor on click
//*   adapted from this stackoverflow answer: http://stackoverflow.com/a/21918502/257494
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//.directive('anchorSmoothScroll', function($location) {
//    'use strict';
// 
//    return {
//        restrict: 'A',
//        replace: false,
//        scope: {
//            'anchorSmoothScroll': '@'
//        },
// 
//        link: function($scope, $element, $attrs) {
// 
//            initialize();
//    
//            /* initialize -
//            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//            function initialize() {
//                createEventListeners();
//            }
// 
//            /* createEventListeners -
//            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//            function createEventListeners() {
//                // listen for a click
//                $element.on('click', function() {
//                    // set the hash like a normal anchor scroll
//                    $location.hash($scope.anchorSmoothScroll);
// 
//                    // smooth scroll to the passed in element
//                    scrollTo($scope.anchorSmoothScroll);
//                });
//            }
// 
//            /* scrollTo -
//            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//            function scrollTo(eID) {
// 
//                // This scrolling function 
//                // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
//                console.log('Scroll to!');
//                var i;
//                var startY = currentYPosition();
//                var stopY = elmYPosition(eID);
//                var distance = stopY > startY ? stopY - startY : startY - stopY;
//                if (distance < 100) {
//                    scrollTo(0, stopY); return;
//                }
//                var speed = Math.round(distance / 100);
//                if (speed >= 20) speed = 20;
//                var step = Math.round(distance / 25);
//                var leapY = stopY > startY ? startY + step : startY - step;
//                var timer = 0;
//                if (stopY > startY) {
//                    for (i = startY; i < stopY; i += step) {
//                        setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
//                        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//                    } return;
//                }
//                for (i = startY; i > stopY; i -= step) {
//                    setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
//                    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//                }
//            }
//            
//            /* currentYPosition -
//            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//            function currentYPosition() {
//                // Firefox, Chrome, Opera, Safari
//                if (window.pageYOffset) {
//                    return window.pageYOffset;
//                }
//                // Internet Explorer 6 - standards mode
//                if (document.documentElement && document.documentElement.scrollTop) {
//                    return document.documentElement.scrollTop;
//                }
//                // Internet Explorer 6, 7 and 8
//                if (document.body.scrollTop) {
//                    return document.body.scrollTop;
//                }
//                return 0;
//            }
// 
//            /* scrollTo -
//            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//            function elmYPosition(eID) {
//                var elm = document.getElementById(eID);
//                var y = elm.offsetTop;
//                var node = elm;
//                while (node.offsetParent && node.offsetParent != document.body) {
//                    node = node.offsetParent;
//                    y += node.offsetTop;
//                } return y;
//            }
//        }
//    };
//});