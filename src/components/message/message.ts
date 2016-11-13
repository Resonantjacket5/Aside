import { Component, Input } from '@angular/core';

/*
  Generated class for the Message component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  @Input()
  name:string;
  @Input()
  text:string;
  constructor() {
    console.log('Hello Message Component');
    //console.log(this.data)
  }

}
