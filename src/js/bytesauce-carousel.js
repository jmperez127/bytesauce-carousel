//Requirements:
//
//    - build a carousel.
//- by default display 4 elements.
//- navigation is made with next and previous buttons.
//- Next button should be disabled, if user is at the very end of the carousel.
//- Previous button should be disabled, if user is at the very beginning of carousel.
//- Clicking on next/previous buttons shows next/prev 4 carousel images accordingly.
//- The data source of carousel use a variable with a data structure similar to this JSON:
//
//    [
//        {
//            title: 'First Block',
//            images: [{title:'image1 title', url: 'url'}, {title:'image2 title', url: 'url'}, {title:'image3 title', url: 'url'}]
//        },
//        {
//            title: 'Second Block',
//            images: [{title:'image20 title', url: 'url'}, {title:'image23 title', url: 'url'}]
//        }
//        ,
//        {
//            title: 'Third Block',
//            images: [{title:'image7 title', url: 'url'}]
//        }
//    ]
//
//Note: Display random images using lorempixel.com
//
//Please use AngularJS 1.5 and try to avoid Jquery.


angular.module('bytesauceCarousel', [])

    .constant('VERSION', '0.1.0')

    .value('defaults', {
        items: ['']
    })

    .factory('factoryName', function () {

    })

    .directive('bytesauceCarousel', function () {
        return {
            restrict: 'E',
            template: "<h1>Hello</h1>",
            compile : function(element, attributes){
                element.css("border", "1px solid #cccccc");

                var linkFunction = function($scope, element, attributes) {
                    console.log($scope.items, "ITEMS");
                    element.html("Student: <b>" + $scope.items[0] + "</b><br/>");
                    element.css("background-color", "#ff00ff");
                };
                return linkFunction;

            }
        };
    })
;

