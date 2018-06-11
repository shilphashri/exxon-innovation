(function() {
  'use strict';

  angular
    .module('app')
    .directive('textPassage', textPassage);

    textPassage.$inject = ["panelService"];

  function textPassage(panelService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/text-passage/text-passage.html',
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
