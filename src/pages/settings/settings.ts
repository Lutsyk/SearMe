import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }


  logout(){
    this.app.getRootNav().setRoot(LoginPage);
  }

}
