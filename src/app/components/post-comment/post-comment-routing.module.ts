import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts/posts.component";
import {CommentsComponent} from "./comments/comments.component";
import {PostsResolveService} from "../../services";

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostsResolveService}, children: [
      {path: ':id', component: CommentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCommentRoutingModule {
}
