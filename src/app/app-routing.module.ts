import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostsComponent } from './posts/posts.component';
import { PowerComponent } from './power/power.component';
import { RatingComponent } from './rating/rating.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, 
    children:[{path:'calculator',component:CalculatorComponent},
              {path:'interpolation',component:InterpolationComponent},
              {path:'event-binding',component:EventbindingComponent},
              {path:'two-way-binding', component:TwowaybindingComponent},
              {path:'rectangle', component:RectangleComponent},
              {path:'square',component:SquareComponent},
              {path:'power',component:PowerComponent},
              {path:'event-registration',component:EventRegistrationComponent},
              {path:'employee-registration',component:EmployeeRegistrationComponent},
              {path:'cart',component:CartComponent},
              {path:'pipes', component:PipesComponent},
              {path: 'cars', component:CarsComponent},
              {path: 'rating', component:RatingComponent},
              {path:'gpay', component:GpayComponent},
              {path:'bank', component:BankComponent},
              {path:'life-cycle-hooks', component:LifeCycleHooksComponent},
              {path:'vehicle',component:VehiclesComponent},
              {path:'posts', component:PostsComponent}
                       ]
},

  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
