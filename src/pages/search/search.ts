import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> 838ad4978c80b2147bb12a8355e3594bd35e180d

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
<<<<<<< HEAD
  items;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to tastySound, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    })
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

>>>>>>> 838ad4978c80b2147bb12a8355e3594bd35e180d
}
