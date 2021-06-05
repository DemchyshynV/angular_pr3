import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserPostRoutingModule} from './user-post-routing.module';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from './users/user/user.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {UserResolveService, UserService} from "../../services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UserPostRoutingModule
  ],
  providers: [
    UserService,
    UserResolveService
  ]
})
export class UserPostModule {
}
