import React from 'react'

const Location = ( { location, latitude, longitude }) =>{
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
    const success = (pos) => {
        var crd = pos.coords;
        var locationObj = {
            latitude : crd.latitude,
            longitude : crd.longitude
        }
        location(locationObj)
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      navigator.geolocation.getCurrentPosition(success, error, options)
      return (
          <div>
              <h4>Current Location</h4>
              <p>Lat: {latitude} Lng : {longitude} </p>
          </div>
          
      )
      

}


export default Location
