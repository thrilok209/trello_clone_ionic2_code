import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { MyData } from '../../providers/my-data';

import {Observable} from 'rxjs';
/*
  Generated class for the Pendingtasktoshow page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pendingtasktoshow',
  templateUrl: 'pendingtasktoshow.html'
})
export class PendingtasktoshowPage {
  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  TodisplayIndet:any;
  usertask=[];
  cuserName;
  taskPendingTodisplay:Observable<any>;

  TaskArr=[];
  count4 =0;
  constructor(public navCtrl: NavController,public af: AngularFire,public params: NavParams,public myData:MyData) {
    this.cuserName=this.myData.Name
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.TodisplayIndet=this.params.get('key');
    console.log("hello bro i am here")
console.log(this.TodisplayIndet+this.cuserName)


    this.taskPending.subscribe(result => {
      //  console.log(result);
       this.TaskArr=result;
      //  console.log(this.TaskArr)

        //  console.log(ele)

    });
  }
  whichToSub2(ans){
    console.log(this.TodisplayIndet)
    let Title = this.TodisplayIndet.title
    let Sub = this.TodisplayIndet.sub
    let Con = this.TodisplayIndet.content
    let userDet = this.TodisplayIndet.userschecked
    let userDET;
    let ansByUser=this.TodisplayIndet.ansby;
    let count = 0;
    let count1 = 0;


    // console.log(userDet)
    console.log(Title)
    console.log(Sub)
    console.log(Con)
    for(let i = 0 ; i<userDet.length ; i++){
      // console.log("insidesdjh")
      if(this.cuserName ==userDet[i] ){
      this.TodisplayIndet.userschecked[i]=""
      }


    }
    if(ansByUser.length==1){
      this.TodisplayIndet.ansby.push(this.cuserName)
    }else{
      for(let i = 0 ; i<ansByUser.length ; i++){
        console.log("insidesdjh")
        if(this.cuserName !=ansByUser[i] ){
          count++
        }else{
          count1++
        }
        }
      if(count>0 && count1==0){
        this.TodisplayIndet.ansby.push(this.cuserName)
      }

    }
    console.log(this.TodisplayIndet.userschecked)
    // console.log(userDet)
    this.taskPending.update(this.TodisplayIndet.$key, {userschecked:this.TodisplayIndet.userschecked ,ansby:this.TodisplayIndet.ansby })
console.log("check here one")
    if(this.TodisplayIndet[this.cuserName]=="a"){
      console.log("ccheck here twom")
      console.log("inside of keycom")
      this.taskCompleted.push({keyPls:this.TodisplayIndet.$key,title:this.cuserName, sub:Title , content:Con , answere:ans , ansby:[this.cuserName], userschecked:this.TodisplayIndet.userschecked , sat:"submited by user" , atm:"1" , atm2:"1"});
    }else{
      let attm1 = parseInt(this.TodisplayIndet.atm)
      console.log(attm1)
      console.log("ccheck here three")
      this.taskCompleted.update(this.TodisplayIndet[this.cuserName],{ answere:ans ,  userschecked:this.TodisplayIndet.userschecked , sat:"submited by user" , atm:attm1});
    }
    // console.log(this.TodisplayIndet.keytaskCom)

    // this.taskPending.remove(this.TodisplayIndet.$key)
    this.navCtrl.pop()


}
}
// for(let i=0;i<this.TaskArr.length;i++){
//  // console.log(this.TaskArr[i].userschecked)
//  for(let j=0;j<this.TaskArr[i].userschecked.length;j++){
//    //  console.log(this.TaskArr[i].userschecked[j])
//     let checkName=this.TaskArr[i].userschecked[j]
//     console.log(this.cuserName)
//    if(  this.cuserName == checkName){
//     //  this.usertask.push(this.TaskArr[i])
//      console.log("inside ch"+ checkName)
//     //  updateItem(key: string, newText: string) {
//         this.taskPending.update(this.TodisplayIndet.$key, { text: newText });
//
//    }

//  }
//  this.taskPendingTodisplay=Observable.from(this.usertask).toArray();
// console.log(this.usertask)
// for(let i=0;i<user.length;i++){
//  if(  this.cuserName == user[i]){
//   this.taskPending.update(this.TodisplayIndet.$key, { userschecked[1].push("") });
// }
//
// }
