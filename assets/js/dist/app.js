       
var ology = angular.module('ology', ['ui.router','angulartics','angulartics.google.analytics']);

ology.config(['$stateProvider', '$urlRouterProvider', '$analyticsProvider', function ($stateProvider, $urlRouterProvider, $analyticsProvider) {
    $analyticsProvider.virtualPageviews(false);
    $urlRouterProvider.otherwise('/watrustology');
//  ROUTES AND NESTED VIEWS
    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'navigation': { templateUrl: 'shared/header/navigation.html' },

                'footer': { templateUrl: 'shared/footer/footer-view.html' }

            }
        })
        .state('root.home', {
            url: '/watrustology',
            views: {
                'content@': { templateUrl: 'components/home/home-view.html' },

                'carousel@root.home': { templateUrl: 'shared/carousel/carousel-view.html' },

                'tagboard@root.home': { templateUrl: 'shared/tagboard/tagboard-view.html' }
            }
        })
        .state('root.our-story', {
            url: '/our_story',
            views: {
                'content@': { templateUrl: 'components/our_story/our-story-view.html' }
            }
        })
        .state('root.community', {
            url: '/community',
            views: {
                'content@': { templateUrl: 'components/community/community-view.html' },

                'carousel@root.community': { templateUrl: 'shared/carousel/carousel-view.html' },

                'tagboard@root.community': { templateUrl: 'shared/tagboard/tagboard-view.html' }
            }
        })
        .state('root.pillars', {
            url: '/pillars',
            views: {
                'content@': { templateUrl: 'components/pillars/pillars-view.html'}
            }
        })
        .state('root.news', {
            url: '/news',
            views: {
                'content@': { templateUrl: 'components/news/news-view.html'}
            }
        });

}]); // closes $routerApp.config()

//BEGIN: SECTION WHICH DESIGNATES THE META TAG INJECTIONS FOR THE APPLICATION
ology.factory('Page', function(){
  var title = 'default';
  var description = 'default';
  var keywords = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },
    description: function() {return description; },
    setDescription: function(newDescription) { description = newDescription },
    keywords: function() {return keywords; },
    setKeywords: function(newKeywords) { keywords = newKeywords }
  };
});
//END: SECTION WHICH DESIGNATES THE META TAG INJECTIONS FOR THE APPLICATION
//BEGIN: ANALYTIC TRACKING FOR ANGULAR APPLICAITONS
ology.controller('MainCtrl', ['$scope', 'Page', '$analytics', function($scope, Page, $analytics) {
  $scope.Page = Page;
  $analytics.pageTrack('/watrustology');
  $analytics.pageTrack('/pillars');
}]);
//BEGIN: ANALYTIC TRACKING FOR ANGULAR APPLICAITONS

// ology.factory('Page', function(){
//   var title = 'default';
//   return {
//     title: function() { return title; },
//     setTitle: function(newTitle) { title = newTitle; }
//   };
// });

// function MainCtrl($scope, Page) {
//   $scope.Page = Page;
// }
// function Test1Ctrl($scope, Page) {
//   Page.setTitle('title1');
// }
// function Test2Ctrl($scope, Page) {
//   Page.setTitle('title2');
// }
ology.directive('eventCards', function() {
	return {
		templateUrl: "shared/event-cards/event-cards.html"
	};
});

ology.directive('navIcons', function() {
	return {
		templateUrl: "shared/header/navigation.html"
	};
}).directive('close', function() {
	return {
		templateUrl: "shared/svg/close.svg"
	};
}).directive('wtbLogo', function() {
	return {
		templateUrl: "shared/svg/wtb-logo.svg"
	};
});


ology.directive('navTiles', function() {
	return {
		templateUrl: "shared/nav-tiles/nav-tiles.html"
	};
});

ology.directive('play', function() {
	return {
		templateUrl: "shared/svg/play-btn.svg"
	};
}).directive('wtoTagline', function() {
	return {
		templateUrl: "shared/svg/wto-logo-tagline.svg"
	};
}).directive('socialIcons', function() {
	return {
		templateUrl: "shared/social-icons/social-icons.html"
	};
}).directive('facebook', function() {
	return {
		templateUrl: "shared/svg/facebook.svg"
	};
}).directive('twitter', function() {
	return {
		templateUrl: "shared/svg/twitter.svg"
	};
}).directive('instagram', function() {
	return {
		templateUrl: "shared/svg/instagram.svg"
	};
}).directive('linkedin', function() {
	return {
		templateUrl: "shared/svg/linkedin.svg"
	};
}).directive('youtube', function() {
	return {
		templateUrl: "shared/svg/youtube.svg"
	};
}).directive('wisdom', function() {
	return {
		templateUrl: "shared/svg/wisdom.svg"
	};
}).directive('vision', function() {
	return {
		templateUrl: "shared/svg/vision.svg"
	};
}).directive('passion', function() {
	return {
		templateUrl: "shared/svg/passion.svg"
	};
}).directive('strength', function() {
	return {
		templateUrl: "shared/svg/strength.svg"
	};
}).directive('wtoLogo', function() {
	return {
		templateUrl: "shared/svg/watrustology-logo.svg"
	};
}).directive('sba', function() {
	return {
		templateUrl: "shared/svg/sba.svg"
	};
}).directive('fdic', function() {
	return {
		templateUrl: "shared/svg/fdic.svg"
	};
}).directive('ehl', function() {
	return {
		templateUrl: "shared/svg/ehl.svg"
	};
}).directive('bugOnly', function() {
	return {
		templateUrl: "shared/svg/bug-only.svg"
	};
}).directive('play', function() {
	return {
		templateUrl: "shared/svg/play.svg"
	};
}).directive('pause', function() {
	return {
		templateUrl: "shared/svg/pause.svg"
	};
}).directive('forward', function() {
	return {
		templateUrl: "shared/svg/forward.svg"
	};
}).directive('back', function() {
	return {
		templateUrl: "shared/svg/back.svg"
	};
}).directive('timelineBug', function() {
	return {
		templateUrl: "shared/svg/timeline-bug.svg"
	};
}).directive('quoteRing', function() {
	return {
		templateUrl: "shared/svg/quote-ring.svg"
	};
})
.directive('articleLinkout', function() {
	return {
		templateUrl: "shared/svg/article-linkout.svg"
	};
});

