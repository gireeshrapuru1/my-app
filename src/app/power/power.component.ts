import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.less']
})
export class PowerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public num:number=NaN;
  public result:number=0;

  square(){
              this.result=this.num*this.num;

  }
  cube(){
              this.result=this.num*this.num*this.num;
  }

}
