import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { PendingtasktoshowPage } from '../pendingtasktoshow/pendingtasktoshow';
import {Observable} from 'rxjs';
import { MyData } from '../../providers/my-data';
/*
  Generated class for the Taskpending page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-taskpending',
  templateUrl: 'taskpending.html'
})
export class TaskpendingPage {
  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  usertask=[];
  taskPendingTodisplay:Observable<any>;
  cuserName;
  TaskArr=[];
  constructor(public myData: MyData,public navCtrl: NavController,af: AngularFire, ) {
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.cuserName=this.myData.Name
    this.taskPending.subscribe(result => {
      //  console.log(result);
       this.TaskArr=result;
       this.usertask=[];
      //  console.log(this.TaskArr)

        //  console.log(ele)
         for(let i=0;i<this.TaskArr.length;i++){
          // console.log(this.TaskArr[i].userschecked)
          for(let j=0;j<this.TaskArr[i].userschecked.length;j++){
            //  console.log(this.TaskArr[i].userschecked[j])
             let checkName=this.TaskArr[i].userschecked[j]
             console.log(this.cuserName)
            if(  this.cuserName == checkName){
              this.usertask.push(this.TaskArr[i])
              console.log("inside ch"+ checkName)
            }
         }
        }
        console.log(this.usertask)
        return this.taskPendingTodisplay=Observable.from(this.usertask).toArray();
    });
    console.log(this.cuserName)

  }

  whichToSub(key){

   this.navCtrl.push(PendingtasktoshowPage,{key});
  //  this.pendingtasktoshowPage.whichToShow(key);
  }

  // ionViewDidLoad() {
  //   console.log('Hello TaskpendingPage Page');
  // }

}
