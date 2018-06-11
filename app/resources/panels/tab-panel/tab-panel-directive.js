(function() {
  'use strict';

  angular
    .module('app')
    .directive('tabPanel', tabPanel);

    tabPanel.$inject = ["panelService"];

  function tabPanel(panelService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        uniqueId : '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/tab-panel/tab-panel.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.getTab = getTab;
      scope.curTab = 0;
      scope.addClass = false;
      scope.mobileTabHeading = '';

      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }
      
      scope.mobileTabHeading = scope.data.data[0].data.tabTitle.data;

      scope.toggleTab = function(){
        scope.addClass = !scope.addClass;
      }

      function getTab(selectedTabHeading, index) {
        scope.curTab = index;
        if(scope.addClass) {
          scope.addClass = false;
          scope.mobileTabHeading = selectedTabHeading;
        }
      }

    }
  }
})();
