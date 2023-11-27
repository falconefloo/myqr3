import { Component, OnInit } from '@angular/core';

declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})  
export class MapaPage implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // Intenta obtener el elemento con el ID "map"
    const mapEle: HTMLElement | null = document.getElementById('map');

    if (mapEle) {
      // Si el elemento existe, crea el mapa
      const myLatLng = { lat:  -33.6844, lng:  -71.2168 };
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 12
      });

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
        const marker = {
          position: {
            lat:  -33.6844,
            lng:  -71.2168
        },
          title: 'punto uno'
        };
          this.addMarker(marker);


      });
    }
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
}