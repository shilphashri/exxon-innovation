(function() {
  'use strict';

  angular
    .module('app')
    .directive('innovationFooter', innovationFooter);

    innovationFooter.$inject = ["panelService", "assetsCdnPath", "assetsVersion"];

  function innovationFooter(panelService, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        uniqueId : '@',
        panelData: '@',
        mode: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/innovation-footer/innovation-footer.html',
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
