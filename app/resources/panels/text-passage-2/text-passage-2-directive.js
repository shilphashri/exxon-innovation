(function() {
  'use strict';

  angular
    .module('app')
    .directive('textPassage2', textPassage2);

    textPassage2.$inject = ["panelService"];

  function textPassage2(panelService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/text-passage-2/text-passage-2.html',
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
