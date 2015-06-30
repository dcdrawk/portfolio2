'use strict';

angular
  .module('yoApp')
  .controller('gridListDemoCtrl', function($scope, $log, $rootScope, $timeout) {
    $rootScope.isProject = false;
    $rootScope.place = 'Projects';
    $rootScope.changeTitle('none');
  
    $timeout(function() {
       $rootScope.opened = false;
    }, 1000);
    var test = document.getElementById("about-content");
  
    $timeout(function() {
      test.scrollTop = $rootScope.aboutTop;
    }, 0);
  
    //the headings for each project section
    $scope.projectHeadings = ['Role','Overview','Process','Result'];
    
    //array of project objects
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
      //array of website objects
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
  });