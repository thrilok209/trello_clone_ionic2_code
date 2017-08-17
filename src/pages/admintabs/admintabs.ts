import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { AdminaddingtaskPage } from '../adminaddingtask/adminaddingtask';
import { AdminreviewingtaskPage } from '../adminreviewingtask/adminreviewingtask';
/*
  Generated class for the Admintabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admintabs',
  templateUrl: 'admintabs.html'
})
export class AdmintabsPage {


      tab2Root: any = AdminreviewingtaskPage;
      tab3Root: any = AdminaddingtaskPage;
      tab4Root: any = SettingsPage;

}
