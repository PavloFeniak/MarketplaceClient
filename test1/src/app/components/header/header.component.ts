import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../persistances/services/user.service";
import {HeaderService} from "../../persistances/services/heder.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public isSearch: boolean = true;
  inputText: string = '';

  constructor(private router: Router, private userService: UserService, private el: ElementRef, private headerService: HeaderService) {
  }
  openHomePage(){
    this.router.navigate(['/']);
  }
  ngAfterViewInit() {
    const headerHeight = this.el.nativeElement.offsetHeight;
    this.headerService.setHeaderHeight(headerHeight);
  }
  openLoginPage(){
    console.log("odehvhudsfuiisuKJBISFVBSIV")
    this.router.navigate(['/login']);
  }
  openProfilePage(){
    this.router.navigate(['/profile']);
  }
  openSearchSection(){
    this.isSearch = !this.isSearch;
  }
  userNotNull(): boolean{
    if(this.userService.user == null) return true;
    else return false;
  }
  // userIsAdmin(): boolean{
  //   if(this.userService.user.)
  // }
  ngOnInit(): void {

  }

  onEnter(): void {

      this.router.navigate(['/search', (document.getElementById('search') as HTMLInputElement).value]);

  }
}
