import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import * as firebase from '../../node_modules/firebase/ap';
import * as firebase from 'firebase';
//declare var firebase: any;



/*
  Generated class for the FirebaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseService {
  public auth:any;
  private database:any;
  constructor(public http: Http) {
    console.log('Hello FirebaseService Provider');
    console.log(firebase);
    var config = {
      apiKey: "AIzaSyDp1xVd9C_Pm5FHHfHyzHPERj7qZE2mdt0",
      authDomain: "aside-7ad52.firebaseapp.com",
      databaseURL: "https://aside-7ad52.firebaseio.com",
      storageBucket: "aside-7ad52.appspot.com",
      messagingSenderId: "119238752997"
    };
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.database = firebase.database();
  }

  getAuth(){
    console.log("auth called");
    console.log(this.auth);
    return this.auth;
  }

  getMessagesRef()
  {
    return this.database.ref('messages');
  }

}
