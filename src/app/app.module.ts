import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessageComponent } from '../components/message/message';
import { FirebaseService } from '../providers/firebase-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessageComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [FirebaseService]
})
export class AppModule {}
