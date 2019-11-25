//THIS IS MY CONTROLLERS JS

angular.module('scopeExample', [])
.controller('WelcomeController', ['$scope', function($scope) {
  $scope.username = 'World';

  $scope.sayThanks = function() {
    $scope.thanks = 'Thanks, ' + $scope.username + '!';
  };
}]);