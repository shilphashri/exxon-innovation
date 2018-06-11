(function() {
  'use strict';
  // .constant('sp_URL', 'https://ishareteam3.na.xom.com/sites/Builder/')
  // .constant('assetsVersion', '0.0.1')
  // .constant('cdnPath', 'https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/')
  // .constant('assetsCdnPath', 'https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/')
  // .constant('panelsCssCdnPath', 'https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/css/panels.css');

  angular
  .module('app', [
    "ngSanitize",
    "ui.router",
    "ngScrollbars",
    "angular-carousel",
    "angular-loading-bar"
  ])
  .constant('sp_URL', 'http://sharepoint.softwaydev.com/sites/sandwich/sandwich-tool/')
  .constant('assetsVersion', '0.0.1')
  .constant('cdnPath', 'http://sharepoint.softwaydev.com/sites/sandwich/sandwich-tool/PointableCDN/')
  .constant('assetsCdnPath', 'http://sharepoint.softwaydev.com/sites/sandwich/sandwich-tool/PointableCDN/assets/')
  .constant('panelsCssCdnPath', 'http://sharepoint.softwaydev.com/sites/sandwich/sandwich-tool/PointableCDN/assets/0.0.1/css/panels.css');

  angular
  .module('app')
  .value('Mode', "PRODUCTION")
  .config(configFunc);

  configFunc.$inject = ['ScrollBarsProvider', 'cfpLoadingBarProvider'];
  
  function configFunc(ScrollBarsProvider, cfpLoadingBarProvider) {
    ScrollBarsProvider.defaults = {
      scrollButtons: {
        scrollAmount: 'auto', // scroll amount when button pressed
        enable: true // enable scrolling buttons by default
      },
      scrollInertia: 400, // adjust however you want,
      theme: 'dark',
    };
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.spinnerTemplate = '<div class="overlay"> <div class="page-loading">Loading...</div></div>';
  }
})();