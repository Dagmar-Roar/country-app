import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CountryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  
  selectedCountry: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider) {
    this.selectedCountry = navParams.get('country');
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

}
