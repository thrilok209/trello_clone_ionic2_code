import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import {Observable} from 'rxjs';
import { MyData } from '../../providers/my-data';

/*
  Generated class for the Taskcompleted page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-taskcompleted',
  templateUrl: 'taskcompleted.html'
})
export class TaskcompletedPage {
  usertask=[];
  taskCompletedTodisplay:Observable<any>;
  cuserName;
  TaskArr=[];
  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,af: AngularFire, public myData:MyData ) {
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.cuserName=this.myData.Name
    // this.taskPending.subscribe(result => {
    //   //  console.log(result);
    //    this.TaskArr=result;
    //   //  console.log(this.TaskArr)
    //
    //     //  console.log(ele)
    //      for(let i=0;i<this.TaskArr.length;i++){
    //       // console.log(this.TaskArr[i].userschecked)
    //       for(let j=0;j<this.TaskArr[i].userschecked.length;j++){
    //         //  console.log(this.TaskArr[i].userschecked[j])
    //          let checkName=this.TaskArr[i].userschecked[j]
    //         //  let atmcheck1=this.TaskArr[i]
    //         //  let atmcheck2=this.TaskArr[i]
    //          console.log("hello bro i am here")
    //         //  console.log(atmcheck1)
    //         //  console.log(atmcheck2)
    //          console.log("hello bro i am bye")
    //          console.log(this.cuserName)
    //         if(  this.cuserName == checkName  ){
    //           this.usertask.push(this.TaskArr[i])
    //           console.log("inside ch "+ checkName)
    //         }
    //      }
    //     }
    //     this.taskCompletedTodisplay=Observable.from(this.usertask).toArray();
    //    console.log(this.usertask)
    // });
    this.taskCompleted.subscribe(result => {
console.log(result);
this.TaskArr=result;
this.usertask=[]
for(let i=0;i<this.TaskArr.length;i++){
  if(this.TaskArr[i].title==this.cuserName){
    if(this.TaskArr[i].atm==this.TaskArr[i].atm2){
      this.usertask.push(this.TaskArr[i])

    }
  }
}
for(let i=0;i<this.usertask.length;i++){
  if(this.usertask[i].sat=="submited by user"){
    this.usertask[i].sat="UNDER INSPECTION"
  }
  if(this.usertask[i].sat=="Send Back To user"){
    this.usertask[i].sat="Check your pending assignment"
  }
  if(this.usertask[i].sat=="Completed"){
    this.usertask[i].sat=" Assignment closed"
  }
}
console.log(this.usertask)
this.taskCompletedTodisplay=Observable.from(this.usertask).toArray();
    });
    console.log(this.cuserName)
  }

}
