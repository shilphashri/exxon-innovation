(function() {
  'use strict';

  angular
  .module('app')
  .config(appConfig)
  .service('newSharePointService', newSharePointService);

  newSharePointService.$inject = ['$http', 'sp_URL'];

  appConfig.$inject = ['$httpProvider'];

  function appConfig($httpProvider) {
    $httpProvider.defaults.cache = false;
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common['Accept'] = 'application/json; odata=verbose';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; odata=verbose';
    $httpProvider.defaults.headers.post['Accept'] = 'application/json; odata=verbose';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; odata=verbose';
  };

  function newSharePointService($http, sp_URL) {
    var self = this;

    self.getFormDigest = function() {
      var requestUrl = sp_URL + "/_api/contextinfo";
      return $http({
        'method': 'POST',
        'url': requestUrl
      });
    }

    self.getUser = function() {

      var apiURL = sp_URL + "_api/sp.userprofiles.peoplemanager/getmyproperties";
      var requestObject = {
        method: 'GET',
        url: apiURL
      }

      return $http(requestObject);

    }

    self.pullContent = function(url) {
      var requestObject = {
        method: 'GET',
        url: url
      }

      return $http(requestObject);
    }

    self.getAllColumnsByListTitle = function(spBaseUrl, listName) {

      var apiURL = spBaseUrl + "_api/web/lists/getbytitle('"+ listName +"')/Fields?$filter=Hidden eq false and ReadOnlyField eq false and InternalName ne 'Attachments' and InternalName ne 'ContentType'";
      var requestObject = {
        method: 'GET',
        url: apiURL
      }

      return $http(requestObject);
    }
  }

})();
