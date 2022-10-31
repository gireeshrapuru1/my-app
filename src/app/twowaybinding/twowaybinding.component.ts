import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.less']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    public name:string ="abc";


}
