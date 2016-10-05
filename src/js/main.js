var app = angular.module("carouselDemo", ['bytesauceCarousel']);
app.controller("appCtrl", function($scope) {
    $scope.items = ["item 1", "item 2", "item 3"];
});

