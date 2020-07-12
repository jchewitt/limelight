import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/services/auth.service";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  template: `
    <div>
      <a href="" [routerLink]="['../']">< back</a>
    </div>
    <h2> Posts </h2>
    <mat-accordion>
      <mat-expansion-panel *ngFor="let post of posts; let i = index" hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{i+1}}. {{post.title}}
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>{{post.body}}</p>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [`
  `]
})
export class PostsComponent implements OnInit {

  user: any;
  posts: any;

  constructor(public authService: AuthService, public postsService : PostsService) {
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(user => {
      console.log(this.authService.user);
      this.user = this.authService.user;
      this.loadPosts();
    });
  }

  private loadPosts() {
    this.postsService.loadPosts(this.user.id).subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
