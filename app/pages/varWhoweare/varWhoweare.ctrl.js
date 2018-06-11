
    (function() {
      'use strict';
    
      angular
      .module('app')
      .controller('varWhoweareCtrl', varWhoweareCtrl);

      varWhoweareCtrl.$inject = ["$scope"];
    
      function varWhoweareCtrl($scope) {
        /*
          Prepare data varible format from panel-title(convert dashed to camel casing)
          Ex : default-header ---> defaultHeaderData
          Ex : pull-quote ---> pullQuoteData
        */
       
       $scope.theme = JSON.parse('{"ID":4,"name":"Theme-003","Title":"Theme-003-Red","color":"Red"}')
        
        /*<pageController>*/
        var varCondensedheaderData= decodeStr("eyJoZWFkZXJUZXh0IjoiSW5ub3ZhdGlvbiIsImtpY2tlclRleHQiOiJBcHBsaWNhdGlvbiBLaWNrZXIiLCJraWNrZXIiOnRydWUsImdsb2JhbFBhZ2VUcmVlIjpbeyJUaXRsZSI6Ikdvb2dsZSIsIlVSTCI6Imh0dHA6Ly93d3cuZ29vZ2xlLmNvbSJ9LHsiVGl0bGUiOiJZb3V0dWJlIiwiVVJMIjoiaHR0cDovL3d3dy55b3V0dWJlLmNvbSJ9XSwiZ2xvYmFsIjpmYWxzZSwicHJvZmlsZSI6ZmFsc2UsInByb2ZpbGVJbmZvIjp7IkZpcnN0TmFtZSI6IkZpcnN0bmFtZSIsIkxhc3ROYW1lIjoiTGFzdG5hbWUiLCJDaGlsZHJlbiI6W3siVGl0bGUiOiJHb29nbGUiLCJVUkwiOiJodHRwOi8vd3d3Lmdvb2dsZS5jb20ifSx7IlRpdGxlIjoiR29vZ2xlIiwiVVJMIjoiaHR0cDovL3d3dy5nb29nbGUuY29tIn0seyJUaXRsZSI6Ikdvb2dsZSIsIlVSTCI6Imh0dHA6Ly93d3cuZ29vZ2xlLmNvbSJ9LHsiVGl0bGUiOiJHb29nbGUiLCJVUkwiOiJodHRwOi8vd3d3Lmdvb2dsZS5jb20ifV19LCJzdHlsZSI6IiIsInBhZ2VUcmVlIjpbeyJJZCI6MTUzNSwiVGl0bGUiOiJXaG8gd2UgYXJlIiwiSW5OYXZpZ2F0aW9uIjp0cnVlLCJJc0V4dGVybmFsIjpmYWxzZSwiT3JkZXIwIjowLCJQYXJlbnRfaWRJZCI6bnVsbCwiU2l0ZV9pZElkIjo2MCwiVGVtcGxhdGVfaWRJZCI6bnVsbCwiVXJsIjoiaG9tZSIsIlN0YXRlIjoiV2hvd2VhcmUiLCJEZXNjcmlwdGlvbiI6bnVsbH1dfQ==");

var varImagesliderData1 = {
  "editing": false,
  "curIndex": 0,
  "enableAutoSlide": false,
  "data": [
    {
      "data": {
        "sliderTitle": {
          "data": "innovation grows here",
          "defaultData": "Slide 1",
          "placeholder": "Title",
          "enable": "true",
          "editing": "false"
        },
        "sliderImage": {
          "data": "assets/images/25A_Who we are_sliderImage_0.png?x=MjAxOC0wNi0wNlQwNzo1MTowOVo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/banner-002/banner-002-bg.jpg",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/banner-002/banner-002-bg.jpg",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/25A_Who we are_sliderSourceImage_0.png?x=MjAxOC0wNi0wNlQwNzo1MTozOVo=",
          "type": "Bare",
          "enableTint": "true",
          "editing": "false"
        },
        "sliderText": {
          "data": "Update the text contents here & preview it on save",
          "defaultData": "Update the text contents here & preview it on save",
          "placeholder": "Update the text contents here & preview it on save",
          "enable": false,
          "editing": "false"
        },
        "sliderButton": {
          "data": "Who we are",
          "defaultData": "Button 1",
          "placeholder": "Button Text",
          "enable": "true",
          "editing": "false"
        },
        "sliderButtonLink": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": {
            "__metadata": {
              "id": "Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "etag": "\"1\"",
              "type": "SP.Data.PagesListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FirstUniqueAncestorSecurableObject"
              }
            },
            "RoleAssignments": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/RoleAssignments"
              }
            },
            "AttachmentFiles": {
              "results": []
            },
            "ContentType": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ContentType"
              }
            },
            "FieldValuesAsHtml": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsHtml"
              }
            },
            "FieldValuesAsText": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsText"
              }
            },
            "FieldValuesForEdit": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesForEdit"
              }
            },
            "File": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/File"
              }
            },
            "Folder": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/Folder"
              }
            },
            "ParentList": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ParentList"
              }
            },
            "Editor": {
              "__metadata": {
                "id": "d4a1cebc-f228-4f76-8a17-7a7b3a8f1d63",
                "type": "SP.Data.UserInfoItem"
              },
              "Id": 40,
              "Title": "Hadagali, Mudassir /C"
            },
            "FileSystemObjectType": 0,
            "Id": 1535,
            "ContentTypeId": "0x010014C51270B4970541898B193732E3A828",
            "Title": "Who we are",
            "IsExternal": false,
            "InNavigation": true,
            "Url": null,
            "Order0": 0,
            "Description": null,
            "Parent_idId": null,
            "Template_idId": null,
            "Site_idId": 60,
            "ID": 1535,
            "Modified": "2018-06-06T07:44:34Z",
            "Created": "2018-06-06T07:44:34Z",
            "AuthorId": 40,
            "EditorId": 40,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "3be06716-9f95-46c6-b508-02fb23964449"
          }
        }
      },
      "editing": true
    }
  ],
  "grayBackground": false
}
var varTextpassageunevenData2 = {
  "data": [
    {
      "enable": true,
      "editing": false,
      "data": {
        "passageHeading": {
          "data": "Who we are",
          "defaultData": "This is a Heading 1",
          "placeholder": "Title",
          "enable": true,
          "editing": false
        },
        "passageIntro": {
          "data": "Innovation is passionate about developing & driving innovation strategy in ExxonMobil by",
          "defaultData": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam necessitatibus reprehenderit ipsum repellat quasi ratione sit possimus eveniet, ea, ut mollitia repudiandae eligendi unde aperiam molestiae voluptatibus error. Dolorem, iure.",
          "placeholder": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam necessitatibus reprehenderit ipsum repellat quasi ratione sit possimus eveniet, ea, ut mollitia repudiandae eligendi unde aperiam molestiae voluptatibus error. Dolorem, iure.",
          "enable": true,
          "editing": false
        },
        "passageDescription": {
          "data": "<div><ul><li>conducting research on techniques, processes, and tools specific to the innovation process,</li><li>offering education on techniques to invigorate innovation activities and develop a culture of innovation,</li><li>providing consulting on innovation strategy and coaching teams to deliver innovative solutions.</li></ul><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We LOVE helping other groups enhance their creative and innovative potential. Let us help you!<br><br></p></div>",
          "defaultData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla sem a urna porttitor fringilla. Nulla eget justo felis. eget volutpat justo mattis nec. Sed a orci turpis. Aliquam aliquet placerat dui.",
          "placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla sem a urna porttitor fringilla. Nulla eget justo felis. eget volutpat justo mattis nec. Sed a orci turpis. Aliquam aliquet placerat dui.",
          "enable": true,
          "editing": false
        }
      }
    }
  ],
  "grayBackground": false
};

