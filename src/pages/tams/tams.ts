import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TamsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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


  constructor(public navCtrl: NavController) {}

}
