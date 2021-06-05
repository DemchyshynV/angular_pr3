import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {UserResolveService} from "../../services";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UserResolveService}, children: [
      {path: ':id', component: PostsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPostRoutingModule {
}
