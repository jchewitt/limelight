import { Routes } from "@angular/router";
import { ProtectedComponent } from "./components/protected.component";
import { PostsComponent } from "./components/posts.component";
import { DashboardComponent } from "./components/protected-main.component";

export const ProtectedRoutes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    children: [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },{
      path: 'dashboard',
      component: DashboardComponent
    },{
      path: 'posts',
      component: PostsComponent
    }]
  }
];
