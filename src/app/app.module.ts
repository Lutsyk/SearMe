import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule }from 'angularfire2/auth';


import { SocialSharing } from "@ionic-native/social-sharing";
import { Media } from "@ionic-native/media";
import { MusicProvider } from '../providers/music/music';
import { MusicPlayerPage } from "../pages/music-player/music-player";


import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { YtProvider } from '../providers/yt/yt';
import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@NgModule({
  declarations: [
    MyApp,
    MusicPlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPlayerPage
  ],
  providers: [
    StatusBar,
    Media,
    SocialSharing,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    YoutubeVideoPlayer,
    YtProvider,
    MusicProvider
  ]
})
export class AppModule {}