var varTextpassageunevenData3 = decodeStr("eyJkYXRhIjpbeyJlbmFibGUiOnRydWUsImVkaXRpbmciOmZhbHNlLCJkYXRhIjp7InBhc3NhZ2VIZWFkaW5nIjp7ImRhdGEiOiJTdG9yaWVzIiwiZGVmYXVsdERhdGEiOiJUaGlzIGlzIGEgSGVhZGluZyAxIiwicGxhY2Vob2xkZXIiOiJUaXRsZSIsImVuYWJsZSI6dHJ1ZSwiZWRpdGluZyI6ZmFsc2V9LCJwYXNzYWdlSW50cm8iOnsiZGF0YSI6IkdldCB1bnN0dWNrIHdpdGggdGhlIEludHJhcHJlbmV1ciBib290Y2FtcCIsImRlZmF1bHREYXRhIjoiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FtIG5lY2Vzc2l0YXRpYnVzIHJlcHJlaGVuZGVyaXQgaXBzdW0gcmVwZWxsYXQgcXVhc2kgcmF0aW9uZSBzaXQgcG9zc2ltdXMgZXZlbmlldCwgZWEsIHV0IG1vbGxpdGlhIHJlcHVkaWFuZGFlIGVsaWdlbmRpIHVuZGUgYXBlcmlhbSBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzIGVycm9yLiBEb2xvcmVtLCBpdXJlLiIsInBsYWNlaG9sZGVyIjoiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FtIG5lY2Vzc2l0YXRpYnVzIHJlcHJlaGVuZGVyaXQgaXBzdW0gcmVwZWxsYXQgcXVhc2kgcmF0aW9uZSBzaXQgcG9zc2ltdXMgZXZlbmlldCwgZWEsIHV0IG1vbGxpdGlhIHJlcHVkaWFuZGFlIGVsaWdlbmRpIHVuZGUgYXBlcmlhbSBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzIGVycm9yLiBEb2xvcmVtLCBpdXJlLiIsImVuYWJsZSI6dHJ1ZSwiZWRpdGluZyI6ZmFsc2V9LCJwYXNzYWdlRGVzY3JpcHRpb24iOnsiZGF0YSI6IjxwPkxhc3QgeWVhciB3ZSBiZWdhbiBhIGpvdXJuZXkgdG8gdGFrZSBvdXIgZXhwZXJpZW5jZSBpbiBkZXZlbG9waW5nIG5ldyBzZXJ2aWNlcyBhbmQgcHJvZHVjdHMgdXNpbmcgdGhlIHN0YXJ0dXAgbWluZHNldCBhbmQgaGVscCB0ZWFtcyBhcHBseSB0aGF0IG1pbmRzZXQgdGhyb3VnaCBjb2FjaGluZy4gTm93IHRoYXQgY29hY2hpbmcgZXhwZXJpZW5jZSBpcyBhdmFpbGFibGUgdG8gYWxsLiBTbyBkbyB5b3UgaGF2ZSBhIGJpZyBvcHBvcnR1bml0eSB5b3UncmUgY2hhc2luZywgYnV0IGFyZSB1bnN1cmUgaG93IHRvIHN0YXJ0IG9yIGFyZSBmZWVsaW5nIHN0dWNrPyBUaGlzIGlzIHdoZXJlIHRoZSBJbnRyYXByZW5ldXIgQm9vdGNhbXAgKGlDYW1wKSBjb21lcyBpbi4gVGhpcyAyLWRheSwgaW1tZXJzaXZlIGNvYWNoaW5nIGNhbXAgYWxsb3dzIHRlYW1zIHRvIG1ha2UgYSB0b24gb2YgcHJvZ3Jlc3MgYW5kIGxlYXJuIGEgYmV0dGVyIHdheSBvZiB3b3JraW5nIHRocm91Z2ggdW5jZXJ0YWludHkuIFVubGlrZSB0cmFkaXRpb25hbCBtb2RlcyBvZiB3b3JraW5nIHdoZXJlIGV2ZXJ5dGhpbmcncyBhIHByb2plY3QsIHRoZSBpQ2FtcCBnaXZlcyB0ZWFtcyB0aGUgZnJlZWRvbSB0byB0aGluayBsaWtlIGEgc3RhcnR1cCBhbmQgZ2V0IHVuc3R1Y2sgd2l0aCBhIGNvYWNoIGF0IHRoZWlyIHNpZGUuIENoZWNrIG91dCBnb3RvL2lDYW1wIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCB0byBnZXQgeW91ciBjb2FjaGluZyBzdGFydGVkLjwvcD48cD48YnI+PC9wPiIsImRlZmF1bHREYXRhIjoiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBmcmluZ2lsbGEgc2VtIGEgdXJuYSBwb3J0dGl0b3IgZnJpbmdpbGxhLiBOdWxsYSBlZ2V0IGp1c3RvIGZlbGlzLiBlZ2V0IHZvbHV0cGF0IGp1c3RvIG1hdHRpcyBuZWMuIFNlZCBhIG9yY2kgdHVycGlzLiBBbGlxdWFtIGFsaXF1ZXQgcGxhY2VyYXQgZHVpLiIsInBsYWNlaG9sZGVyIjoiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBmcmluZ2lsbGEgc2VtIGEgdXJuYSBwb3J0dGl0b3IgZnJpbmdpbGxhLiBOdWxsYSBlZ2V0IGp1c3RvIGZlbGlzLiBlZ2V0IHZvbHV0cGF0IGp1c3RvIG1hdHRpcyBuZWMuIFNlZCBhIG9yY2kgdHVycGlzLiBBbGlxdWFtIGFsaXF1ZXQgcGxhY2VyYXQgZHVpLiIsImVuYWJsZSI6dHJ1ZSwiZWRpdGluZyI6ZmFsc2V9fX1dLCJncmF5QmFja2dyb3VuZCI6dHJ1ZX0=");

