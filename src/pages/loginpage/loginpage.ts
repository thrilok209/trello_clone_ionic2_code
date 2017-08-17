import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/*

Generated class for the Loginpage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html'
})
export class LoginpagePage {

  constructor(public navCtrl: NavController,public af: AngularFire) {

    // console.log('Inside Home Page');
  }

  loginG() {
    this.af.auth.login({
      provider: AuthProviders.Google,
   method: AuthMethods.Popup,
    });
  }

  loginA(user , passsword) {
    // console.log('Inside Login');
    this.af.auth.login({

      email: user,
      password:'password',
    },
    {
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
  })
  .then(data =>{ console.log(data);
    //  this.navCtrl.push(TabsPage);
   });
  }

}
