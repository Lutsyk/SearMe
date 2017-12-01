import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  channelId = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ';
    playlists: Observable<any[]>;

    constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController) { }

    searchPlaylists() {
      this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
      this.playlists.subscribe(data => {
        console.log('playlists: ', data);
      }, err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'No Playlists found for that Channel ID',
          buttons: ['OK']
        });
        alert.present();
      })
    }

    openPlaylist(id) {
      this.navCtrl.push('PlayLPage', {id: id});
    }
  }
