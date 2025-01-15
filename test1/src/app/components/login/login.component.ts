import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Route, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UserService} from "../../persistances/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router,private userService: UserService){

  }

  login(){
    this.userService.login();
  }

  ngOnInit(): void {
  }
  openLoginPage(){
    console.log("odehvhudsfuiisuKJBISFVBSIV")
    this.router.navigate(['/registration']);
  }
}
