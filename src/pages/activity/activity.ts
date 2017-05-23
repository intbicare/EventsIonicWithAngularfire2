import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddActivityPage } from '../addactivity/addactivity';
import { ActivityHomePage } from '../activityhome/activityhome';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Activities page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actvity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  private activities : Array<any>;
  private categoryList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire)
  {
    this.initDatabasePath(af);
    this.initDataFromDB();
  }


  initDataFromDB ()
  {
    this.af.database.list('/activities', { preserveSnapshot: true})
      .subscribe(snapshots=>{
          this.clearList();
          snapshots.forEach(snapshot => {
            this.activities.push({
             name: snapshot.val()['name'],
            });
         });
      });
  }

  clearList ()
  {0
    this.activities = Array();
  }

  initDatabasePath (af: AngularFire) : void
  {
    this.categoryList = af.database.list('/activities');
  }

  showNewActivities()
  {
    this.navCtrl.push(AddActivityPage);
  }

  showActivityDetail (name:string)
  {
    this.navCtrl.push(ActivityHomePage, {
      name : name,
    });
  }
}
