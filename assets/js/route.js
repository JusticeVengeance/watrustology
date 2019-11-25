       
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
