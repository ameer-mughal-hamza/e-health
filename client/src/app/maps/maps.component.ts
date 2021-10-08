import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyle';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  private map: google.maps.Map | undefined

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCtsRFMkSUQi0Fg2jIS1FuMewRsKugmXKw'
    })

    loader.load().then(() => {

      const location = { lat: 50.8326, lng: 4.3890 }

      this.map = new google.maps.Map(<HTMLDivElement>document.getElementById("map"), {
        center: location,
        zoom: 6,
        styles: styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

}
