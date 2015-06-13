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
  
  
  console.log('ABOUT TOP = ' + $rootScope.aboutTop);
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
  
    function buildGridModel(tileTmpl){
      $scope.projects = [{ 
        id: 'Scrollbinder',
        title: 'Scrollbinder',
        subtitle: 'DnD Character Planner',
        software: 'Angular, HTML, CSS, JavaScript',
        role: 'Director, Editor, Concept & Storyboarding',
        overview: 'This individual assignment challenged my abilities as a media artist. Using the song Harvey the Wonder Hamster by Weird Al Yankovic as the base concept, I brainstormed, storyboarded, and edited until I was happy with the final outcome.',
        process: 'This assignment began with brainstorming and storyboarding the rough concept. This concept was submitted for feedback, which I included in the final video. I had to book rooms, rent equiment & instruments, and edit the film.',
        result: 'When it was finished, Harvey The Wonder Hamster was shown to the class and received a mark of 23/25.'
      },{
        id: 'DiceRoller',
        title: 'DiceRoller',
        subtitle: 'Mobile ThreeJS WebApp',
        role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis lorem, feugiat eget hendrerit ac, congue in magna. Praesent et pharetra elit',
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis lorem, feugiat eget hendrerit ac, congue in magna. Praesent et pharetra elit. ',
        process: 'Vestibulum ac justo at ipsum ultrices tempus eu in lectus. In ut justo quis enim elementum faucibus. Sed at ligula nisl. Duis quam mauris, porttitor vitae commodo sed, commodo eget est. Nullam at ornare orci. Nam id elit ut velit porttitor aliquam sit amet et turpis. Pellentesque eleifend at mi ac convallis.',
        result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada arcu in augue commodo, eget elementum magna imperdiet. Mauris porta ante nec sapien volutpat sodales ut sed felis. Aenean tempus risus est, ut cursus est lacinia fermentum. Duis varius a orci in ullamcorper.'
      },{
        id: 'UFOria',
        title: 'UFOria',
        subtitle: 'Immersive 3D game world',
        role: 'Game Designer, Programmer, 3D Modelling',
        overview: 'Using the 3D development platform Unity, my group set out to create an interactive immersive experience. Our unique world let players explore a UFO abduction using Wii motion controls.',
        process: 'After brainstorming our idea, we began by sketching out our framework. Once we were satisfied, we began modelling and gathering assets for our project. As we were constructing our game world, we did multiple user tests to make sure the experience was fun and bug-free.',
        result: 'Our project was featured in a class showcase at the SFU Surrey Campus and received a mark of 24/25.'
      },{
        id: 'Harvey',
        title: 'Harvey the Hamster',
        subtitle: 'Green Screen Video',
        role: 'Director, Editor, Concept & Storyboarding',
        overview: 'This individual assignment challenged my abilities as a media artist. Using the song Harvey the Wonder Hamster by Weird Al Yankovic as the base concept, I brainstormed, storyboarded, and edited until I was happy with the final outcome.',
        process: 'This assignment began with brainstorming and storyboarding the rough concept. This concept was submitted for feedback, which I included in the final video. I had to book rooms, rent equiment & instruments, and edit the film.',
        result: 'When it was finished, Harvey The Wonder Hamster was shown to the class and received a mark of 23/25.'
      },{
        id: 'Kinect',
        title: 'Kinect Remote',
        subtitle: 'Gesture Controls',
        role: 'Programmer, Interface Designer',
        overview: 'For this project, we were put into teams of two. Our goal was to take an existing electronic device and minimize it to the extreme. We chose a video remote, and we decided to replace the complex controller with simple hand gestures.',
        process: 'We began by drawing out our ideas and then picking the ones we felt most confident with. We thought about using colour tracking, but we decided that the Kinect was the best way to achieve our desired functionality.',
        result: 'The video remote was featured in a class showcase where students and faculty could try it themselves. Our project received an A grade.'
      },{
        id: 'QWERT',
        title: "QWERT's QUEST",
        subtitle: '3D Unity Game',
        role: 'Concept Design, Programming, 3D-Modeller',
        overview: "This was a self-driven effort. During the reading break, I had some free time which I used to design a simple game to explore programming and game logic with Unity. Based on the classic PC game Chip's Challenge, I wanted to replicate simple actions and functions so I could become more proficient with the Unity editor.",
        process: "I started by studying Chip's challenge, and I mapped out the pseudo-code related to certain game functions like picking up a key and unlocking a door. Once I understood, I used my programming, modelling, and research skills in order to bring my vision to life.",
        result: 'To guide the design process, I used test players throughout the development. All of the test players remarked on the enjoyable puzzles and retro art style.'
      },{
        id: 'Sandwich',
        title: 'The Sandwich',
        subtitle: '3D Animated Short',
        role: 'Modeling, Character Rigging, Lighting, Texturing, Animating',
        overview: 'The Sandwich is an animated short which describes the unfortunate fate of a few fresh ingredients. For this project, I was tasked with lighting, rigging, placing and animating objects. I also modelled and textured several assets, including the chef himself!',
        process: 'Our animated short began with a series of simple sketches as we finalized our narrative. After, we collaborated together to model, texture, light, and animate our scene. After rendering each frame, we put on the final touches before presenting it to the class.',
        result: 'The Sandwich was screened in front of the class and received an A.'
      }];
      var it, results = [ ];
      for (var j=0; j<7; j++) {
        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        //it.title = it.title + (j+1);
        it.title = $scope.projects[j].title;
        it.span  = { row : 1, col : 1 };
        it.index = j;
        it.info = $scope.projects[j].info;
        it.role = $scope.projects[j].role;
        it.subtitle = $scope.projects[j].subtitle;
        it.overview = $scope.projects[j].overview;
        it.summary = $scope.projects[j].summary;
        it.process = $scope.projects[j].process;
        it.result = $scope.projects[j].result;
        switch(j+1) {
          case 1:
            it.background = 'row2';
            it.span.row = it.span.col = 2;
            break;
          case 2: it.background = 'row1';
            it.span.col = 2;
            break;
          case 3: it.background = 'row1';      break;
          case 4:
            it.background = 'row1';
            it.span.col = 1;
            break;
          case 5:
            it.background = 'row1';
            break;
          case 6: it.background = 'row1';          break;
          case 7: it.background = 'row1';it.span.col = 2;break;
        }
        results.push(it);
      }
      return results;
    }
  
    this.tiles = buildGridModel({
      icon : 'avatar:svg-',
      title: 'Svg-',
      background: ''
    });
  })
  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet('avatar', 'images/avatars.svg', 128);
  });