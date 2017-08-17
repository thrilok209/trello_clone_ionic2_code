import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {
  taskUser: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  user;
  userName:any
  Name;
  NameArr=[];
  USERSARRAY=[];
  constructor(public http: Http ,public af: AngularFire, public alerCtrl: AlertController ) {

    this.taskUser = af.database.list('/users');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.af.auth.subscribe(auth =>{
      this.userName = auth.auth.email
      this.Name = this.userName.split("@")
      this.Name = this.Name[0]
      this.user=auth.auth.email
    });
    this.taskUser.subscribe(result => { this.NameArr=result});
  }
  usersArr(){

    console.log("inside data")
      console.log(this.NameArr)

  }
  CheckingUsercall(){
    let NAME =this.Name
    let UseR:any = this.user
    let test = this.alerCtrl
    let TaskUser =this.taskUser
    let count=0;
    let count1=0
    this.NameArr.forEach(function(ele){
      // console.log(ele.name)
      if(ele.name==NAME){
        let alert = test.create({
          title: 'Already Registed',
          message: '',
          buttons: ['Close']
        });
        alert.present()
        count++



      }else{

        count1++
      }
    });
    if(count==0){
      let alert = test.create({
        title: 'Congo You Have Registed',
        message: '',
        buttons: ['Close']
      });
      alert.present()
      TaskUser.push({username:UseR , name:NAME})

    }
    // console.log(count +"count1= "+ count1)
  }
  }
