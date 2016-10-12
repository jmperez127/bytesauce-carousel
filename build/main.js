var app = angular.module("carouselDemo", ['bytesauceCarousel']);
app.controller("appCtrl", function ($scope) {
  $scope.items = [
    {
      title: 'First Block',
      images: [
        {title: 'image1 title', url: 'http://lorempixel.com/600/400/food'},
        {title: 'image2 title', url: 'http://lorempixel.com/600/400/sports'},
        {title: 'image3 title', url: 'http://lorempixel.com/600/400/abstract'},
        {title: 'image3 title', url: 'http://lorempixel.com/600/400/nightlife'}
      ]
    }, {
      title: 'Second Block',
      images: [
        {title: 'image1 title', url: 'http://lorempixel.com/600/400/fashion'},
        {title: 'image3 title', url: 'http://lorempixel.com/600/400/nightlife'},
        {title: 'image2 title', url: 'http://lorempixel.com/600/400/sports'}
      ]
    },
    {
      title: 'Third Block',
      images: [
        {title: 'image5 title', url: 'http://lorempixel.com/600/400/fashion'},
        {title: 'image6 title', url: 'http://lorempixel.com/600/400/nature'}
      ]
    },
    {
      title: "Last block",
      images: [
        {title: 'image7 title', url: 'http://lorempixel.com/600/400/nightlife'}
      ]
    }
  ];
});

