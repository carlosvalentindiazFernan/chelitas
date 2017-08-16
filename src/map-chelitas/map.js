(function Map(){
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
          let map =document.getElementById('map');
        }
      }

      let geo = new GeolocalizationCords
      window.onload = geo.getLocation();


      class MapChelitas extends Polymer.Element {
          static get is() { return 'map-chelitas'; }
          ready(){
            super.ready();
            console.log("ready")

            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDksNVtDMLV9M0-Ut2uvEwJQ7JlW__8ZEA&libraries=places&callback=initMap';
            document.body.appendChild(script);
          }

      }

      window.customElements.define(MapChelitas.is, MapChelitas);
  })();
