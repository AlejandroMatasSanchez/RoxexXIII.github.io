class GeoLocalizacion{
  
  constructor(){
    this.latitude = 0;
    this.longitude = 0;
    this.altitude = 0;
}
  getUbicacion(position) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.showPosition); 
    }
  }
    showPosition(position){    
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      altitude = position.coords.altitude;

      var latitude_text = document.getElementById("latitude");
      var longitude_text = document.getElementById("longitude");
      var altitude_text = document.getElementById("altitude");

      longitude_text.innerHTML = "Longitude is " + longitude;
      latitude_text.innerHTML = "Latitude is " + latitude;
      altitude_text.innerHTML = "Altitude is " + altitude;
  }   
}

var geolocalizador = new GeoLocalizacion();