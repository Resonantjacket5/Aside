import { Component, Directive } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MessageComponent } from '../../components/message/message';
import { FirebaseService } from '../../providers/firebase-service';

declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private userName:string="default";
  private messages:Array<any>=[];
  private newMessage:any={};


  private markedMessage:any=undefined;

  constructor(
    public navCtrl: NavController,
    private fb:FirebaseService,
    private alertCtrl: AlertController
  )
  {
    this.tryLogin();
    this.loadx();

    //this.checkState();
  }

  ionViewDidLoad() {
    console.log("Home Page");

  }

  tryLogin()
  {
    console.log("try login");
    if(this.fb.getAuth().user===null)
    {
      this.fb.getAuth().signInAnonymously().catch((err)=>{
        console.error(err);
      });
    }
  }

  checkState()
  {
    this.fb.getAuth().onAuthStateChanged(user=>{
      if(user!== null)
      {
        this.loadx();
      }
    });
  }

  markMessage()
  {

  }

  loadx()
  {
    console.log("try load");
    this.fb.getMessagesRef().on('child_added',(snapshot)=>{
      this.messages.push(snapshot.val());
      console.log(this.messages);
    });
  }

  messageForm()
  {
    console.log(this.newMessage);

    if((this.newMessage.name === undefined) || (this.newMessage.name.length == 0))
    {
      this.presentAlert("New message missing name");
      return;
    }

    if(this.newMessage.text === undefined || this.newMessage.text.length < 10)
    {
      this.presentAlert("New message text too short");
      return;
    }

    this.fb.getMessagesRef().push(this.newMessage);
  }

  presentAlert(title:string){
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
