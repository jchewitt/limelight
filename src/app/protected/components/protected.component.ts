import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-prjotected',
  template: `
    <div>
      <a [href]="user.website">{{user.name}}</a> | <a href="" [routerLink]="['./']">Home</a> | <a href="" [routerLink]="['./posts']">Posts</a> | <a href (click)="logout()">Logout</a>
    </div>
    <h1>Account Area</h1>
    <router-outlet></router-outlet>
  `
})
export class ProtectedComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService, private router: Router) {
  }

  public ngOnInit() {
    this.authService.loggedIn.subscribe(user => {
      console.log(this.authService.user);
      this.user = this.authService.user;
    });
  }

  /**
   * Logs out from the app
   */
  public logout(): void {
    this.authService.logout().subscribe(() =>{
      this.router.navigate(['/']);
    });
  }
}