var varTextpassageData4 = decodeStr("eyJlZGl0aW5nIjpmYWxzZSwicGFzc2FnZUhlYWRpbmciOnsiZGF0YSI6Iklubm92YXRpb24gUG9zaXRpb24gUGFwZXI6IENyb3dkc291cmNpbmciLCJkZWZhdWx0RGF0YSI6IlRoaXMgaXMgYSBIZWFkaW5nIDEiLCJwbGFjZWhvbGRlciI6IlRpdGxlIiwiZW5hYmxlIjpmYWxzZSwiZWRpdGluZyI6ZmFsc2V9LCJwYXNzYWdlSW50cm8iOnsiZGF0YSI6Iklubm92YXRpb24gUG9zaXRpb24gUGFwZXI6IENyb3dkc291cmNpbmciLCJkZWZhdWx0RGF0YSI6IkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhbSBuZWNlc3NpdGF0aWJ1cyByZXByZWhlbmRlcml0IGlwc3VtIHJlcGVsbGF0IHF1YXNpIHJhdGlvbmUgc2l0IHBvc3NpbXVzIGV2ZW5pZXQsIGVhLCB1dCBtb2xsaXRpYSByZXB1ZGlhbmRhZSBlbGlnZW5kaSB1bmRlIGFwZXJpYW0gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cyBlcnJvci4gRG9sb3JlbSwgaXVyZS4iLCJwbGFjZWhvbGRlciI6IkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhbSBuZWNlc3NpdGF0aWJ1cyByZXByZWhlbmRlcml0IGlwc3VtIHJlcGVsbGF0IHF1YXNpIHJhdGlvbmUgc2l0IHBvc3NpbXVzIGV2ZW5pZXQsIGVhLCB1dCBtb2xsaXRpYSByZXB1ZGlhbmRhZSBlbGlnZW5kaSB1bmRlIGFwZXJpYW0gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cyBlcnJvci4gRG9sb3JlbSwgaXVyZS4iLCJlbmFibGUiOnRydWUsImVkaXRpbmciOmZhbHNlfSwicGFzc2FnZURlc2NyaXB0aW9uIjp7ImRhdGEiOiJEZW1pc3RpZnkgd2hhdCB0aGlzIFwiY3Jvd2Rzb3VyY2VkIGlubm92YXRpb25cIiB0aGluZyBpcyB3aXRoIG91ciBsYXRlc3QgcG9zaXRpb24gcGFwZXIgYnkgS3lsZSBKb25lcy4gS3lsZSBoYXMgYmVlbiB3b3JraW5nIG9uIGEgUGhEIGFuZCBmb3IgaGlzIGRpc3NlcnRhdGlvbiBoYWQgbG9va2VkIGludG8gdGhlIGFyZWEgb2YgY3Jvd2Rzb3VyY2VkIGlubm92YXRpb24gdG8gYW5zd2VyIHF1ZXN0aW9ucyBhcm91bmQgaG93IHRoZSBjcm93ZCBpbmZsdWVuY2VzIGRlY2lzaW9ucy4gSGUncyB0YWtlbiB0aGUga25vd2xlZGdlIGhlIGdhaW5lZCBpbiB0aGF0IHdvcmsgYW5kIHdyaXR0aW5nIHVwIGEgUG9zaXRpb24gUGFwZXIgdG8gaGVscCB1cyBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgdmFyaW91cyBraW5kcyBvZiBjcm93ZHNvdXJjaW5nIGFuZCBob3cgRXh4b25Nb2JpbCBjYW4gbGV2ZXJhZ2UgdGhlbTxicj4iLCJwbGFjZWhvbGRlciI6IkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgZnJpbmdpbGxhIHNlbSBhIHVybmEgcG9ydHRpdG9yIGZyaW5naWxsYS4gTnVsbGEgZWdldCBqdXN0byBmZWxpcy4gZWdldCB2b2x1dHBhdCBqdXN0byBtYXR0aXMgbmVjLiBTZWQgYSBvcmNpIHR1cnBpcy4gQWxpcXVhbSBhbGlxdWV0IHBsYWNlcmF0IGR1aS4iLCJkZWZhdWx0RGF0YSI6IkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgZnJpbmdpbGxhIHNlbSBhIHVybmEgcG9ydHRpdG9yIGZyaW5naWxsYS4gTnVsbGEgZWdldCBqdXN0byBmZWxpcy4gZWdldCB2b2x1dHBhdCBqdXN0byBtYXR0aXMgbmVjLiBTZWQgYSBvcmNpIHR1cnBpcy4gQWxpcXVhbSBhbGlxdWV0IHBsYWNlcmF0IGR1aS4iLCJlbmFibGUiOnRydWUsImVkaXRpbmciOmZhbHNlfSwiZ3JheUJhY2tncm91bmQiOnRydWV9");

