import { Component, OnInit } from '@angular/core';
import { withEnabledBlockingInitialNavigation } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public name:string="";
  public price:number=0;
  public quantity:number=0;

  public lists:any=[
          {name:'book',price:500,quantity:2}
  ]

  c(){
         
          let list ={
            name:this.name,
            price:this.price,
            quantity:this.quantity    
              }  
              
        if(this.name!="" && this.price>0 && this.quantity>0){  
        
            this.lists.push(list); 
           
             this.name="";
             this.price=0;
             this.quantity=0;

            alert("succesfully added to cart");
         }

  }
  delete(i:number){
             this.lists.splice(i,1);

  }

}
