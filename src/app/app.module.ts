import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { MenusComponent } from './views/menus/menus.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { SpecialtiesComponent } from './views/specialties/specialties.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { FooterComponent } from './views/footer/footer.component';
import { MongolianConerComponent } from './views/menus/mongolian-coner/mongolian-coner.component';
import { KoththuComponent } from './views/menus/koththu/koththu.component';
import { NoodlesComponent } from './views/menus/noodles/noodles.component';
import { SoupKettleComponent } from './views/menus/soup-kettle/soup-kettle.component';
import { BurgerConerComponent } from './views/menus/burger-coner/burger-coner.component';
import { WesternCuisineComponent } from './views/menus/western-cuisine/western-cuisine.component';
import { ItalianCuisineComponent } from './views/menus/italian-cuisine/italian-cuisine.component';
import { SrilankaConerComponent } from './views/menus/srilanka-coner/srilanka-coner.component';
import { JuiceComponent } from './views/menus/juice/juice.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import {FormsModule} from '@angular/forms';
import {CommentService} from './services/comment.service';
import {HttpClientModule} from '@angular/common/http';
import { MenuDashComponent } from './views/menus/menu-dash/menu-dash.component';
import {MatDialogModule, MatCardModule, MatFormFieldModule} from '@angular/material';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { MainComponent } from './admin-views/main/main.component';
import { DashboardComponent } from './admin-views/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-views/admin-login/admin-login.component';
import { EmployeeComponent } from './admin-views/employee/employee.component';
import { ViewCommentComponent } from './admin-views/view-comment/view-comment.component';
import {AppadminroutingModule} from './routing/appadminrouting/appadminrouting.module';
import { MealComponent } from './admin-views/meal/meal.component';
import { SettingComponent } from './admin-views/setting/setting.component';
import { VehicleComponent } from './admin-views/vehicle/vehicle.component';
import { ViewUsersComponent } from './admin-views/view-users/view-users.component';
import { ClientLoginComponent } from './views/client-login/client-login.component';
import { ClientRegistrationComponent } from './views/client-registration/client-registration.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthService} from './services/auth.service';
import {EmployeeService} from './services/employee.service';
import {AuthGuard} from './guards/auth.guard';
import {VehicleService} from './services/vehicle.service';
import {MealService} from './services/meal.service';
import {ClientLoginService} from './services/client-login.service';
import {FileService} from './services/file.service';
import { AllCategoryComponent } from './views/menus/all-category/all-category.component';
import { MealFilterPipe } from './pipes/meal-filter.pipe';
import {OrdersService} from './services/orders.service';
import {CustomerService} from './services/customer.service';

const appRoutes: Routes = [
  {
    path: 'nevigation',
    component: NavbarComponent,
    children: [
      {path : 'homepage', component : HomepageComponent},
      {path : 'menus', component : MenusComponent},
      {path : 'reservation', component : ReservationComponent},
      {path : 'specialties', component : SpecialtiesComponent},
      {path : 'about-us', component : AboutUsComponent},
      {path : 'contact-us', component : ContactUsComponent},
      {path : 'shopping-cart', component : ShoppingCartComponent},

      {path : 'menu-dash', component : MenuDashComponent},
      {path : 'burger-coner', component : BurgerConerComponent},
      {path : 'italian-cuisine' , component : ItalianCuisineComponent},
      {path : 'juice', component : JuiceComponent},
      {path : 'koththu', component : KoththuComponent},
      {path : 'mongolian-coner' , component : MongolianConerComponent},
      {path : 'noodles', component : NoodlesComponent},
      {path : 'soup-kettle', component : SoupKettleComponent},
      {path : 'srilanka-coner' , component : SrilankaConerComponent},
      {path : 'western-cuisine' , component : WesternCuisineComponent},
      {path : 'all-category' , component : AllCategoryComponent}
    ]
  },
  {path : 'client-login', component : ClientLoginComponent},
  {path : 'registration', component : ClientRegistrationComponent},
  {path: '', redirectTo: '/nevigation/homepage', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MenusComponent,
    ReservationComponent,
    SpecialtiesComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    MongolianConerComponent,
    KoththuComponent,
    NoodlesComponent,
    SoupKettleComponent,
    BurgerConerComponent,
    WesternCuisineComponent,
    ItalianCuisineComponent,
    SrilankaConerComponent,
    JuiceComponent,
    ShoppingCartComponent,
    MenuDashComponent,
    ConfirmEqualValidatorDirective,
    MainComponent,
    DashboardComponent,
    AdminLoginComponent,
    EmployeeComponent,
    ViewCommentComponent,
    MealComponent,
    SettingComponent,
    VehicleComponent,
    ViewUsersComponent,
    ClientLoginComponent,
    ClientRegistrationComponent,
    AllCategoryComponent,
    MealFilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppadminroutingModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CommentService,
    CustomerService,
    AuthService,
    EmployeeService,
    AuthGuard,
    VehicleService,
    OrdersService,
    MealService,
    ClientLoginService,
    FileService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
