import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProtectedService } from './protected.service';
import { ProtectedComponent } from "./components/protected.component";
import { PostsComponent } from "./components/posts.component";
import { PostsService } from './posts.service';
import { Routes, RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from "@angular/material/card";
import {DashboardComponent} from "./components/protected-main.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatExpansionModule,
    MatCardModule
  ],
  declarations: [
    ProtectedComponent,
    PostsComponent,
    DashboardComponent
  ],
  providers: [
    ProtectedService,
    PostsService
  ]
})
export class ProtectedModule {
}
