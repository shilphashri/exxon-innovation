(function() {
  'use strict';

  angular
  .module('app')
  .filter('range', range);

  range.$inject = ['panelService'];

  function range(panelService) {
    return function(input, total) {
      total = parseInt(total);
      for (var i=0; i<total; i++) {
        input.push(i);
      }
      return input;
    };
  }
})();