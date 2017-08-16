(function Map(){
      'use strict';



      class MapChelitas extends Polymer.Element {

          static get is() { return 'map-chelitas'; }

          static properties(){
            return {

              latitude:{
                type: String,
                computed: "_changelatitude"
              },

              longitude: {
                type: String,
                computed: "_changelongitude"
              }

            };
          }

          ready(){
            super.ready();
            window.onload = this.getLocation();

          }


        getLocation() {
          console.log("foca1")
          if (navigator.geolocation) {
            navigator.geolocation.watchPosition(this.showPosition);
          } else {
            console.log("Geolocation is not supported by this browser.")
          }
        }

        showPosition(position) {
          console.log(position)
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        }


      }

      window.customElements.define(MapChelitas.is, MapChelitas);
  })();
