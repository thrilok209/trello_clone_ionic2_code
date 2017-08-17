import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public af: AngularFire) {
  //  this.af.auth.subscribe(auth => console.log(auth));
   console.log('Inside Home Page');
  }


}
