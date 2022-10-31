import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public num1:number=NaN;
  public num2:number=NaN;
  public result:number=0;

  add(){
         this.result= this.num1 + this.num2;
  }
  sub(){
        this.result=this.num1 - this.num2;
  }
  mul(){
        this.result=this.num1*this.num2;
  }
  div(){
        this.result=this.num1/this.num2;
  }


}
