import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HeaderComponent} from "./components/header/header.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductInfoComponent} from "./components/product-info/product-info.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent },
  {path: 'search/:text', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'product-info/:id',component: ProductInfoComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
