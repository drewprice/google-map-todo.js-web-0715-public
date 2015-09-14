class Location {
  constructor(coordinates) {
    this.longitude = coordinates.longitude;
    this.latitude  = coordinates.latitude;
  }

  show() {
    this.showEachCoordinate();
    this.showMap();
  }

  showEachCoordinate() {
    $('#longitude').empty().text(this.longitude);
    $('#latitude').empty().text(this.latitude);
  }

  showMap() {
    let mapCanvas = document.getElementById('map_canvas');

    let mapOptions = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $('#map_canvas').empty();

    new google.maps.Map(mapCanvas, mapOptions);
  }

  static showCurrent() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let location = new Location(position.coords);

      location.show();
    });
  }
}
