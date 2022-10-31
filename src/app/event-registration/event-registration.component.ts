import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.less']
})
export class EventRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:string= "";
  public names:string[]=['ajay'];

  registration(){
            if(this.name!="" ){
                 
              this.names.push(this.name);
            }
               this.name="";
  }
  delete(){
                  this.names.pop();
  }

}
