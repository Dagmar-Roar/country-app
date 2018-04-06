import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { CountryPage } from '../country/country';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  countries: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

  countryTapped(event, country){
    this.navCtrl.push(CountryPage, {
      country : country
    });
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  
}
