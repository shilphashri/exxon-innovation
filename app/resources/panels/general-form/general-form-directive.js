(function() {
  'use strict';

  angular
    .module('app')
    .directive('generalForm', generalForm);

    generalForm.$inject = ["panelService", "sendMailService", "newSharePointService"];

  function generalForm(panelService, sendMailService, newSharePointService) {
    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        uniqueId: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/general-form/general-form.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }
      
      scope.userDetails;
      scope.sendTriggered = false;
      scope.sendData = {
        Name: '',
        Email: '',
        Phone: '',
        Custom1: '',
        Custom2: '',
        Custom3: '',
        Comments: ''
      }

      scope.getUserDetails = getUserDetails
      function getUserDetails () {
        newSharePointService
        .getUser()
        .then(function (response) {
          if (response.data.d) {
            scope.userDetails = response.data.d;
            scope.sendData.Name = scope.userDetails.DisplayName;
            scope.sendData.Email = scope.userDetails.Email;
          }
        },
        function (error) {
          console.log('error fetching user details in contact form', error);
        })
      }
      scope.getUserDetails();

      scope.send = send;
      function send(valid) {
        scope.sendTriggered = true;
        if(valid) {
          var data = {};
          if(!scope.sendData.Name == '') {
            data['Name'] = scope.sendData.Name;
          }
          if(!scope.sendData.Email == '') {
            data['Email'] = scope.sendData.Email;
          }
          if(!scope.sendData.Phone == '') {
            data['Phone'] = scope.sendData.Phone;
          }
          if(!scope.sendData.Comments == '') {
            data['Comments'] = scope.sendData.Comments;
          }
          if(!scope.sendData.Custom1 == '') {
            data[scope.data.Custom1.data] = scope.sendData.Custom1;
          }
          if(!scope.sendData.Custom2 == '') {
            data[scope.data.Custom2.data] = scope.sendData.Custom2;
          }
          if(!scope.sendData.Custom3 == '') {
            data[scope.data.Custom3.data] = scope.sendData.Custom3;
          }
          console.log('Sending mail...', data);
          sendMailService
          .sendMail(
            scope.sendData.Email, 
            scope.data.SendTo.data,
            data,
            "Contact Form"
          )
          .then(
            function(response){
              console.log("Email sent successfully");
            }
          )
          .catch(
            function(err){
              console.log("Error sending mail", err);
            }
          );
        }
      }

      scope.cancel = cancel;
      function cancel () {
        scope.sendTriggered = false;
        
        if(!scope.userDetails) {
          scope.sendData.Name = '';
          scope.sendData.Email = '';
        }
        scope.sendData.Phone = '';
        scope.sendData.Custom1 = '';
        scope.sendData.Custom2 = '';
        scope.sendData.Custom3 = '';
        scope.sendData.Comments = '';
      }
    }
  }
})();
