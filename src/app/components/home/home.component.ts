import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getUsersPosts(): void {
    this.router.navigate(['users_posts'])
  }

  getPostsComments() {
    this.router.navigate(['posts_comments'])
  }
}
