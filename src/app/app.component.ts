import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD

=======
>>>>>>> 838ad4978c80b2147bb12a8355e3594bd35e180d
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
