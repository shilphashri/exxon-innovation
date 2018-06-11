(function() {
  'use strict';

  angular
    .module('app')
    .directive('mediaText', mediaText);

    mediaText.$inject = ["panelService"];
    
  function mediaText(panelService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/media-text/media-text.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }
    }
  }
})();