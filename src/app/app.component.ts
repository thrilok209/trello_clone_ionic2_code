import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginpagePage } from '../pages/loginpage/loginpage';

import { AdmintabsPage } from '../pages/admintabs/admintabs';





@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  tasks: FirebaseListObservable<any>;

  constructor(platform: Platform, private af: AngularFire) {
      // this.tasks = af.database.list('/taska');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.af.auth.subscribe(auth =>{
        console.log(auth);
        if(auth!= null){
          if(auth.auth.email!='msomkarnath@gmail.com'){
          //   console.log('setting root as TabsPage');
            this.rootPage = TabsPage;
          }
          if(auth.auth.email!='teacher@gmail.com'){
            this.rootPage = TabsPage;
          }else{
            this.rootPage = AdmintabsPage;
          }

    } else {
        this.rootPage = LoginpagePage;
    }} );
    });
  }
}
