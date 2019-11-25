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