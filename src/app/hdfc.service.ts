import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HdfcService {

  constructor() { }

  public balance:number=0;

  deposit(amount:number){
           this.balance=this.balance+amount;
  }
  withdraw(amount:number){
           this.balance=this.balance-amount;
  }
  getBalance(){
        return this.balance;
  }
}
