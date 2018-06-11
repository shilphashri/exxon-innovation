(function() {
  'use strict';

  angular
  .module('app')
  .config(configFunc);

  configFunc.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function configFunc($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/#');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'varWhoweareCtrl',
      templateUrl: 'app/pages/varWhoweare/varWhoweare.html'
    })
  }
})();