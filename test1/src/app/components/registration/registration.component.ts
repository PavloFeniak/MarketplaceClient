import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../persistances/services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private router: Router, private userService: UserService) {
  }

 registration(){
    this.userService.registration();
 }

  openLoginPage(){
    console.log("odehvhudsfuiisuKJBISFVBSIV")
    this.router.navigate(['/login']);
  }
}
