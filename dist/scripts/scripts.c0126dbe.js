"use strict";angular.module("yoApp",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","youtube-embed","oblador.lazytube","angularRipple"]).config(["$mdThemingProvider",function(a){a.theme("default").primaryPalette("blue",{"default":"800","hue-1":"100","hue-2":"200","hue-3":"A100"}).accentPalette("teal",{"default":"400"}).warnPalette("red",{"default":"600"})}]).config(["$mdIconProvider",function(a){a.icon("$default:menu","../../assets/svg/menu.svg",24).icon("$default:share","../../assets/svg/share.svg",24).defaultIconSet("../../assets/svg/avatars.svg",24)}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"AboutCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/scrollbinder",{templateUrl:"views/projects/scrollbinder.html",controller:"ProjectCtrl"}).when("/Scrollbinder",{templateUrl:"views/projects/scrollbinder.html",controller:"scrollBinderCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location","$anchorScroll","$routeParams","$log",function(a,b,c,d,e){a.$on("$routeChangeStart",function(){if(e.debug(b.path()),"/"!==b.path()&&document.getElementById("about-content")){var c=document.getElementById("about-content");c.scrollTop&&(a.aboutTop=c.scrollTop),console.log(a.aboutTop)}}),a.$on("$routeChangeSuccess",function(){e.debug("SUCCESS!")})}]).run(["$rootScope","$location",function(a,b){var c=[];a.$on("$routeChangeSuccess",function(){c.push(b.$$path)}),a.back=function(){var a=c.length>1?c.splice(-2)[0]:"/";b.path(a)}}]),angular.module("yoApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yoApp").controller("AppCtrl",["$scope","$rootScope","$timeout","$mdSidenav","$mdUtil","$log","$location",function(a,b,c,d,e,f,g){function h(a){var b=e.debounce(function(){d(a).toggle().then(function(){f.debug("toggle "+a+" is done")})},100);return b}a.awesome=!0,a.toggleLeft=h("left"),a.toggleRight=h("right"),a.go=function(a){g.path(a),d("left").close()},b.changeTitle=function(a){f.debug(a),"none"===a?b.showProjTitle=!1:b.showProjTitle=!0}}]).controller("LeftCtrl",["$scope","$timeout","$mdSidenav","$log",function(a,b,c,d){a.close=function(){c("left").close().then(function(){d.debug("close LEFT is done")})}}]).controller("RightCtrl",["$scope","$timeout","$mdSidenav","$log",function(a,b,c,d){a.close=function(){c("right").close().then(function(){d.debug("close RIGHT is done")})}}]),angular.module("yoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yoApp").controller("ProjectCtrl",["$scope","$rootScope",function(a,b){a.awesomeThings=[],b.isProject=!0}]).controller("scrollBinderCtrl",["$scope","$rootScope","$window","$log","$timeout",function(a,b,c,d,e){b.isProject=!0,b.place="Projects",b.projectTitle=" - Scrollbinder",b.projectName="Scrollbinder",b.showProjTitle=!0,a.opened=!1,a.opening=!0,e(function(){a.opening=!1,a.opened=!0},1),a.testFalse=function(){b.isProject=!1,a.test=!1}}]),angular.module("yoApp").controller("gridListDemoCtrl",["$scope","$log","$rootScope","$timeout","$anchorScroll","$location",function(a,b,c,d,e,f){function g(b){if(a.tileOpen){a.tileOpen=!1;var c=angular.element(document.querySelector("#active"+b));c.removeClass("top-tile")}else a.tileOpen=!0}function h(b){a.projects=[{id:"Scrollbinder",title:"Scrollbinder",subtitle:"DnD Character Planner",software:"Angular, HTML, CSS, JavaScript",role:"Director, Editor, Concept & Storyboarding",overview:"This individual assignment challenged my abilities as a media artist. Using the song Harvey the Wonder Hamster by Weird Al Yankovic as the base concept, I brainstormed, storyboarded, and edited until I was happy with the final outcome.",process:"This assignment began with brainstorming and storyboarding the rough concept. This concept was submitted for feedback, which I included in the final video. I had to book rooms, rent equiment & instruments, and edit the film.",result:"When it was finished, Harvey The Wonder Hamster was shown to the class and received a mark of 23/25."},{id:"DiceRoller",title:"DiceRoller",subtitle:"Mobile ThreeJS WebApp",role:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis lorem, feugiat eget hendrerit ac, congue in magna. Praesent et pharetra elit",overview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis lorem, feugiat eget hendrerit ac, congue in magna. Praesent et pharetra elit. ",process:"Vestibulum ac justo at ipsum ultrices tempus eu in lectus. In ut justo quis enim elementum faucibus. Sed at ligula nisl. Duis quam mauris, porttitor vitae commodo sed, commodo eget est. Nullam at ornare orci. Nam id elit ut velit porttitor aliquam sit amet et turpis. Pellentesque eleifend at mi ac convallis.",result:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada arcu in augue commodo, eget elementum magna imperdiet. Mauris porta ante nec sapien volutpat sodales ut sed felis. Aenean tempus risus est, ut cursus est lacinia fermentum. Duis varius a orci in ullamcorper."},{id:"UFOria",title:"UFOria",subtitle:"Immersive 3D game world",role:"Game Designer, Programmer, 3D Modelling",overview:"Using the 3D development platform Unity, my group set out to create an interactive immersive experience. Our unique world let players explore a UFO abduction using Wii motion controls.",process:"After brainstorming our idea, we began by sketching out our framework. Once we were satisfied, we began modelling and gathering assets for our project. As we were constructing our game world, we did multiple user tests to make sure the experience was fun and bug-free.",result:"Our project was featured in a class showcase at the SFU Surrey Campus and received a mark of 24/25."},{id:"Harvey",title:"Harvey the Hamster",subtitle:"Green Screen Video",role:"Director, Editor, Concept & Storyboarding",overview:"This individual assignment challenged my abilities as a media artist. Using the song Harvey the Wonder Hamster by Weird Al Yankovic as the base concept, I brainstormed, storyboarded, and edited until I was happy with the final outcome.",process:"This assignment began with brainstorming and storyboarding the rough concept. This concept was submitted for feedback, which I included in the final video. I had to book rooms, rent equiment & instruments, and edit the film.",result:"When it was finished, Harvey The Wonder Hamster was shown to the class and received a mark of 23/25."},{id:"Kinect",title:"Kinect Remote",subtitle:"Gesture Controls",role:"Programmer, Interface Designer",overview:"For this project, we were put into teams of two. Our goal was to take an existing electronic device and minimize it to the extreme. We chose a video remote, and we decided to replace the complex controller with simple hand gestures.",process:"We began by drawing out our ideas and then picking the ones we felt most confident with. We thought about using colour tracking, but we decided that the Kinect was the best way to achieve our desired functionality.",result:"The video remote was featured in a class showcase where students and faculty could try it themselves. Our project received an A grade."},{id:"QWERT",title:"QWERT's QUEST",subtitle:"3D Unity Game",role:"Concept Design, Programming, 3D-Modeller",overview:"This was a self-driven effort. During the reading break, I had some free time which I used to design a simple game to explore programming and game logic with Unity. Based on the classic PC game Chip's Challenge, I wanted to replicate simple actions and functions so I could become more proficient with the Unity editor.",process:"I started by studying Chip's challenge, and I mapped out the pseudo-code related to certain game functions like picking up a key and unlocking a door. Once I understood, I used my programming, modelling, and research skills in order to bring my vision to life.",result:"To guide the design process, I used test players throughout the development. All of the test players remarked on the enjoyable puzzles and retro art style."},{id:"Sandwich",title:"The Sandwich",subtitle:"3D Animated Short",role:"Modeling, Character Rigging, Lighting, Texturing, Animating",overview:"The Sandwich is an animated short which describes the unfortunate fate of a few fresh ingredients. For this project, I was tasked with lighting, rigging, placing and animating objects. I also modelled and textured several assets, including the chef himself!",process:"Our animated short began with a series of simple sketches as we finalized our narrative. After, we collaborated together to model, texture, light, and animate our scene. After rendering each frame, we put on the final touches before presenting it to the class.",result:"The Sandwich was screened in front of the class and received an A."}];for(var c,d=[],e=0;7>e;e++){switch(c=angular.extend({},b),c.icon=c.icon+(e+1),c.title=a.projects[e].title,c.span={row:1,col:1},c.index=e,c.info=a.projects[e].info,c.role=a.projects[e].role,c.subtitle=a.projects[e].subtitle,c.overview=a.projects[e].overview,c.summary=a.projects[e].summary,c.process=a.projects[e].process,c.result=a.projects[e].result,e+1){case 1:c.background="row2",c.span.row=c.span.col=2;break;case 2:c.background="row1",c.span.col=2;break;case 3:c.background="row1";break;case 4:c.background="row1",c.span.col=1;break;case 5:c.background="row1";break;case 6:c.background="row1";break;case 7:c.background="row1",c.span.col=2}d.push(c)}return d}c.isProject=!1,c.place="Projects",c.changeTitle("none"),c.WUT=function(){e(),f()},c.isTransition=!0;var i=document.getElementById("about-content");d(function(){i.scrollTop=c.aboutTop},0),console.log("ABOUT TOP = "+c.aboutTop),a.test=[],a.awesome=!0,a.tileOpen=!1,c.awesome=!0,a.addClass=function(c){var d=angular.element(document.querySelector("#active"+c));a.tileOpen||(d.addClass("top-tile"),d.addClass("selected"),d.addClass("md-whiteframe-z2"),b.debug(c),a.tileOpen=!0)},a.closeTile=function(a){b.debug("CLOSE");var c=angular.element(document.querySelector("#active"+a));c.removeClass("selected"),d(function(){g(a)},1e3)},a.projectHeadings=["Role","Overview","Process","Result"],this.tiles=h({icon:"avatar:svg-",title:"Svg-",background:""})}]).config(["$mdIconProvider",function(a){a.iconSet("avatar","images/avatars.svg",128)}]);