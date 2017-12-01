import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from "@ionic-native/media";

@IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  public music = {};
    private songMedia: MediaObject = null;
    private isMusicPaused = false;

    constructor(
      private mediaPlugin: Media,
      public navCtrl: NavController,
      public navParams: NavParams) {
        this.music = this.navParams.get("music");
    }

    ionViewDidLoad() {

    }

    ionViewWillLeave(){
      this.stopMusic();
    }

    playMusic(){
      if (this.songMedia === null){
        this.songMedia = this.mediaPlugin.create(this.music["music_url"]);
        this.songMedia.play();
      } else {
        if (this.isMusicPaused === true){
          this.songMedia.play();
          this.isMusicPaused = false;
        }
      }
    }

    pauseMusic(){
      if (this.songMedia !== null){
        this.songMedia.pause();
        this.isMusicPaused = true;
      }
    }

    stopMusic(){
      if (this.songMedia !== null){
        this.songMedia.stop();
        this.songMedia.release();
        this.songMedia = null;
      }
    }

  }
