import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'users_posts',
        loadChildren: () => import('./components/user-post/user-post.module').then(value => value.UserPostModule)
      },
      {
        path: 'posts_comments',
        loadChildren: () => import('./components/post-comment/post-comment.module').then(value => value.PostCommentModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
