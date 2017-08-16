(function geolocalization(){
    'use strict';

    class GeolocalizationCords{
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(this.showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        showPosition(position) {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude)
        }

    }

    let geo = new GeolocalizationCords();
    window.onload = geo.getLocation();

})();
