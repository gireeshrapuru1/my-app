import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.less']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public name:string="";
  public age:number=0;
  public company:string="";
  public package:number=0;

  public employees:any=[
        {name:'ajay',age:20,company:'tcs',package:10}
  ]

  register(){
             let employee={
              name:this.name,
              age:this.age,
              company:this.company,
              package:this.package

             }

             if(this.name!=""&&this.age>0&&this.company!=""&&this.package>0){
             this.employees.push(employee);
          
             this.name="";
             this.age=0;
             this.company="";
             this.package=0;
             
             alert("Registered Succesfully !!!");
             }

  }
  delete(i:number){
           this.employees.splice(i,1);
  }


}
