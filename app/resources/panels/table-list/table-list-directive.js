(function() {
  'use strict';

  angular
    .module('app')
    .directive('tableList', tableList);

    tableList.$inject = ["panelService"];

  function tableList(panelService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        uniqueId: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/table-list/table-list.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {

      scope.callback = function(panelData) {
        scope.data = panelData;
        if (!scope.data.isHorizontal) {
          scope.prepareVerticalTableObject();
        }
        try {
          scope.$digest();
        }
        catch(exp) {
          console.log("Error in table List Panel digest");
        }
      }

      scope.prepareVerticalTableObject = function() {
        var verticalTableObject = {};
        scope.data.columnNames.forEach(function (column) {
          var columnData = scope.data.data.map( function(a) { return a[column]; } );
          verticalTableObject[column] = columnData;
        })
        scope.data.verticalTableObject = verticalTableObject;
      }

      panelService.setTableData(scope.panelData, scope.callback.bind(scope));
    }
  }
})();
