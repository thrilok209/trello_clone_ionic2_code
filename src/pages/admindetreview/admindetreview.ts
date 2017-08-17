import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import {Observable} from 'rxjs';
import { MyData } from '../../providers/my-data';
// AdminaddingtaskPage
import { AdminaddingtaskPage } from '../adminaddingtask/adminaddingtask';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

/*
  Generated class for the Admindetreview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admindetreview',
  templateUrl: 'admindetreview.html'
})
export class AdmindetreviewPage {
  // cuserName;
  taskPendingTodisplay:Observable<any>;
  taskPending: FirebaseListObservable<any>;
  curtaskPending: FirebaseObjectObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  taskUser: FirebaseListObservable<any>;
  TodisplayCOMIndet:any;

  userSchecked;
  userlsitfrompendingtask=[]
    nameArr=[]
    userName=[]
  constructor(public navCtrl: NavController,public af: AngularFire,public params: NavParams,public myData:MyData) {
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.TodisplayCOMIndet=this.params.get('key');
    this.curtaskPending= af.database.object('/taskPENDING/'+this.TodisplayCOMIndet.keyPls);
    this.taskUser = af.database.list('/users');
    this.curtaskPending.subscribe(results=>{
      return this.userlsitfrompendingtask=results.userschecked
    })
    this.taskUser.subscribe(result=>{
      return this.nameArr=result

    })
    for(let i = 0 ; i<this.nameArr.length;i++){
      this.userName[i]=(this.nameArr[i].name)
      // console.log("hello")

    }
    // console.log(this.userName)
    // this.cuserName=this.myData.Name

}

  whichToSub3(){
    this.navCtrl.pop()
  }

  whichToSub2(key){
    let userGiven =this.TodisplayCOMIndet.userschecked
    let userToAdd =this.userSchecked;
    let ansGivenBy = this.TodisplayCOMIndet.ansby
    let Newusers ;
    let keyOfTask = this.TodisplayCOMIndet.keyPls
    let keycompletedtask = this.TodisplayCOMIndet.keytaskCom
    let ansedbyusername=this.TodisplayCOMIndet.title
    // console.log(userGiven)

    // console.log(userToAdd)
    // console.log(ansGivenBy)
    // console.log(keyOfTask)

    // console.log(userGiven)
    let count3 =0;
    for(let i = 0 ; i<this.userlsitfrompendingtask.length ; i++){
      if(this.userlsitfrompendingtask[i]==this.TodisplayCOMIndet.title){
        count3++
        return
      }
      if(this.userlsitfrompendingtask[i]=="" && count3==0){
        console.log("inside of admindet user.llenght")
       this.userlsitfrompendingtask[i]=this.TodisplayCOMIndet.title
       Newusers=this.userlsitfrompendingtask
      }

    }
    console.log(this.userlsitfrompendingtask)
    let attm2 =  parseInt(this.TodisplayCOMIndet.atm2) +1
    let ansedbyusername1={userschecked:Newusers , atm:attm2}
    let username=this.TodisplayCOMIndet.$key
    ansedbyusername1[this.TodisplayCOMIndet.title]=username
    let attm =  parseInt(this.TodisplayCOMIndet.atm2) +1
    this.taskPending.update(keyOfTask, ansedbyusername1)
    this.taskCompleted.update(this.TodisplayCOMIndet.$key,{sat:"Send Back To user" , atm2:attm})
    this.navCtrl.pop()
  }
completedtask(){
  this.taskCompleted.update(this.TodisplayCOMIndet.$key,{sat:"Completed"})
  this.navCtrl.pop()
}

}
