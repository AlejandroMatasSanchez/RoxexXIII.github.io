class GeoLocalizacion{
  
  constructor(){
    this.latitude = 0;
    this.longitude = 0;
    this.altitude = 0;
}
    updateCoord(){    
      var kml = document.getElementById("archivos").files[0];   
      console.log(kml);
      this.initMap();
    }   

    initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(-19.257753, 146.823688),
        zoom: 2,
        mapTypeId: 'terrain'
      });

      var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });
    }


}
var geolocalizador = new GeoLocalizacion();