(function() {
  'use strict';

  angular
  .module('app')
  .service('panelService', panelService);

  panelService.$inject = ['Mode', 'newSharePointService'];

  function panelService(Mode, newSharePointService) {
    var self = this;
    self.data = {};
    self.spBaseUrl;

    self.isSharepointMapped = function (panelData) {

      for(var key in panelData.dynamicFields) {
        if (
            panelData.dynamicFields[key].hasOwnProperty('mapTo') && 
            panelData.dynamicFields[key].mapTo
          ) {
          return true;
        }
      }
      return false;
    }

    self.setData = function(dataObj) {
      if (!dataObj) return;
      var panelData;
      try {
        if (dataObj.constructor == Object) {
          panelData = dataObj;
        } else if(dataObj.constructor == String) {
          panelData = JSON.parse(dataObj);
        }
      } catch(e) {
        panelData = "";
      }
      return panelData;
    }

    self.setCardColData = function(dataObj, cb) {
      if (!dataObj) return;
      var panelData;
      if (dataObj.constructor == Object) {
          panelData = dataObj;
        } else if(dataObj.constructor == String) {
          panelData = JSON.parse(dataObj);
        }
      if (
          panelData.isDynamic && 
          panelData.apiUrl != "" && 
          self.isSharepointMapped(panelData)
        ) {
       // Dynamic Content
        newSharePointService
        .pullContent(panelData.apiUrl)
        .then(function(result) {
          var dynamicData = [];
          
          dynamicData = self.prepareDynamicObjects(result.data.d.results, panelData);

          panelData.dynamicData = dynamicData;
          cb(panelData, true);
        },
        function(reason) {
          console.error("Error", reason);
        });
      } else {
        cb(panelData, false);
      }
    }

    self.setTableData = function(dataObj, callback) {
      if (!dataObj) return;
      var panelData;
      if (dataObj.constructor == Object) {
          panelData = dataObj;
        } else if(dataObj.constructor == String) {
          panelData = JSON.parse(dataObj)
        }
      if (panelData.apiUrl && panelData.sharepointListName) {
        
        newSharePointService
        .getAllColumnsByListTitle(panelData.sharepointSiteUrl, panelData.sharepointListName)
        .then(
          function(result) {
            panelData.columnNames = result.data.d.results.map( function(a) { return a.Title; } );
            newSharePointService
            .pullContent(panelData.apiUrl)
            .then(
              function(result) {
                panelData.data = result.data.d.results;
                callback(panelData);
                return;
              },
              function(reason) {
                console.error("Error", reason);
              }
            );
          },
          function(reason) {
            console.error("Error", reason);
          }
        )
      } else {
        callback(panelData);
        return;
      }
    }


    self.createObjectFromTemplateAndData = function(template, data, $index) { // the $index is going to be used as is via eval
      var newObj = {};
      for (var key in template) {
        if (template[key + 'choice'] !== undefined && template[key + 'choice'] !== 'Static') {
          if (template[key + 'choice'].indexOf('$baseUrl') >= 0) {
            newObj[key] = eval("data" + template[key + 'choice'].replace('$baseUrl', ''));
            if (newObj[key].indexOf("://") == -1) {
              newObj[key] = self.extractDomain() + newObj[key];
            }
          } else {
            newObj[key] = eval("data" + template[key + 'choice']);
          }
        } else if (template[key].constructor !== Object) {
          newObj[key] = template[key];
        } else {
          newObj[key] = self.createObjectFromTemplateAndData(template[key], data, $index);
        }
      }
      return newObj;
    }

    self.extractDomain = function() {
      var domain;
      var matches = self.data.apiUrl.match(/^(https?\:\/\/[^\/?#]+)(?:[\/?#]|$)/i);
      if (matches && matches[0])
        domain = matches[0] + '/';
      else
        domain = '';
      return domain;
    }

    self.prepareDynamicObjects = function(results, panelData) {
      var dynamicData = [];
      var spBaseUrl = self.getBaseApiUrl(panelData.apiUrl);
      results.forEach(function(item, index) {
        var repeatingElements = JSON.parse(JSON.stringify(panelData.dynamicFields.dummyObj));
        for(var propKey in repeatingElements.data) {
          if (!panelData.dynamicFields[propKey].mapTo) {
            repeatingElements.data[propKey].enable = panelData.dynamicFields[propKey].enable;
            continue;
          }
          var columnName = panelData.dynamicFields[propKey].mapTo;
          if (columnName == "Attachments" && item['AttachmentFiles'].results.length != 0 ) {
            repeatingElements.data[propKey].data = spBaseUrl + item['AttachmentFiles'].results[0].ServerRelativeUrl;
            repeatingElements.data[propKey].enable = panelData.dynamicFields[propKey].enable;
          } else {
            repeatingElements.data[propKey].data = item[columnName];
            repeatingElements.data[propKey].enable = panelData.dynamicFields[propKey].enable;
          }
        }
        dynamicData.push(repeatingElements);
      });
      return dynamicData;
    }

    self.getBaseApiUrl = function (url) {
      var ApiURL = parseUri(url);
      var origin = ApiURL.protocol + "://" + ApiURL.host + (ApiURL.port ? ':' + ApiURL.port : '');
      self.spBaseUrl = origin;
      return origin;
    }

    self.getMode = function(){
      return Mode;
    }

    self.setMode = function(newMode){
      Mode = newMode;
    }
  }
})();
