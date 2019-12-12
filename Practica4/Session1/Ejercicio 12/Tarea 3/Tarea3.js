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
      var map_img = document.getElementById("map");

      if(longitude != null){
        longitude_text.innerHTML = "Longitude is " + longitude;
      }else
        longitude_text.innerHTML = "Longitude is not available at the time"
      
      if(latitude != null){
        latitude_text.innerHTML = "Latitude is " + latitude;
      }else
        latitude_text.innerHTML = "Longitude is not available at the time"
      
      if(altitude != null){
        altitude_text.innerHTML = "Altitude is " + altitude;
      }else
        altitude_text.innerHTML = "Altitude is not available at the time" 

      map_img.setAttribute("src", 
      "https://maps.googleapis.com/maps/api/staticmap?center="+ latitude + "," + longitude +
       "&markers=color:red%7Clabel:C%7C"+ latitude + "," + longitude +
       "&zoom=17&size=600x400&key=AIzaSyA1RqkZzlCaTCxiI_rGSqKSy6ZJfEpjVj4");
    }   

}
var geolocalizador = new GeoLocalizacion();