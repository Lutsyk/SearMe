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
  playlRoot = 'PlayLPage'


  constructor(public navCtrl: NavController) {}

}
