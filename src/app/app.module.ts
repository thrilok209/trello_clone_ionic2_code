import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TaskcompletedPage } from '../pages/taskcompleted/taskcompleted';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { TaskpendingPage } from '../pages/taskpending/taskpending';
import { SettingsPage } from '../pages/settings/settings';
import { PendingtasktoshowPage } from '../pages/pendingtasktoshow/pendingtasktoshow';
import { AdmintabsPage } from '../pages/admintabs/admintabs';
import { AdmindetreviewPage } from '../pages/admindetreview/admindetreview';
// import { AdmintaskaddingPage } from '../pages/admintaskadding/admintaskadding';
import { AdminaddingtaskPage } from '../pages/adminaddingtask/adminaddingtask';
import { AdminreviewingtaskPage } from '../pages/adminreviewingtask/adminreviewingtask';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MyData } from '../providers/my-data';
// MyData
// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA7ojNVei_llY4jT8T39SlLegJz2G9smkA',
  authDomain: 'ionic-todo-8a73b.firebaseapp.com',
  databaseURL: 'https://ionic-todo-8a73b.firebaseio.com/',
  storageBucket: '<your-storage-bucket>'
};

const myFirebaseAuthConfig = {
  // provider: AuthProviders.Password,
  // method: AuthMethods.Password
  provider: AuthProviders.Google,
  method: AuthMethods.Popup,
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TaskcompletedPage,
    TaskpendingPage,
    LoginpagePage,
    SettingsPage,
    PendingtasktoshowPage,
    AdmintabsPage,
    AdminaddingtaskPage,
    AdminreviewingtaskPage,
    AdmindetreviewPage


    // AdmintaskaddingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TaskcompletedPage,
    TaskpendingPage,
    LoginpagePage,
    SettingsPage,
    PendingtasktoshowPage,
    AdmintabsPage,
    AdminaddingtaskPage,
    AdminreviewingtaskPage,
    AdmindetreviewPage


    // AdmintaskaddingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},MyData,PendingtasktoshowPage]
})
export class AppModule {}
