import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire} from 'angularfire2';

@Component({
  selector: 'page-activity-home',
  templateUrl: 'activityhome.html'
})
export class ActivityHomePage {
  private actname:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af: AngularFire)
  {
    //Get Data From Previous Page
    this.actname = navParams.get('name').charAt(0).toUpperCase() + navParams.get('name').slice(1);
  }



  deleteActivityPrompt(ActID) {
    let confirm = this.alertCtrl.create({
      title: 'Delete activities',
      message: ' Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.deleteActivity(ActID);
            this.navCtrl.pop();
          }
        },
        {
          text: 'No',
          handler: () => {
            //Do Nothing
          }
        }
      ]
    });
    confirm.present();
  }
				
  deleteActivity(ActID)
  {
    this.af.database.list('/activities').remove(ActID);
  }

}
