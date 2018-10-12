import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Comment} from '../../dtos/comment';
import {CommentService} from '../../services/comment.service';
import {Meal} from '../../dtos/meal';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  comments: Array<Comment> = [];
  selectedComments: Comment = new Comment();
  tempComment: Comment = null;
  manuallySelected: boolean ;
  @ViewChild('frmComments') frmComments: NgForm;
  constructor( private commentService: CommentService) { }

  ngOnInit() {
    this.loadAllComments();
  }

  loadAllComments(): void {
    this.commentService.getAllComments().subscribe(
      (result) => {
        this.comments = result;
        console.log(this.comments);
      }
    );
  }

  selectComment(comment: Comment): void {
    this.selectedComments = comment;
    this.tempComment = Object.assign({}, comment);
    this.manuallySelected = true;
  }

}
