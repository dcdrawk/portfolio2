'use strict';

angular
  .module('yoApp')
  .controller('gridListDemoCtrl', function($scope, $log, $rootScope, $timeout, $anchorScroll, $location) {
    $rootScope.isProject = false;  
    $rootScope.place = 'Projects'; 
    $rootScope.changeTitle('none');
//  $location.hash('projects');
//  $anchorScroll(); 
  
  $rootScope.WUT = function (){
    $anchorScroll();
    $location();
    //var test = document.getElementById("main-content").scrollTop;
    //$log.debug(test);
//    $location.hash('projects');
//    $anchorScroll(); 
//    $location.path('/about');
  };
  $rootScope.isTransition = true;
  var test = document.getElementById("about-content");
  
  $timeout(function() {
    test.scrollTop = $rootScope.aboutTop;
  }, 0);
  
  $timeout(function() {
     $rootScope.opened = false;
  }, 1000);
  
  console.log('ABOUT TOP = ' + $rootScope.aboutTop);
//  $rootScope.myMethod = function(){
//      var main = document.getElementById('about-content');
//      var ele = document.getElementById('websites');
//      
//      console.log(ele.offsetTop - main.scrollTop );
//      $rootScope.place = 'lol';
//    }
//  $scope.myMethod = function(){
//    console.log('testing scroll');
//  }
  //$rootScope.WUT();
  
//  var degred = $rootScope.$on('$locationChangeSuccess', function(){
//      var path = $location.path();
//      var hash = $location.hash();
//      console.log('THIS IS THE PATH: ' + path);
//      console.log('THIS IS THE HASH: ' + hash);
////      $anchorScroll();
//      //var waxxy = parseQuery(window.location.href);
//      //console.log(waxxy);
//  })
//    $scope.projects = [{      
//      title: 'Scrollbinder',
//      subtitle: 'DnD Character Planner'
//    },{
//      title: 'test2',
//      subtitle: 'Subtitle for test 2'
//    },{
//      title: 'test3',
//      subtitle: 'Subtitle for test 3'
//    },{
//      title: 'test4',
//      subtitle: 'Subtitle for test 4'
//    },{
//      title: 'test5',
//      subtitle: 'Subtitle for test 5'
//    },{
//      title: 'test6',
//      subtitle: 'Subtitle for test 6'
//    },{
//      title: 'test7',
//      subtitle: 'Subtitle for test 7'
//    },{
//      title: 'test8',
//      subtitle: 'Subtitle for test 8'
//    },{
//      title: 'test9',
//      subtitle: 'Subtitle for test 9'
//    },{
//      title: 'test10',
//      subtitle: 'Subtitle for test 10'
//    },{
//      title: 'test11',
//      subtitle: 'Subtitle for test 11'
//    }];
      
      
//    $log.debug($scope.projects[0].title);
  $scope.test = [];
  $scope.awesome = true;
  $scope.tileOpen = false;
  $rootScope.awesome = true;
  //$log.debug($scope.awesome);
  //var myClassTest = true;
  
  function switchOpen(index){
    if($scope.tileOpen){
      $scope.tileOpen = false;
      var myEl = angular.element( document.querySelector( '#active'+index ) );
      myEl.removeClass('top-tile');
    } else {
      $scope.tileOpen = true;
    }
  }
  
    $scope.addClass = function(index) {
      //this.push('red');
      
      var myEl = angular.element( document.querySelector( '#active'+index ) );
      if(!$scope.tileOpen){
        myEl.addClass('top-tile');
        myEl.addClass('selected'); 
        myEl.addClass('md-whiteframe-z2'); 
        
        
        //var the_string = index;
        //$scope.testtt[the_string] = true;
        $log.debug(index);
        $scope.tileOpen = true;
        //$log.debug($scope.test[index]);
      }
    };
  
    $scope.closeTile = function(index) {
      //this.push('red');
      $log.debug('CLOSE');
      var myEl = angular.element( document.querySelector( '#active'+index ) );
      myEl.removeClass('selected'); 
      //$scope.tileOpen = false;
      $timeout(function() { switchOpen(index);}, 1000);
      
      
//      var the_string = index;
      //$scope.testtt[the_string] = true;
//      $log.debug(index);
      //$log.debug($scope.test[index]);
    };
  
    $scope.projectHeadings = ['Role','Overview','Process','Result'];
    $scope.projects = [{ 
        id: 'Scrollbinder',
        title: 'Scrollbinder',
        subtitle: 'DnD Character Planner'
      },{
        id: 'UFOria',
        title: 'UFOria',
        subtitle: 'Immersive 3D game world'
      },{
        id: 'Sandwich',
        title: 'The Sandwich',
        subtitle: '3D Animated Short'
      },{
        id: 'DiceRoller',
        title: 'DiceRoller',
        subtitle: 'Mobile ThreeJS WebApp'
      },{
        id: 'Harvey',
        title: 'Harvey',
        subtitle: 'Green Screen Video'
      },{
        id: 'Kinect',
        title: 'Kinect Remote',
        subtitle: 'Gesture Controls'
      }
//        id: 'QWERT',
//        title: "QWERT's QUEST",
//        subtitle: '3D Unity Game'
//      }
                      ];
      
      $scope.websites = [{         
        id: 'BCBT',
        title: 'BC Building Trades',
        subtitle: 'Building and Trades Union'
      },{
        id: 'ESEBC',
        title: 'esebc.ca',
        subtitle: 'Epilepy Education'
      },{
        id: 'SCC',
        title: 'Surrey City Center',
        subtitle: 'Realestate News'
      }];
  
//    function buildGridModel(tileTmpl){
//      
//      
//      var it, results = [ ];
//      for (var j=0; j<7; j++) {
//        it = angular.extend({},tileTmpl);
//        it.icon  = it.icon + (j+1);
//        //it.title = it.title + (j+1);
//        it.title = $scope.projects[j].title;
//        it.span  = { row : 1, col : 1 };
//        it.index = j;
//        it.info = $scope.projects[j].info;
//        it.role = $scope.projects[j].role;
//        it.subtitle = $scope.projects[j].subtitle;
//        it.overview = $scope.projects[j].overview;
//        it.summary = $scope.projects[j].summary;
//        it.process = $scope.projects[j].process;
//        it.result = $scope.projects[j].result;
//        switch(j+1) {
//          case 1:
//            it.background = 'row2';
//            it.span.row = it.span.col = 2;
//            break;
//          case 2: it.background = 'row1';
//            it.span.col = 2;
//            break;
//          case 3: it.background = 'row1';      break;
//          case 4:
//            it.background = 'row1';
//            it.span.col = 1;
//            break;
//          case 5:
//            it.background = 'row1';
//            break;
//          case 6: it.background = 'row1';          break;
//          case 7: it.background = 'row1';it.span.col = 2;break;
//        }
//        results.push(it);
//      }
//      return results;
//    }
  
//    this.tiles = buildGridModel({
//      icon : 'avatar:svg-',
//      title: 'Svg-',
//      background: ''
//    });
//  })
//  .config( function( $mdIconProvider ){
//    $mdIconProvider.iconSet('avatar', 'images/avatars.svg', 128);
  });