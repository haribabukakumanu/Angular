import { PostsService } from './services/posts.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private postData: PostsService) {}
  title = 'employee-info-app';
  rowData: any;
  ngOnInit() {
    this.postData.getPosts().subscribe((posts) => {
      console.log(posts);
      this.rowData = posts;
    });
  }
}
