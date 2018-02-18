import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import firebase from "firebase";
import { Http } from "@angular/http";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the ClientlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-clientlocation",
  templateUrl: "clientlocation.html"
})
export class ClientlocationPage {
  public user = {} as User;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public afd: AngularFireDatabase,
    public firebaseProvider: FirebaseProvider,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ClientlocationPage");
   var dataPromise = this.storage.get("CurrentUser");
   dataPromise.then(data => {
     this.user.email = data.email;
     this.user.password = data.password;
     this.user.fullName = data.fullName;
     this.user.role = data.role;
   });

  }
}