ology.directive('verticalPillars', function() {
	return {
		templateUrl: "shared/vertical-pillars/vertical-pillars.html"
	};
});
//work on creating a working icons controller for {{}} injection

// function iconsCtrl($scope) {
//   $scope.HTML = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.cls-1{fill:#231f20;}</style></defs><title>Passion - Line</title><path class="cls-1" d="M100,200A100,100,0,1,1,200,100,100,100,0,0,1,100,200ZM100,6.6A93.4,93.4,0,1,0,193.4,100h0A93.5,93.5,0,0,0,100,6.6Z"/><path class="cls-1" d="M97.3,47.8c-3.9-2.7-3.6.1-3,2,2.6,9.2-2.1,23.8-18.2,40.5-28,29.3-3.3,52.4,20.4,62.4,4,1.3,4.1-.4,3.8-1.4-4.2-18.3,7.1-27.6,11.8-35.6C134.8,76.8,109.3,55.3,97.3,47.8Zm5.9,69.2c-4.4,6-10.5,14.4-10.5,26.8-12.3-6.5-20.4-15.1-22.2-23.8s1.8-16.3,10.3-25.1c12-12.5,19-25.2,20.4-36.1,20.9,18.1,12.6,40.9,5.1,53.7A41,41,0,0,1,103.2,117Z"/><path class="cls-1" d="M131.7,101.5c-4.9-6.7-6.4-.7-7.2,1.6a75.7,75.7,0,0,1-6,12.7c-4.3,7.3-14.1,15.7-12.5,31,1.5,6.6,3,4.6,6.2,3.4C132.9,138.5,143,116.2,131.7,101.5Zm-2.4,18.1c-1.7,8.3-8.1,16.7-17,22.7.4-7.3,4.2-12.5,7.9-17.5a68.2,68.2,0,0,0,3.9-5.7,87.6,87.6,0,0,0,4.7-9.2,17.9,17.9,0,0,1,.6,9.7Z"/></svg>';
// }



ology.controller('communityCtrl', ['$scope', 'Page', function ($scope, Page) {
  $scope.tagboardHeading = '#Watrustology';
  $scope.sponsorshipBtn = 'Community Sponsorship Request';
  $scope.policyBtn = 'Social Media Policy';
  Page.setTitle('Community - Washington Trust Bank');
  Page.setDescription('Watrustology is the essence of who we are. It’s our collective wisdom, vision, passion and strength provided to our customers for more than a century. Find out more about Watrustology.');
  Page.setKeywords('Watrustology, Wisdom, Vision, Passion, Strength');
}]);



ology.controller('homeCtrl', ['$scope', 'Page', function ($scope, Page) {
  $scope.tagboardBtn = 'WTB in the Community';
  $scope.tagboardHeading = 'Watrustology in Action';
  $scope.tagboardHashtag = '#Watrustology';
  Page.setTitle('Watrustology - Washington Trust Bank');
  Page.setDescription('Watrustology is the essence of who we are. It’s our collective wisdom, vision, passion and strength provided to our customers for more than a century. Find out more about Watrustology.');
  Page.setKeywords('Watrustology, Wisdom, Vision, Passion, Strength');
}]);

ology.controller('newsCtrl', function($scope) {

	$scope.articles = [
		{title:'some stuff happened', body:'this is a random and unique news article and it isnt real. Just long so that the full width shows. this is a random and unique news article and it isnt real. Just long so that the full width shows.', date: 'February 2, 2017', source:'sum yung guy'},
		{title:'some stuff happened', body:'this is what happend', date: 'February 2, 2017', source:'sum yung guy'},
		{title:'some stuff happened', body:'this is what happend', date: 'February 2, 2017', source:'sum yung guy'},
		{title:'some stuff happened', body:'this is what happend', date: 'February 2, 2017', source:'sum yung guy'},
		{title:'some stuff happened', body:'this is what happend', date: 'February 2, 2017', source:'sum yung guy'},
		{title:'some stuff happened', body:'this is what happend', date: 'February 2, 2017', source:'sum yung guy'}
	];
});





ology.controller('pillarsCtrl', ['$scope', 'Page', function ($scope, Page) {
	Page.setTitle('Watrustology Pillars - Washington Trust Bank');
	Page.setDescription('Wisdom. Vision. Passion. Strength. Find out about the four pillars of Watrustology and how they shape everything we do.');
	Page.setKeywords('Watrustology, Wisdom, Vision, Passion, Strength');
}]);