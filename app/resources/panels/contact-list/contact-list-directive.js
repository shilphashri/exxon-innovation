(function() {
  'use strict';

  angular
    .module('app')
    .directive('contactList', contactList);

    contactList.$inject = ['panelService', 'assetsCdnPath', 'assetsVersion'];

  function contactList(panelService, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        colorscheme: '@',
        uniqueId: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/contact-list/contact-list.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.data = {};
      scope.cdnPath = assetsCdnPath + assetsVersion;
      scope.finalData = [];
      scope.init = init;
      function init() {
        if (scope.data.view.enable) {
          scope.data.view.display = true;
        } else {
          scope.data.view.display = false;
        }
        if (scope.data.view.display) {
          scope.data.view.text = "View All";
        } else {
          scope.data.view.text = "View Less";
        }
      }

      scope.cb = function(panelData, check) {
        scope.data = panelData;
        scope.init();
        if(
            scope.data.isDynamic  && 
            scope.data.apiUrl != "" && 
            panelService.isSharepointMapped(scope.data)
          ) {
          scope.finalData = cloneObject(scope.data.dynamicData);
        } else {
          scope.finalData = cloneObject(scope.data.data);
        }
        if(check) {
          // scope.$apply();
        }
      };
      
      panelService.setCardColData(scope.panelData, scope.cb);
      
      scope.viewAllLess = function () {
        if (scope.data.view.text == "View Less") {
          scope.data.view.display = true;
          scope.data.view.text = "View All";
        } else if (scope.data.view.text == "View All") {
          scope.data.view.display = false;
          scope.data.view.text = "View Less";
        }
      }
    }
  }
})();