var varTextpassage2Data5 = decodeStr("eyJkYXRhIjpbeyJlbmFibGUiOnRydWUsImVkaXRpbmciOmZhbHNlLCJkYXRhIjp7InBhc3NhZ2VIZWFkaW5nIjp7ImRhdGEiOiJUaXRsZSIsImRlZmF1bHREYXRhIjoiVGhpcyBpcyBhIEhlYWRpbmcgMSIsInBsYWNlaG9sZGVyIjoiVGl0bGUiLCJlbmFibGUiOmZhbHNlLCJlZGl0aW5nIjpmYWxzZX0sInBhc3NhZ2VJbnRybyI6eyJkYXRhIjoiUkVBRCBBbGwgQWJvdXQgSXQuLi4iLCJkZWZhdWx0RGF0YSI6IkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhbSBuZWNlc3NpdGF0aWJ1cyByZXByZWhlbmRlcml0IGlwc3VtIHJlcGVsbGF0IHF1YXNpIHJhdGlvbmUgc2l0IHBvc3NpbXVzIGV2ZW5pZXQsIGVhLCB1dCBtb2xsaXRpYSByZXB1ZGlhbmRhZSBlbGlnZW5kaSB1bmRlIGFwZXJpYW0gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cyBlcnJvci4gRG9sb3JlbSwgaXVyZS4iLCJwbGFjZWhvbGRlciI6IkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhbSBuZWNlc3NpdGF0aWJ1cyByZXByZWhlbmRlcml0IGlwc3VtIHJlcGVsbGF0IHF1YXNpIHJhdGlvbmUgc2l0IHBvc3NpbXVzIGV2ZW5pZXQsIGVhLCB1dCBtb2xsaXRpYSByZXB1ZGlhbmRhZSBlbGlnZW5kaSB1bmRlIGFwZXJpYW0gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cyBlcnJvci4gRG9sb3JlbSwgaXVyZS4iLCJlbmFibGUiOnRydWUsImVkaXRpbmciOmZhbHNlfSwicGFzc2FnZURlc2NyaXB0aW9uIjp7ImRhdGEiOiI8cD4jaW5ub3ZhdGlvbiBoYXMgc3BlbnQgdGhlIGxhc3QgZm91ciB5ZWFycyBiZW5jaG1hcmtpbmcgb3RoZXIgY29tcGFuaWVzLCB3b3JraW5nIHdpdGggYWNhZGVtaWNzLCBnb2luZyBvbiBGaWVsZCBTdHVkaWVzIHdpdGggb3VyIHBlZXJzLCBhbmQgbGVhcm5pbmcgaG93IHRob3NlIHdlIGNvbnNpZGVyIHRvIGJlIGlubm92YXRpdmUgYXJlIG1ha2luZyBpdCBoYXBwZW4uIFdlJ3JlIHdvcmtpbmcgaGFyZCB0byBzcHJlYWQgdGhlIGtub3dsZWRnZSBhbmQgcG9zaXRpb25zIHdlJ3ZlIGdhaW5lZCB0aHJvdWdoIG91ciByZXNlYXJjaDogdGhlICNpbm5vY2FzdCBhbmQgSW5ub3ZhdGlvbiBDYXRhbHlzdCBjbGFzcyBiZWluZyBqdXN0IGEgZmV3IG1lY2hhbmlzbSBmb3IgdGhhdDsgaG93ZXZlciwgd2UncmUgYWRkaW5nIHBvc2l0aW9uIHBhcGVycyBhbmQgd2hpdGUgcGFwZXJzIHRvIG91ciByb3N0ZXIuIEJlbG93IGFyZSB0aHJlZSB3ZSd2ZSByZWNlbnRseSBjcmVhdGVkLiBMZXQgdXMga25vdyB3aGF0IHlvdSBhbGwgdGhpbmsgYW5kIGlmIHRoaXMgaXMgaGVscGZ1bCBpbiB1bmRlcnN0YW5kaW5nIHRoZSBzcGFjZSBvZiBpbm5vdmF0aW9uIGFuZCBkaWdlc3Rpbmcgd2hhdCdzIG91dCB0aGVyZS48L3A+PHVsPjxsaT5MZWFuIFN0YXJ0dXAgUG9zaXRpb24gUGFwZXI8L2xpPjxsaT5JbnR1aXQgV2hpdGUgUGFwZXI8L2xpPjxsaT5GaWRlbGl0eSBXaGl0ZSBQYXBlcjxicj48L2xpPjwvdWw+IiwiZGVmYXVsdERhdGEiOiJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIGZyaW5naWxsYSBzZW0gYSB1cm5hIHBvcnR0aXRvciBmcmluZ2lsbGEuIE51bGxhIGVnZXQganVzdG8gZmVsaXMuIGVnZXQgdm9sdXRwYXQganVzdG8gbWF0dGlzIG5lYy4gU2VkIGEgb3JjaSB0dXJwaXMuIEFsaXF1YW0gYWxpcXVldCBwbGFjZXJhdCBkdWkuIiwicGxhY2Vob2xkZXIiOiJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIGZyaW5naWxsYSBzZW0gYSB1cm5hIHBvcnR0aXRvciBmcmluZ2lsbGEuIE51bGxhIGVnZXQganVzdG8gZmVsaXMuIGVnZXQgdm9sdXRwYXQganVzdG8gbWF0dGlzIG5lYy4gU2VkIGEgb3JjaSB0dXJwaXMuIEFsaXF1YW0gYWxpcXVldCBwbGFjZXJhdCBkdWkuIiwiZW5hYmxlIjp0cnVlLCJlZGl0aW5nIjpmYWxzZX19fSx7ImVuYWJsZSI6dHJ1ZSwiZWRpdGluZyI6ZmFsc2UsImRhdGEiOnsicGFzc2FnZUhlYWRpbmciOnsiZGF0YSI6IlRpdGxlIiwiZGVmYXVsdERhdGEiOiJUaGlzIGlzIGEgSGVhZGluZyAxIiwicGxhY2Vob2xkZXIiOiJUaXRsZSIsImVuYWJsZSI6ZmFsc2UsImVkaXRpbmciOmZhbHNlfSwicGFzc2FnZUludHJvIjp7ImRhdGEiOiJNYXBwaW5nIHRoZSBJbm5vdmF0aW9uIExhbmRzY2FwZSIsImRlZmF1bHREYXRhIjoiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FtIG5lY2Vzc2l0YXRpYnVzIHJlcHJlaGVuZGVyaXQgaXBzdW0gcmVwZWxsYXQgcXVhc2kgcmF0aW9uZSBzaXQgcG9zc2ltdXMgZXZlbmlldCwgZWEsIHV0IG1vbGxpdGlhIHJlcHVkaWFuZGFlIGVsaWdlbmRpIHVuZGUgYXBlcmlhbSBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzIGVycm9yLiBEb2xvcmVtLCBpdXJlLiIsInBsYWNlaG9sZGVyIjoiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FtIG5lY2Vzc2l0YXRpYnVzIHJlcHJlaGVuZGVyaXQgaXBzdW0gcmVwZWxsYXQgcXVhc2kgcmF0aW9uZSBzaXQgcG9zc2ltdXMgZXZlbmlldCwgZWEsIHV0IG1vbGxpdGlhIHJlcHVkaWFuZGFlIGVsaWdlbmRpIHVuZGUgYXBlcmlhbSBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzIGVycm9yLiBEb2xvcmVtLCBpdXJlLiIsImVuYWJsZSI6dHJ1ZSwiZWRpdGluZyI6ZmFsc2V9LCJwYXNzYWdlRGVzY3JpcHRpb24iOnsiZGF0YSI6IkRlc2lnbiBUaGlua2luZywgQ3Jvd2Rzb3VyY2luZywgTGVhbiBTdGFydHVwLCBFbnRyZXByZW5ldXJzaGlwLCBJZGVhdGlvbi4uLmFyZSB0b28gbWFueSBidXp6d29yZHMgYXJvdW5kIGlubm92YXRpb24gY2F1c2luZyB5b3VyIG1pbmQgdG8gc3Bpbj8gTm90IHN1cmUgaG93IGl0IGFsbCBmaXRzIHRvZ2V0aGVyPyAjaW5ub3ZhdGlvbiBzcGVudCB0aGUgbGFzdCBjb3VwbGUgeWVhcnMgbWFraW5nIHNlbnNlIG9mIGl0IGZvciB5b3UgdGhyb3VnaCByZWFkaW5nLCByZXNlYXJjaCwgYW5kIHByYWN0aWNlOyBib2lsaW5nIGRvd24gdGhhdCBrbm93bGVkZ2UgaW50byBhIGNvbmNpc2UgbWFwIG9mIHRoZSBpbm5vdmF0aW9uIGxhbmRzY2FwZS4gRG9uJ3QgZ28gaXQgYWxvbmUuLi5waWNrIHVwIHRoZSBJbm5vdmF0aW9uIE1hcCBhbmQgbGVhcm4gaG93IHRvIG9yZ2FuaXplIHlvdXJzZWxmIGFyb3VuZCBpbm5vdmF0aW9uIGFuZCBidWlsZCBhIHRvb2xib3ggdG8gYmUgc3VjY2Vzc2Z1bCE8YnI+IiwiZGVmYXVsdERhdGEiOiJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIGZyaW5naWxsYSBzZW0gYSB1cm5hIHBvcnR0aXRvciBmcmluZ2lsbGEuIE51bGxhIGVnZXQganVzdG8gZmVsaXMuIGVnZXQgdm9sdXRwYXQganVzdG8gbWF0dGlzIG5lYy4gU2VkIGEgb3JjaSB0dXJwaXMuIEFsaXF1YW0gYWxpcXVldCBwbGFjZXJhdCBkdWkuIiwicGxhY2Vob2xkZXIiOiJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIGZyaW5naWxsYSBzZW0gYSB1cm5hIHBvcnR0aXRvciBmcmluZ2lsbGEuIE51bGxhIGVnZXQganVzdG8gZmVsaXMuIGVnZXQgdm9sdXRwYXQganVzdG8gbWF0dGlzIG5lYy4gU2VkIGEgb3JjaSB0dXJwaXMuIEFsaXF1YW0gYWxpcXVldCBwbGFjZXJhdCBkdWkuIiwiZW5hYmxlIjp0cnVlLCJlZGl0aW5nIjpmYWxzZX19fV0sImdyYXlCYWNrZ3JvdW5kIjp0cnVlfQ==");

