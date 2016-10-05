var app = angular.module("carouselDemo", ['bytesauceCarousel']);
app.controller("appCtrl", function($scope) {
    $scope.items = ["test 1", "test 2"];
});

