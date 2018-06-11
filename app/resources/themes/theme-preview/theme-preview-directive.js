(function() {
  'use strict';
  var data11;
  angular
    .module('app')
    .directive('themePreview', themePreview);

  function themePreview() {
    var directive = {
      scope: {
        data: '=',
      },
      restrict: 'AE',
      templateUrl: 'app/resources/themes/theme-preview/theme-preview.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.$watch('data', function(newValue, oldValue) {
      });
    }
  }
})();
