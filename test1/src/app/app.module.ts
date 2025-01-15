import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DataComponent } from './components/data/data.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductSmartComponent } from './components/product-smart/product-smart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "./persistances/services/user.service";
import {ProductService} from "./persistances/services/product.service";
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ProductComponent,
    HeaderComponent,
    ProductSmartComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProductInfoComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      UserService,
      ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
