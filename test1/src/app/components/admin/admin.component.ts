import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../../persistances/models/user.model";
import {UserService} from "../../persistances/services/user.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users: User[];
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(responseData => {
      this.users = responseData;
    })
  }


  banUser(id:number): void {
    this.userService.banUser(id).subscribe({
      next: (resData) => {
        console.log("user "+ id+ " successfully banned")
        console.log(resData)
        window.location.reload();
      },
      error: (errorMessage) => {
        console.log(errorMessage)
        window.location.reload();
      }
    });
  }
}
