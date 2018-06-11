(function() {
  'use strict';

  angular
    .module('app')
    .directive('accordianList', accordianList);

  accordianList.$inject = ['panelService', '$timeout', 'assetsCdnPath', 'assetsVersion']

  function accordianList(panelService, $timeout, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        uniqueId: '@',
        panelData: '@',
        mode: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/accordian-list/accordian-list.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.cdnPath = assetsCdnPath + assetsVersion;
      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }

      scope.curMode = panelService.getMode();

      scope.toggleAccordion = function(event) {
        event.preventDefault();
        var currentTarget = event.currentTarget || event.srcElement;
        var element = $(currentTarget).parents('.em-js-accordion-item');
        if ($(element).hasClass('em-is-closed')) {
          scope.closeAllAccordions();
          $(element).removeClass('em-is-closed');
        } else {
          $(element).addClass('em-is-closed');
        }
      }

      scope.getSvg = function(value) {
        return cdnPath + value;
      }

      scope.closeAllAccordions = function() {
        $('.em-js-accordion-item').addClass("em-is-closed");
      }
   
    }
  }
})();
