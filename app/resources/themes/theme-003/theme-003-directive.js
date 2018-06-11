(function() {
  'use strict';

  angular
  .module('app')
  .directive('theme003', theme003);

  theme003.$inject = ['panelService', 'assetsCdnPath', 'assetsVersion', 'panelsCssCdnPath']

  function theme003(panelService, assetsCdnPath, assetsVersion, panelsCssCdnPath) {
    var directive = {
      scope: {},
      restrict: 'AE',
      templateUrl: 'app/resources/themes/theme-003/theme-003.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.cdnPath = assetsCdnPath + assetsVersion;
      scope.loadScript = function() {
        var node = document.createElement('script');
        node.src = scope.cdnPath + "/unity-1.1.1/js/em-unity-1.1.1.js";
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        // document.getElementsByTagName('head')[0].appendChild(node);
        document.body.appendChild(node);
      }

      scope.loadUnityStyle = function() {
        var node = document.createElement('link');
        node.href = scope.cdnPath + "/unity-1.1.1/css/em-unity-1.1.1.min.css";
        node.type = 'text/css';
        node.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(node);
        // document.body.appendChild(node);
      }

      scope.loadPanelsStyle = function() {
        var node = document.createElement('link');
        node.href = panelsCssCdnPath;
        node.type = 'text/css';
        node.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(node);
      }
      
      scope.loadCustomStyle = function() {
        var node = document.createElement('link');
        node.href = 'assets/css/custom-styles.css';
        node.type = 'text/css';
        node.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(node);
      }

      scope.loadUnityStyle();
      scope.loadPanelsStyle();
      
      scope.loadCustomStyle();
  
    }
  }
})();
