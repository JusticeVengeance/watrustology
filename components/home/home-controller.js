ology.controller('homeCtrl', ['$scope', 'Page', function ($scope, Page) {
  $scope.tagboardBtn = 'WTB in the Community';
  $scope.tagboardHeading = 'Watrustology in Action';
  $scope.tagboardHashtag = '#Watrustology';
  Page.setTitle('Watrustology - Washington Trust Bank');
  Page.setDescription('Watrustology is the essence of who we are. It’s our collective wisdom, vision, passion and strength provided to our customers for more than a century. Find out more about Watrustology.');
  Page.setKeywords('Watrustology, Wisdom, Vision, Passion, Strength');
}]);