(function() {
  'use strict';

  angular
    .module('app')
    .directive('imageSlider', imageSlider);

    imageSlider.$inject = ["panelService", "assetsCdnPath", "assetsVersion"];

  function imageSlider(panelService, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/image-slider/image-slider.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.cdnPath = assetsCdnPath + assetsVersion;
      scope.disableAutoScrollBasedOnMode = function() {
        if(panelService.getMode() == "EDITOR") {
          scope.enableAutoSlide = false;
          scope.data.enableAutoSlide = false;
        }
      }

      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }
      scope.editing = scope.data.editing;
      scope.carouselIndex = 0;
      scope.enableAutoSlide = scope.data.enableAutoSlide;

      scope.disableAutoScrollBasedOnMode();

      scope.prevSlide = prevSlide; 
      scope.nextSlide = nextSlide; 

      function prevSlide(){
        scope.carouselIndex = scope.carouselIndex-1;
        if(scope.carouselIndex < 0){
          scope.carouselIndex = scope.data.data.length-1;
        }
      };

      function nextSlide(){
        scope.carouselIndex = scope.carouselIndex + 1;
        if(scope.carouselIndex >= scope.data.data.length){
          scope.carouselIndex = 0;
        }
      };
      
      function goToSlide(ind){
        scope.carouselIndex = ind;
      }
    }
  }
})();
