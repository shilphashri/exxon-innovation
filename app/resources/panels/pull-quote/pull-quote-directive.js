(function() {
  'use strict';

  angular
    .module('app')
    .directive('pullQuote', pullQuote);

    pullQuote.$inject = ["panelService", "assetsCdnPath", "assetsVersion"];

  function pullQuote(panelService, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/pull-quote/pull-quote.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.cdnPath = assetsCdnPath + assetsVersion;

      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }
      
    }
  }
})();
