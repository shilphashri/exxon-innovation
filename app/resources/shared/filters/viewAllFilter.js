(function() {
  'use strict';

  angular
  .module('app')
  .filter('viewAll', viewAll);

  viewAll.$inject = ['panelService'];

  function viewAll(panelService) {
    return function(input, displayNo, activateFilter) {
      var mode = panelService.getMode();
      if (mode == "EDITOR") {
        return input;
      }
      input = input || [];
      displayNo = displayNo || input.length;
      var out = [];
      if (activateFilter) {
        out = input.slice(0, displayNo)
      } else {
        return input;
      }
      return out;
    };
  }
})();
