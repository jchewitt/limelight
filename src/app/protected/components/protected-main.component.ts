import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-card style="width: 200px;">
      <h1><a [routerLink]="['../posts']">POSTS</a></h1>
    </mat-card>
  `,
  styles: [`
    a {
      text-decoration: none;,
      color: maroon;
    }
  `]
})
export class DashboardComponent {}
