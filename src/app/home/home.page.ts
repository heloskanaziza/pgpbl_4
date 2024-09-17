import { Component, OnInit } from '@angular/core';
// mendapatkan lokasi saat ini (latitude dan longitude) pengguna.
import { Geolocation } from '@capacitor/geolocation';
// membuat peta dan menambahkan titik (marker) di peta.
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

@Component({
  // Mendefinisikan komponen
  selector: 'app-home',
  // Mengarahkan ke file HTML yang digunakan sebagai template di komponen
  templateUrl: 'home.page.html',
  // Mengarahkan ke file CSS
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mapView!: MapView;

  // implements OnInit {

  constructor() { }

  // private latitude: number | any ;
  // private longitude: number | any ;

  // public async ngOnInit() {

  //   // lokasi sekarang
  //   // Mengambil lokasi pengguna
  //   const position = await Geolocation.getCurrentPosition();
  //   this.latitude = position.coords.latitude;
  //   this.longitude = position.coords.longitude;

  async ngOnInit() {

    // Membuat peta dengan basemap
    const map = new Map({
      basemap: "topo-vector"
    });

    // Membuat tampilan peta, atur zoom dan pusat tampilan
    // const view = new MapView({
    this.mapView = new MapView ({
      container: "container",
      map: map,
      zoom:  15
      // center: [this.longitude, this.latitude]
    });

    // // Membuat titik (marker)
    // const point = new Point({
    //   longitude: this.longitude,
    //   latitude: this.latitude
    // });

    // const markerSymbol = new SimpleMarkerSymbol({
    //   color: [226, 119, 40],  // warna marker
    //   outline: {
    //     color: [255, 255, 255], // warna outline
    //     width: 1
    //   }
    // });

    // const pointGraphic = new Graphic({
    //   geometry: point,
    //   symbol: markerSymbol
    // });

    // // Menambahkan marker ke peta
    // view.graphics.add(pointGraphic);
  }
}
