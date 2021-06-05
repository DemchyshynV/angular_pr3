import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostCommentRoutingModule} from './post-comment-routing.module';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {CommentsComponent} from './comments/comments.component';
import {CommentComponent} from './comments/comment/comment.component';
import {CommentService, PostsResolveService} from "../../services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostCommentRoutingModule
  ],
  providers: [
    PostsResolveService,
    CommentService
  ]
})
export class PostCommentModule {
}
