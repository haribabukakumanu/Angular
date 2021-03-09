import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  constructor(public service: PostsService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePostDetails(id).subscribe(
        (res: any) => {
          this.service.refreshList();
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
