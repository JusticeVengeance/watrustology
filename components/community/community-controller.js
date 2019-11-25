ology.controller('communityCtrl', ['$scope', 'Page', function ($scope, Page) {
  $scope.tagboardHeading = '#Watrustology';
  $scope.sponsorshipBtn = 'Community Sponsorship Request';
  $scope.policyBtn = 'Social Media Policy';
  Page.setTitle('Community - Washington Trust Bank');
  Page.setDescription('Watrustology is the essence of who we are. It’s our collective wisdom, vision, passion and strength provided to our customers for more than a century. Find out more about Watrustology.');
  Page.setKeywords('Watrustology, Wisdom, Vision, Passion, Strength');
}]);