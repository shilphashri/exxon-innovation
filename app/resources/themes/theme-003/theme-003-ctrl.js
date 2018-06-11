(function() {
  'use strict';

  angular
    .module('app')
    .controller('theme003Ctrl', theme003Ctrl);

    theme003Ctrl.$inject = ['theme003Service'];

    function theme003Ctrl(theme003Service) {
      // var self = this;
      // self.colorScheme = "Blue";
      // self.data = theme003Service.getConfig().ref;
      // console.log("Data1", self.data);
      // self.data = btoa(JSON.stringify(self.data));
    }

})();
