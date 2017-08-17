import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { MyData } from '../../providers/my-data';
import { AdmindetreviewPage } from '../admindetreview/admindetreview';
/*
  Generated class for the Adminreviewingtask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adminreviewingtask',
  templateUrl: 'adminreviewingtask.html'
})
export class AdminreviewingtaskPage {
  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  taskCompletedBy: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,af: AngularFire, public myData:MyData) {
    this.taskPending = af.database.list('/taskPENDING', { preserveSnapshot: true });
    this.taskCompleted = af.database.list('/taskCompleted');
    this.taskCompletedBy = af.database.list('/taskCompleted/ansby');
    this.taskCompletedBy.subscribe(result =>{
      console.log(result)
    })
  }

whichToReview(key){
  this.navCtrl.push(AdmindetreviewPage,{key});
}

}
