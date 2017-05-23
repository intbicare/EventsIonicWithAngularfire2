import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'addactivity',
  templateUrl: 'addactivity.html',
})
export class AddActivityPage {

  private ActivityList: FirebaseListObservable<any>;
  private activities = {};

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.initDatabasePath(af);
  }


  initDatabasePath (af: AngularFire) : void
  {
    this.ActivityList = af.database.list('/activities/');
  }

  gotoHome ()
  {
    this.navCtrl.pop();
  }

  submitActivity ()
  {
    //Save the activities here !
    this.af.database.object('/activities/' + this.activities['name']).set({
      name : this.activities['name'],
    }).then (newActivity => {
      this.gotoHome();
    }, error => {
      console.log(error)
    });
  }

}
