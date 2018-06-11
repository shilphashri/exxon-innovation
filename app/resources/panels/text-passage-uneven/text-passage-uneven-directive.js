(function() {
  'use strict';

  angular
    .module('app')
    .directive('textPassageUneven', textPassageUneven);

    textPassageUneven.$inject = ["panelService"];

  function textPassageUneven(panelService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/text-passage-uneven/text-passage-uneven.html',
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
