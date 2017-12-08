import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tams',
  templateUrl: 'tams.html'
})
export class TamsPage {

  searchRoot = 'SearchPage'
  artistRoot = 'ArtistPage'
  albumsRoot = 'AlbumsPage'
  favoriteRoot = 'FavoritePage'
  settingsRoot = 'SettingsPage'
  listRoot = 'ListPage'


  constructor(public navCtrl: NavController) {}

}
