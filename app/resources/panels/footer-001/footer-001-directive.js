(function() {
  'use strict';

  angular
    .module('app')
    .directive('footer001', footer001);

    footer001.$inject = ["panelService", "assetsCdnPath", "assetsVersion"];

  function footer001(panelService, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        uniqueId : '@',
        panelData: '@',
        mode: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/footer-001/footer-001.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.cdnPath = assetsCdnPath + assetsVersion;

      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }

      function mobileViewClickHandler(evt) {
        var navItems = $(".footer .em-l-grid__item span");
        for(var i = 0; i < navItems.length; i++) {
          var item  = navItems[i];
          if ($(item).is(this)) {
            $(this).toggleClass("open");
            $(this).toggleClass("close");
            var childNavContainer = $(this).parent().find('.em-c-multicolumn-nav.em-c-multicolumn-nav--horizontal.sub-nav-container');
            if(childNavContainer.length) {
              $(childNavContainer).slideToggle(300);
            }
            continue;
          }
          var itemOpen = $(item).hasClass('open');
          if (itemOpen) {
            $(item).toggleClass("open");
            $(item).toggleClass("close");
            var itemChildNavContainer = $(item).parent().find('.em-c-multicolumn-nav.em-c-multicolumn-nav--horizontal.sub-nav-container');
            if(itemChildNavContainer.length) {
              $(itemChildNavContainer).slideUp(300);
            }
          }
        }
      }

      setTimeout(function() {
        $(".footer .em-l-grid__item span")
        .click(mobileViewClickHandler);
      }, 10);
    }
  }
})();