var varStackedblocksData6 = {
  "activeIndex": 0,
  "view": {
    "displayNo": 3,
    "text": "View All",
    "display": true,
    "enable": false
  },
  "data": [
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": {
            "__metadata": {
              "id": "Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "etag": "\"1\"",
              "type": "SP.Data.PagesListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FirstUniqueAncestorSecurableObject"
              }
            },
            "RoleAssignments": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/RoleAssignments"
              }
            },
            "AttachmentFiles": {
              "results": []
            },
            "ContentType": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ContentType"
              }
            },
            "FieldValuesAsHtml": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsHtml"
              }
            },
            "FieldValuesAsText": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsText"
              }
            },
            "FieldValuesForEdit": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesForEdit"
              }
            },
            "File": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/File"
              }
            },
            "Folder": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/Folder"
              }
            },
            "ParentList": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ParentList"
              }
            },
            "Editor": {
              "__metadata": {
                "id": "5c0a8816-1965-4417-9e8a-6416d06f7126",
                "type": "SP.Data.UserInfoItem"
              },
              "Id": 40,
              "Title": "Hadagali, Mudassir /C"
            },
            "FileSystemObjectType": 0,
            "Id": 1535,
            "ContentTypeId": "0x010014C51270B4970541898B193732E3A828",
            "Title": "Who we are",
            "IsExternal": false,
            "InNavigation": true,
            "Url": null,
            "Order0": 0,
            "Description": null,
            "Parent_idId": null,
            "Template_idId": null,
            "Site_idId": 60,
            "ID": 1535,
            "Modified": "2018-06-06T07:44:34Z",
            "Created": "2018-06-06T07:44:34Z",
            "AuthorId": 40,
            "EditorId": 40,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "3be06716-9f95-46c6-b508-02fb23964449"
          }
        },
        "contentSummary": {
          "data": "SPARK is our innovation process. Whether face to face creative sessions or globally connected virtual campaigns; SPARK will help you create a space where the most innovative ideas can be identified and developed. See our Overview video and Consulting Guide for more information.<br>",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/255_Who we are_stackedBlocksImage_0.png?x=MjAxOC0wNi0wNlQxMDoyNToyNlo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/255_Who we are_stackedBlocksSourceImage_0.png?x=MjAxOC0wNi0wNlQxMDoyNToyNlo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    },
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "#innovation's very own Podcast where we talk about the latest research, news, &amp; stories in innovation and figure out how we can make these things happen in ExxonMobil. <br>",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/255_Who we are_stackedBlocksImage_1.png?x=MjAxOC0wNi0wNlQxMDoyNToyNlo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/255_Who we are_stackedBlocksSourceImage_1.png?x=MjAxOC0wNi0wNlQxMDoyNToyNlo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    },
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "Have a big opportunity to chase, but are unsure how to start, or are feeling stuck? The Intrapreneur Bootcamp (iCamp) is built for you. This 2-day, immersive coaching camp allows teams to make a ton of progress and learn a better way of working through uncertainty. Unlike traditional modes of working where everything's a project, the iCamp gives teams the freedom to think like a startup and get unstuck with a coach at their side. Contact us below to get started. <br>",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/255_Who we are_stackedBlocksImage_2.png?x=MjAxOC0wNi0wNlQxMDoyNToyNlo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/255_Who we are_stackedBlocksSourceImage_2.png?x=MjAxOC0wNi0wNlQxMDoyNTozMlo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    }
  ],
  "grayBackground": false,
  "isDynamic": false,
  "sharePointEdit": false,
  "connectedToSP": false,
  "sharepointListName": null,
  "apiUrl": "",
  "dynamicData": [],
  "dynamicFields": {
    "contentTitle": {
      "mapTo": null,
      "enable": true
    },
    "link": {
      "mapTo": null,
      "enable": true
    },
    "contentSummary": {
      "mapTo": null,
      "enable": true
    },
    "contentBg": {
      "mapTo": null,
      "enable": true
    },
    "contentFooter": {
      "mapTo": null,
      "enable": true
    },
    "dummyObj": {
      "data": {
        "contentTitle": {
          "data": "",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": true,
          "editing": false
        },
        "link": {
          "data": "",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": ""
        },
        "contentFooter": {
          "data": "",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": true,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    }
  }
};
var varStackedblocksData7 = {
  "activeIndex": 0,
  "view": {
    "displayNo": 3,
    "text": "View All",
    "display": true,
    "enable": false
  },
  "data": [
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": {
            "__metadata": {
              "id": "Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "etag": "\"1\"",
              "type": "SP.Data.PagesListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FirstUniqueAncestorSecurableObject"
              }
            },
            "RoleAssignments": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/RoleAssignments"
              }
            },
            "AttachmentFiles": {
              "results": []
            },
            "ContentType": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ContentType"
              }
            },
            "FieldValuesAsHtml": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsHtml"
              }
            },
            "FieldValuesAsText": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsText"
              }
            },
            "FieldValuesForEdit": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesForEdit"
              }
            },
            "File": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/File"
              }
            },
            "Folder": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/Folder"
              }
            },
            "ParentList": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ParentList"
              }
            },
            "Editor": {
              "__metadata": {
                "id": "e697853e-88fd-48e1-bd09-4a99946c9056",
                "type": "SP.Data.UserInfoItem"
              },
              "Id": 40,
              "Title": "Hadagali, Mudassir /C"
            },
            "FileSystemObjectType": 0,
            "Id": 1535,
            "ContentTypeId": "0x010014C51270B4970541898B193732E3A828",
            "Title": "Who we are",
            "IsExternal": false,
            "InNavigation": true,
            "Url": null,
            "Order0": 0,
            "Description": null,
            "Parent_idId": null,
            "Template_idId": null,
            "Site_idId": 60,
            "ID": 1535,
            "Modified": "2018-06-06T07:44:34Z",
            "Created": "2018-06-06T07:44:34Z",
            "AuthorId": 40,
            "EditorId": 40,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "3be06716-9f95-46c6-b508-02fb23964449"
          }
        },
        "contentSummary": {
          "data": "Want to improve ExxonMobil through creative use of Information Technology? Share your ideas here and participate in the community that's developing innovative solutions and making them happen.<br>&nbsp;",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/256_Who we are_stackedBlocksImage_0.png?x=MjAxOC0wNi0wNlQxMDoyNzoyOFo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/256_Who we are_stackedBlocksSourceImage_0.png?x=MjAxOC0wNi0wNlQxMDoyNzoyOFo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    },
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "Wondering how to help you or your team be more innovative? Whether it's the Innovation Catalyst, Crucial Conversations, customized training such as Innovation Leadership, techniques such as&nbsp; The Ten Types of Innovation, our reading list, or just the innovation yammer group, we'll help you and your team learn how to achieve your innovation goals. Contact us below to get started. <br>&nbsp;",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/256_Who we are_stackedBlocksImage_1.png?x=MjAxOC0wNi0wNlQxMDoyNzoyN1o=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/256_Who we are_stackedBlocksSourceImage_1.png?x=MjAxOC0wNi0wNlQxMDoyNzoyOFo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    },
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "InnoKit provides intrapreneurs with key resources they'll need during the innovation process. It consists of tools and worksheets to help innovators flesh out ideas, build an MVP, and learn and iterate. Find out how to get yours. <br>",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/256_Who we are_stackedBlocksImage_2.png?x=MjAxOC0wNi0wNlQxMDoyNzoyOFo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/256_Who we are_stackedBlocksSourceImage_2.png?x=MjAxOC0wNi0wNlQxMDoyNzoyOFo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    }
  ],
  "grayBackground": false,
  "isDynamic": false,
  "sharePointEdit": false,
  "connectedToSP": false,
  "sharepointListName": null,
  "apiUrl": "",
  "dynamicData": [],
  "dynamicFields": {
    "contentTitle": {
      "mapTo": null,
      "enable": true
    },
    "link": {
      "mapTo": null,
      "enable": true
    },
    "contentSummary": {
      "mapTo": null,
      "enable": true
    },
    "contentBg": {
      "mapTo": null,
      "enable": true
    },
    "contentFooter": {
      "mapTo": null,
      "enable": true
    },
    "dummyObj": {
      "data": {
        "contentTitle": {
          "data": "",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": true,
          "editing": false
        },
        "link": {
          "data": "",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": ""
        },
        "contentFooter": {
          "data": "",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": true,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    }
  }
}

var varStackedblocksData8 = {
  "activeIndex": 0,
  "view": {
    "displayNo": 3,
    "text": "View All",
    "display": true,
    "enable": false
  },
  "data": [
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": {
            "__metadata": {
              "id": "Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)",
              "etag": "\"1\"",
              "type": "SP.Data.PagesListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FirstUniqueAncestorSecurableObject"
              }
            },
            "RoleAssignments": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/RoleAssignments"
              }
            },
            "AttachmentFiles": {
              "results": []
            },
            "ContentType": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ContentType"
              }
            },
            "FieldValuesAsHtml": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsHtml"
              }
            },
            "FieldValuesAsText": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesAsText"
              }
            },
            "FieldValuesForEdit": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/FieldValuesForEdit"
              }
            },
            "File": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/File"
              }
            },
            "Folder": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/Folder"
              }
            },
            "ParentList": {
              "__deferred": {
                "uri": "https://ishareteam3.na.xom.com/sites/Builder/_api/Web/Lists(guid'114daf22-0de7-4616-93bb-99e24c0396df')/Items(1535)/ParentList"
              }
            },
            "Editor": {
              "__metadata": {
                "id": "f67b0a17-25f0-4a6a-8d5b-fb2ad1b3b459",
                "type": "SP.Data.UserInfoItem"
              },
              "Id": 40,
              "Title": "Hadagali, Mudassir /C"
            },
            "FileSystemObjectType": 0,
            "Id": 1535,
            "ContentTypeId": "0x010014C51270B4970541898B193732E3A828",
            "Title": "Who we are",
            "IsExternal": false,
            "InNavigation": true,
            "Url": null,
            "Order0": 0,
            "Description": null,
            "Parent_idId": null,
            "Template_idId": null,
            "Site_idId": 60,
            "ID": 1535,
            "Modified": "2018-06-06T07:44:34Z",
            "Created": "2018-06-06T07:44:34Z",
            "AuthorId": 40,
            "EditorId": 40,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "3be06716-9f95-46c6-b508-02fb23964449"
          }
        },
        "contentSummary": {
          "data": "Check out some amazing tools created by the EMIT community. Created one yourself? Share it with us and we'll post it so you can market it further. <br>&nbsp;",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/259_Who we are_stackedBlocksImage_0.png?x=MjAxOC0wNi0wNlQxMDoyOTowNVo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/259_Who we are_stackedBlocksSourceImage_0.png?x=MjAxOC0wNi0wNlQxMDoyOTowNVo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    },
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "Coming Soon: How do we leverage and support the startup community toward the benefit of ExxonMobil? We're looking at ways to connect us closer to startups and VCs so we can better influence and support this community. <br>&nbsp;",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/259_Who we are_stackedBlocksImage_1.png?x=MjAxOC0wNi0wNlQxMDoyOTowNlo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/259_Who we are_stackedBlocksSourceImage_1.png?x=MjAxOC0wNi0wNlQxMDoyOTowNlo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    },
    {
      "data": {
        "contentTitle": {
          "data": "Title",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": false,
          "editing": false
        },
        "link": {
          "data": "http://www.abc.com",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "Coming Soon: Understanding the problem is the perfect place to start your innovation journey, and that includes understanding the competitive space you're playing in. We're working to develop tools and resources to help you assess and inspire creative directions. <br>",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "assets/images/259_Who we are_stackedBlocksImage_2.png?x=MjAxOC0wNi0wNlQxMDoyOTowNlo=",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": "https://ishareteam3.na.xom.com/sites/Builder/MicrositeAssets/259_Who we are_stackedBlocksSourceImage_2.png?x=MjAxOC0wNi0wNlQxMDoyOTowNlo="
        },
        "contentFooter": {
          "data": "Footer",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": false,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    }
  ],
  "grayBackground": false,
  "isDynamic": false,
  "sharePointEdit": false,
  "connectedToSP": false,
  "sharepointListName": null,
  "apiUrl": "",
  "dynamicData": [],
  "dynamicFields": {
    "contentTitle": {
      "mapTo": null,
      "enable": true
    },
    "link": {
      "mapTo": null,
      "enable": true
    },
    "contentSummary": {
      "mapTo": null,
      "enable": true
    },
    "contentBg": {
      "mapTo": null,
      "enable": true
    },
    "contentFooter": {
      "mapTo": null,
      "enable": true
    },
    "dummyObj": {
      "data": {
        "contentTitle": {
          "data": "",
          "defaultData": "This is the title",
          "placeholder": "Title",
          "enable": true,
          "editing": false
        },
        "link": {
          "data": "",
          "defaultData": "http://www.google.com",
          "placeholder": "http://www.abc.com",
          "externalUrl": true,
          "internalUrl": false,
          "page": ""
        },
        "contentSummary": {
          "data": "",
          "defaultData": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "placeholder": "This is some additional text that accompanies the headline, which could be used to provide a short description.",
          "enable": true,
          "editing": false
        },
        "contentBg": {
          "data": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "defaultData": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "placeholder": "https://ishareteam3.na.xom.com/sites/Builder/PointableCDN/assets/0.0.1/panels/stacked-blocks/fpo_16x9.png",
          "sourceImage": ""
        },
        "contentFooter": {
          "data": "",
          "defaultData": "This is the footer",
          "placeholder": "Footer",
          "enable": true,
          "editing": false,
          "cursorPosition": 100
        }
      },
      "enable": true,
      "editing": false
    }
  }
};

var varFooter001Data= {
  "headerText": "Innovation",
  "kickerText": "Application Kicker",
  "kicker": true,
  "globalPageTree": [
    {
      "Title": "Google",
      "URL": "http://www.google.com"
    },
    {
      "Title": "Youtube",
      "URL": "http://www.youtube.com"
    }
  ],
  "global": false,
  "profile": false,
  "profileInfo": {
    "FirstName": "Firstname",
    "LastName": "Lastname",
    "Children": [
      {
        "Title": "Google",
        "URL": "http://www.google.com"
      },
      {
        "Title": "Google",
        "URL": "http://www.google.com"
      },
      {
        "Title": "Google",
        "URL": "http://www.google.com"
      },
      {
        "Title": "Google",
        "URL": "http://www.google.com"
      }
    ]
  },
  "style": "",
  "pageTree": [
    {
      "Id": 1535,
      "Title": "Who we are",
      "InNavigation": true,
      "IsExternal": false,
      "Order0": 0,
      "Parent_idId": null,
      "Site_idId": 60,
      "Template_idId": null,
      "Url": "home",
      "State": "Whoweare",
      "Description": null
    }
  ]
};


        var data = {
          varCondensedheaderData : varCondensedheaderData,
varImagesliderData1 : varImagesliderData1,
varTextpassageunevenData2 : varTextpassageunevenData2,
varTextpassageunevenData3 : varTextpassageunevenData3,
varTextpassageData4 : varTextpassageData4,
varTextpassage2Data5 : varTextpassage2Data5,
varStackedblocksData6 : varStackedblocksData6,
varStackedblocksData7 : varStackedblocksData7,
varStackedblocksData8 : varStackedblocksData8,
varFooter001Data : varFooter001Data,

        }

        $scope.data = data;
      }
    })();
  