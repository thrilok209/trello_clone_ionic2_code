import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


import { LoginpagePage } from '../loginpage/loginpage';
import { TabsPage } from '../tabs/tabs';
import { MyApp } from '../../app/app.component';

import { MyData } from '../../providers/my-data';
// MyApp
/*
Generated class for the Settings page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  taskUser: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  user;
  userName:any
  Name;
  NameArr=[];

  constructor(public myData: MyData, public navCtrl: NavController,public af: AngularFire , public alerCtrl: AlertController) {
    // this.af.auth.subscribe(auth =>{ console.log(auth)} );
    this.taskUser = af.database.list('/users');
    this.taskCompleted = af.database.list('/taskCompleted');

  }
  Subtask(){
    // this.myData.usersArr();
      this.myData.CheckingUsercall();

  }
  LogOUT(){
    console.log('Logout called');
    this.af.auth.logout()
    // this.navCtrl.setRoot(LoginpagePage);
  }

}
