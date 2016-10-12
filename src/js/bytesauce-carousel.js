angular.module('bytesauceCarousel', ['ngAnimate'])

  .constant('VERSION', '0.1.0')

  .value('defaults', {
    maxImages: 4
  })

  .factory('bytesauceCarouselFactory', function () {

  })

  .directive('bytesauceCarousel', ["defaults", function (defaults) {
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: "templates/carousel.html",
      link: function (scope, element, attributes) {

        function clampImages(item) {
          item.images = item.images.length > defaults.maxImages ? item.images.slice(0, defaults.maxImages) : item.images;
          item.active = false;
          return item;
        }

        scope.items = scope.items.map(clampImages);

        scope.activeIndex = 0;
        if (scope.items.length > 0) {
          scope.items[0].active = true;
        }

        scope.isActive = function (index) {
          if (scope.items[index] === undefined) return false;
          return scope.items[index].active === true;
        };

        scope.next = function () {
          scope.direction = "right";
          scope.items[scope.activeIndex].active = false;
          scope.activeIndex = scope.activeIndex + 1 == defaults.maxImages ? 0 : scope.activeIndex + 1;
          scope.items[scope.activeIndex].active = true;
        };

        scope.prev = function () {
          scope.direction = "left";
          scope.items[scope.activeIndex].active = false;
          scope.activeIndex = scope.activeIndex - 1 == -1 ? defaults.maxImages - 1 : scope.activeIndex - 1;
          scope.items[scope.activeIndex].active = true;
        };
      }
    };
  }])
;

