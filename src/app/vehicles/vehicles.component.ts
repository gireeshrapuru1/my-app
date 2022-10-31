import { Component, OnInit } from '@angular/core';
import { VehicleServiceService } from '../vehicle-service.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.less']
})
export class VehiclesComponent implements OnInit {

  public vehicles:any=[];

  constructor(private _vehicleservice:VehicleServiceService) { 

    this._vehicleservice.getVehicles().subscribe(
         
           (data:any)=>{
                this.vehicles=data;
           },
           (err:any)=>{
                alert("Internal Server Error");
           }



    )



  }

  ngOnInit(): void {
  }

}
