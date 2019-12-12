class GeoLocalizacion{
  
  constructor(){
    this.latitude = 0;
    this.longitude = 0;
    this.altitude = 0;
}
    updateCoord(){    
      this.latitude = parseFloat(document.getElementById("latitud").value);
      this.longitude = parseFloat(document.getElementById("longitud").value);
      
      this.initMap();
    }   

    initMap(){
      var location = {lat: this.latitude, lng: this.longitude};
      var map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: location});
      var marker = new google.maps.Marker({position: location, map: map});
    }

}
var geolocalizador = new GeoLocalizacion();