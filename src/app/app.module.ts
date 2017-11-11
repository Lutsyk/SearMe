import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule }from 'angularfire2/auth';
<<<<<<< HEAD

=======
>>>>>>> 838ad4978c80b2147bb12a8355e3594bd35e180d

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from "./app.firebase.config";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
<<<<<<< HEAD
    MyApp,
=======
    MyApp
>>>>>>> 838ad4978c80b2147bb12a8355e3594bd35e180d
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
