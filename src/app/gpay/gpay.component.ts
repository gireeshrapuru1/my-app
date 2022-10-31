import { Component, OnInit } from '@angular/core';
import { HdfcService } from '../hdfc.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.less']
})
export class GpayComponent implements OnInit {

  constructor(private _hdfcservice:HdfcService) { }

  ngOnInit(): void {
  }

  public amount:number=0;

  withdraw(){
    this._hdfcservice.withdraw(this.amount);

    alert("withdraw succesfull")

  }
  deposit(){
    this._hdfcservice.deposit(this.amount);
    alert('succesfully deposited')
  }
  balance(){
    alert(this._hdfcservice.getBalance());  

  }

}
