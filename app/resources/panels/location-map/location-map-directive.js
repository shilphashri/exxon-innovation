(function () {
  'use strict';

  angular
  .module('app')
  .directive('locationMap', locationMap);

  locationMap.$inject = ["panelService"];

  function locationMap(panelService) {

    var directive = {
      scope: {
        panelData: '@',
        mode: '@',
        uniqueId: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/location-map/location-map.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.random = Math.random();
      
      /* If there is no data given to the directive then take it from its own service */
      if (scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      }

      scope.checkLocationChange = function(newValue, oldValue) {
        var newAddress = panelService.setData(newValue);
        var oldAddress = oldValue;
        var change = true;
        for (var i = 0; i < oldAddress.locationInfo.length; i++) {
          if (oldAddress.locationInfo[i].address == newAddress.locationInfo[i].address) {
            change = false;
          }
        }
        if (change == false) {
          return false;
        } else {
          return true;
        }
      }

      scope.showMap = function() {
        var map = new google.maps.Map(document.getElementById('map'+ scope.random), {
          zoom: 12,
          // center: new google.maps.LatLng(-33.92, 151.25),
          center: new google.maps.LatLng(scope.data.locationInfo[0]['latitude'], scope.data.locationInfo[0]['longitude']),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;
        scope.data.locationInfo.forEach(function (element, index) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(element['latitude'], element['longitude']),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
              infowindow.setContent(element['address']);
              infowindow.open(map, marker);
            }
          })(marker, i));
        });
      }

      scope.showResult = function(result, element) {
        // element['latitude'] = result.geometry.location.lat();
        // element['longitude'] = result.geometry.location.lng();
        scope.data.locationInfo[0]['latitude'] = result.geometry.location.lat();
        scope.data.locationInfo[0]['longitude'] = result.geometry.location.lng();

        scope.showMap();
      }

      scope.updateLocation = function() {
        scope.data.locationInfo.map(function (element, index) {
          if (element["latitude"] && element["longitude"]) {
            scope.getLatitudeLongitude(scope.showResult, element);
            scope.showMap();
          }
          else {
            scope.getLatitudeLongitude(scope.showResult, element);
          }
        });
      }

      scope.getLatitudeLongitude = function(callback, element) {
        // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
        element['address'] = element['address'] || 'USA';
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
          geocoder.geocode({
            'address': element['address']
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              callback(results[0], element);
            }
          });
        }
      }

      /* Update the map with the map data */
      setTimeout(function() {
        scope.showMap();
      }, 10)

      var locations = scope.data.locationInfo;

      scope.updateLocation();
    }
  }
})();