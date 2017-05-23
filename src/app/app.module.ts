import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AddActivityPage } from '../pages/addactivity/addactivity';
import { ActivityHomePage } from '../pages/activityhome/activityhome';
import { ActivityPage } from '../pages/activity/activity';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from 'angularfire2';


export const firebaseConfig = {
    apiKey: "AIzaSyApEcDDH_ZJJyn509KkRTA61ZrfZctoDVM",
    authDomain: "ionic-7e72d.firebaseapp.com",
    databaseURL: "https://ionic-7e72d.firebaseio.com",
    projectId: "ionic-7e72d",
    storageBucket: "ionic-7e72d.appspot.com",
    messagingSenderId: "1014332877518"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
	AddActivityPage,
    ActivityHomePage,
    ActivityPage,
	SuggestionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AddActivityPage,
    ActivityHomePage,
    ActivityPage,
	SuggestionPage
  ],
})
export class AppModule {}
