class GeoLocalizacion{
  
  constructor(){
    this.latitude = 0;
    this.longitude = 0;
    this.altitude = 0;
}
    updateCoord(){    
      this.initMap();
    }   

    initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(-19.257753, 146.823688),
        zoom: 17,
        mapTypeId: 'terrain'
      });
      var src = "http://roxexxiii.github.io/Practica4/Session1/Ejercicio%2014/RutaMejorCalificada.kml"
      map.data.loadGeoJson(src);
  }
}

var geolocalizador = new GeoLocalizacion();