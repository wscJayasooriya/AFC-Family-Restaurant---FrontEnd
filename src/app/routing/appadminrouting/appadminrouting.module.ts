import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../admin-views/main/main.component';
import {DashboardComponent} from '../../admin-views/dashboard/dashboard.component';
import {EmployeeComponent} from '../../admin-views/employee/employee.component';
import {ViewCommentComponent} from '../../admin-views/view-comment/view-comment.component';
import {VehicleComponent} from '../../admin-views/vehicle/vehicle.component';
import {AdminLoginComponent} from '../../admin-views/admin-login/admin-login.component';
import {CommentService} from '../../services/comment.service';
import {AuthGuard} from '../../guards/auth.guard';
import {AuthService} from '../../services/auth.service';
import {MealComponent} from '../../admin-views/meal/meal.component';
import {ViewUsersComponent} from '../../admin-views/view-users/view-users.component';
import {CustomerService} from '../../services/customer.service';

const appadminroutes: Routes = [
  {path: 'login',
    component : AdminLoginComponent,
  },
  {path: 'main', component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'manage-employee', component: EmployeeComponent},
      {path: 'view-comment', component: ViewCommentComponent},
      {path: 'manage-vehicle', component: VehicleComponent},
      {path: 'manage-meal', component: MealComponent},
      {path: 'view-user', component: ViewUsersComponent}
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appadminroutes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    CommentService,
    CustomerService
  ]
})
export class AppadminroutingModule { }
