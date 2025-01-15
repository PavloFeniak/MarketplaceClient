import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';
  isRegistrationPage: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRegistrationPage = event.url.includes('/login') || event.url.includes('/registration');
      }
    });
    document.body.style.margin = "0";
  }
}
