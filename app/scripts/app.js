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
    'ngMessages',
    'ngTouch',
    'ngMaterial',
    'oblador.lazytube',
    'angularRipple',
    'angulartics',
    'angulartics.google.analytics',
    'jkuri.gallery'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '800', // by default use shade 800
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '200', // use shade 200 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette  ('amber', {
      'default': '400' // use shade 600 for default, and keep all other shades the same
    })
    .warnPalette('red', {
      'default': '600' // use shade 400 for default, and keep all other shades the same
    });
  })
  //import icons
  .config(function($mdIconProvider) {
        $mdIconProvider
          .icon('$default:menu', '../../assets/svg/menu.svg', 24);
          //.icon('$default:share', '../../assets/svg/share.svg', 24)
          //.defaultIconSet('../../assets/svg/avatars.svg', 24);
  })
  
  //Views go here
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
      })
      .when('/BCBT', {
        templateUrl: 'views/websites/bcbt.html',
        controller: 'bcbtCtrl'
      })
      .when('/ESEBC', {
        templateUrl: 'views/websites/esebc.html',
        controller: 'esebcCtrl'
      })
      .when('/SCC', {
        templateUrl: 'views/websites/scc.html',
        controller: 'sccCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, $log) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeStart', function() {
      $log.debug($location.path());
      
      //if the location path isn't the main page sets  the scroll top to the stored value
      if($location.path() !== '/'){
        if(document.getElementById('about-content')){          
          var MC = document.getElementById('about-content');
          if(MC.scrollTop){          
            $rootScope.aboutTop = MC.scrollTop;
          }
          //console.log($rootScope.aboutTop);
        }
      }
    });  
  })
  
  //keep the history of the page views so they can click the back button
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
//  .config(function(AnalyticsProvider) {
//    // initial configuration
//    AnalyticsProvider.setAccount('UA-55235200-1');
//    // using multiple tracking objects (analytics.js only)
//    // AnalyticsProvider.setAccount([
//    //   { tracker: 'UA-12345-12', name: "tracker1" },
//    //   { tracker: 'UA-12345-34', name: "tracker2" }
//    // ]);
//
//    // track all routes (or not)
//    AnalyticsProvider.trackPages(true);
//
//    // track all url query params (default is false)
//    AnalyticsProvider.trackUrlParams(true);
//
//    // Optional set domain (Use 'none' for testing on localhost)
//    // AnalyticsProvider.setDomainName('XXX');
//
//    // Use display features plugin
//    AnalyticsProvider.useDisplayFeatures(true);
//
//    // url prefix (default is empty)
//    // - for example: when an app doesn't run in the root directory
//    AnalyticsProvider.trackPrefix('portfolio');
//
//    // Use analytics.js instead of ga.js
//    AnalyticsProvider.useAnalytics(true);
//
//    // Use cross domain linking
//    AnalyticsProvider.useCrossDomainLinker(false);
//    //AnalyticsProvider.setCrossLinkDomains(['domain-1.com', 'domain-2.com']);
//
//    // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
//    AnalyticsProvider.ignoreFirstPageLoad(false);
//
//    // Enabled eCommerce module for analytics.js(uses legacy ecommerce plugin)
//    //AnalyticsProvider.useECommerce(true, false);
//
//    // Enabled eCommerce module for analytics.js(uses ec plugin instead of ecommerce plugin)
//    //AnalyticsProvider.useECommerce(true, true);
//
//    // Enable enhanced link attribution
//    AnalyticsProvider.useEnhancedLinkAttribution(true);
//
//    // Enable analytics.js experiments
//    //AnalyticsProvider.setExperimentId('12345');
//
//    // Set custom cookie parameters for analytics.js
////    AnalyticsProvider.setCookieConfig({
////      cookieDomain: 'foo.example.com',
////      cookieName: 'myNewName',
////      cookieExpires: 20000
////    });
//
//    // change page event name
//    AnalyticsProvider.setPageEvent('$stateChangeSuccess');
//
//
//    // Delay script tage creation
//    // must manually call Analytics.createScriptTag(cookieConfig) or Analytics.createAnalyticsScriptTag(cookieConfig)
//    AnalyticsProvider.delayScriptTag(true);
//  })
//  .run(function(Analytics) {
//    // In case you are relying on automatic page tracking, you need to inject Analytics
//    // at least once in your application (for example in the main run() block)
//  });