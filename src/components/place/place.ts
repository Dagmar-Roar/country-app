import { Component } from '@angular/core';

/**
 * Generated class for the PlaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'place',
  templateUrl: 'place.html'
})
export class PlaceComponent {

  text: string;
  place: Array<{name: any, img: any, monument: any}>;

  constructor() {
    console.log('Hello PlaceComponent Component');
    this.text = 'Hello World';
    this.place = [{
      name: "Paris",
      img: "assets/img/Diaporama_France_1.jpg",
      monument:"Effel Tower"
    },
    {
      name: "Barcelona",
      img: "assets/img/Diaporama_Espagne_2.jpg",
      monument:"Segrada Familia"
    },
    {
      name: "London",
      img: "assets/img/timthumb.jpg",
      monument:"Tamise River"
    },
    {
      name: "Athen",
      img: "assets/img/parthenon.jpg",
      monument:"Parthenon"
    }
    
    ];
  }

}
