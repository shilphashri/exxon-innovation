(function() {
  'use strict';

  angular
  .module('app')
  .service('sendMailService', sendMailService);

  sendMailService.$inject = ['$http', 'sp_URL']

  function sendMailService($http, sp_URL) {
    var self = this;


    self.getFormDigest = function() {
      var requestUrl = sp_URL + "/_api/contextinfo";
      return $http({
        'method': 'POST',
        'url': requestUrl,
        'headers': {'Accept':'application/json;odata=verbose','Content-Type':'application/json;odata=verbose'}});
    }

    self.sendMail = function(from, to, body, subject) {
      if (body.constructor == Object) {
        body = JSON.stringify(body);
      }

      return self
      .getFormDigest()
      .then(function (response) {
        var requestUrl = sp_URL + "/_api/SP.Utilities.Utility.SendEmail";

        return $http({
          'method': 'POST',
          'url': requestUrl,
          'data': JSON.stringify({
            'properties': {
              '__metadata': {
                'type': 'SP.Utilities.EmailProperties'
              },
              'From': from,
              'To': {
                'results': [to]
              },
              'Body': body ,
              'Subject': subject
            }
          }),
          'headers': { 'Accept':'application/json;odata=verbose','Content-Type':'application/json;odata=verbose','X-RequestDigest': response.data.d.GetContextWebInformation.FormDigestValue }
        })
      });
    }
  }

})();
