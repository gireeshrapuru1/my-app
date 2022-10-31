import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.less']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnChanges(_changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }

  ngOnInit(): void {
  }

}
