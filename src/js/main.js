var app = angular.module("carouselDemo", ['bytesauceCarousel']);
app.controller("appCtrl", function($scope) {
    $scope.items = [
        {
            title: 'First Block',
            images: [{title:'image1 title', url: 'http://lorempixel.com/400/200'}, {title:'image2 title', url: 'http://lorempixel.com/400/200'}, {title:'image3 title', url: 'http://lorempixel.com/400/200'}]
        },
        {
            title: 'Second Block',
            images: [{title:'image20 title', url: 'http://lorempixel.com/400/200'}, {title:'image23 title', url: 'http://lorempixel.com/400/200'}]
        }
        ,
        {
            title: 'Third Block',
            images: [{title:'image7 title', url: 'http://lorempixel.com/400/200'}]
        }
    ];
});

