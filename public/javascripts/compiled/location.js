'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Location = (function () {
  function Location(coordinates) {
    _classCallCheck(this, Location);

    this.longitude = coordinates.longitude;
    this.latitude = coordinates.latitude;
  }

  _createClass(Location, [{
    key: 'show',
    value: function show() {
      this.showEachCoordinate();
      this.showMap();
    }
  }, {
    key: 'showEachCoordinate',
    value: function showEachCoordinate() {
      $('#longitude').empty().text(this.longitude);
      $('#latitude').empty().text(this.latitude);
    }
  }, {
    key: 'showMap',
    value: function showMap() {
      var mapCanvas = document.getElementById('map_canvas');

      var mapOptions = {
        center: new google.maps.LatLng(this.latitude, this.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $('#map_canvas').empty();

      new google.maps.Map(mapCanvas, mapOptions);
    }
  }], [{
    key: 'showCurrent',
    value: function showCurrent() {
      navigator.geolocation.getCurrentPosition(function (position) {
        var location = new Location(position.coords);

        location.show();
      });
    }
  }]);

  return Location;
})();
